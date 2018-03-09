var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');

var log = require('@splunk/karma-unit-test-runner').utils.childLog;
var virtualModuleLoader = require('@splunk/karma-unit-test-runner').utils.virtualModuleLoader;

/**
 * A webpack plugin hooking into the 'webpack has finished organizing all modules into chunks' stage.
 * It iterates all test chunks, and looks for modules marked as 'mocked' in the mock list. Mocked modules
 * are removed. At the same time, if a module is declared as a mock, a copy is added to the chunk, named
 * as the 'mocked' module it replaces.
 * Dependencies: The mock list used is provided by the redefine-parser loader. The plugin can also
 * provide a matching CommonsChunkPlugin that prevents mocked/mock modules from being pulled into the
 * commons chunk (mandatory).
 */
function MockModulePlugin(app, coreSourcePath) {
    this.app = app;
    this.coreSourcePath = coreSourcePath;
    this.mocks = {};
    var self = this;

    this.createCommonsChunkPlugin = function() {
        return new webpack.optimize.CommonsChunkPlugin({
            minChunks: function(module, count) {
                // never pull mocked modules into the commons chunk
                // don't need to check for mocks, because they're all unique, virtual
                // modules with a count of 1
                var isMocked = _.some(self.mocks, function(fileMocks) {
                    return _.has(fileMocks, module.resource);
                });
                return isMocked
                    ? false
                    : count >= 2;
            }
        });
    };
}

MockModulePlugin.prototype.apply = function(compiler) {
    var self = this;

    compiler.plugin('compilation', function(compilation) {

        compilation.plugin('after-optimize-chunks', function(chunks, modules) {

            log.debug('starting out with mocks', self.mocks);

            var virtualMocks = virtualModuleLoader.getNamespace('testing_mocks');

            _(chunks).filter(function(chunk) {
                //only act on test chunks, i.e. not on common, hooks, ...
                return _.startsWith(chunk.name, '/test/');
            }).each(function(chunk) {

                var chunkFile = _.first(chunk.origins).module.resource;
                log.debug('inspecting chunk:', chunk.name, 'file', chunkFile);

                if (!_.has(self.mocks, chunkFile)) {
                    return;
                }

                var mocks = self.mocks[chunkFile];
                log.debug('  using mocks', mocks);

                var fileMockRedefine = [];
                chunk.modules = _.reject(chunk.modules, function(mod) {
                    if (_.isEmpty(mod.resource)) {
                        return false;
                    }
                    var removeModule = false;

                    //if this module is on the mocked list, mark it for removal
                    var fileMockOriginal;
                    _.find(mocks, function(v, k) {
                        if (mod.resource == k) {
                            fileMockOriginal = k;
                            return true;
                        }
                    });
                    if (fileMockOriginal) {
                        log.debug('  removing original module', fileMockOriginal);
                        removeModule = true;
                    }

                    //if this module is on the mock list, mark it for duplication
                    _.each(mocks, function(v, k) {
                        if (_.has(virtualMocks, v) && _.includes(mod.resource, 'virtual-module-template') && _.includes(mod.request, v)) {
                            fileMockRedefine.push({redefine: k, replacement: mod});
                        }
                    });

                    return removeModule;
                });

                //create copies of each mock (one for every original)
                var appSource = path.join(self.app, 'src');

                _.each(fileMockRedefine, function(mock) {
                    log.debug('  creating mock copy for', mock.redefine);

                    //not too happy with that - cloning a module this way might break after webpack updates
                    var clonedMock = _.clone(mock.replacement);

                    //need to determine a module id for this cloned mock. this depends on whether
                    //it's a core source module (exposed/js) or an in-app module (appserver/static).
                    //requires active SplunkNameModuleIdsPlugin
                    var isCore = mock.redefine.indexOf(appSource) === -1;
                    var prefix = isCore
                        ? ''
                        : self.app + '-';
                    var source = isCore
                        ? self.coreSourcePath
                        : appSource;

                    var moduleName = mock.redefine.substring(mock.redefine.indexOf(source) + source.length + 1);
                    clonedMock.id = (prefix + moduleName).slice(0, -path.extname(moduleName).length);
                    log.debug('    cloned mock id:', clonedMock.id);

                    chunk.modules.push(clonedMock);
                });
            });
        });
    });
};

MockModulePlugin.getInstance = function(compiler) {
    return _.find(_.get(compiler, 'options.plugins', []), function(plugin) {
        return plugin instanceof MockModulePlugin;
    });
};

module.exports = MockModulePlugin;
