'use strict';

/* eslint-disable */

var _ = require('lodash');
var fs = require('fs-extra');
var istanbul = require('istanbul');
var path = require('path');
var Table = require('cli-table');
var colors = require('colors/safe');

function CoveragePlugin(basePath, reporters, coverageFlag, coverageMaps, coverageReportDir, settings, emitter) {
    var log = require('karma/lib/logger').create('coverage');

    if (!_.includes(reporters, 'coverage')) {
        reporters.push('coverage');
    }

    var watermarks = [[50, 'red'], [70, 'yellow'], [100, 'green']]; //min values for color
    var self = this;
    var patterns;

    function loadPatterns(appsConfig) {
        log.debug('Loading coverage patterns');

        return _.reduce(appsConfig, function (patterns, appConfig, app) {
            var patternsPath = path.join(appConfig.path, settings.supportDir, 'coverage-patterns.json');
            if (!fs.existsSync(patternsPath)) {
                log.debug('No coverage patterns file for application:', app);
                patterns[app] = {};
            } else {
                try {
                    patterns[app] = require(patternsPath);
                } catch (e) {
                    log.warn('Unable to load coverage patterns file for application', app, '- syntax error?');
                    patterns[app] = {};
                }
            }
            if (_.has(settings.coveragePatterns, app)) {
                patterns[app] = settings.coveragePatterns[app](patterns[app]);
            }
            return patterns;
        }, {});
    }

    emitter.on('__test_apps_filtered', function (appsConfig, appTests) {
        self.appsConfig = appsConfig; //keep this for reporting

        if (_.isUndefined(patterns)) {
            patterns = loadPatterns(appsConfig);
        }

        _.each(appsConfig, function (appConfig, app) {
            appConfig.coveragePatterns = _(appTests[app]).map(function (test) {
                return _.get(patterns[app], test.name, false);
            }).compact().value();

            if (_.isEmpty(appConfig.coveragePatterns)) {
                log.info('No coverage patterns defined for active test set in app:', app);
            } else {
                log.debug('Coverage patterns for app:', app, 'are:', appConfig.coveragePatterns);
            }
        });
    });

    emitter.on('__test_app_changed', function (app, appConfig) {
        self.appsConfig[app] = appConfig;
    });

    emitter.on('coverage_complete', function (browser, coverage) {
        if (!_.isEmpty(coverage)) {
            if (coverageMaps) {
                log.info('Writing coverage maps');
                var covMapsPath = path.resolve(coverageReportDir, 'coverage_maps_unit');
                fs.emptyDirSync(covMapsPath);
                fs.writeFileSync(path.join(covMapsPath, 'coverage.json'), JSON.stringify(coverage));
            }

            if (coverageFlag) {
                var table = new Table({
                    head: _.map(['App', 'File', 'Covered/Total.', 'Coverage (%)'], _.unary(colors.reset.bold.underline))
                });

                var allAppConfigs = _.assign({}, _.mapValues(settings.externalSourcePaths, function (ext) {
                    return { path: ext, sourcePaths: [ext] };
                }), self.appsConfig);

                table.push.apply(table, _(coverage).mapValues(istanbul.utils.summarizeFileCoverage).mapValues('statements').transform(function (result, fileCoverage, file) {
                    var app = _.findKey(allAppConfigs, function (appConfig) {
                        return _.some(appConfig.sourcePaths, function (appSourcePath) {
                            return file.startsWith(appSourcePath);
                        });
                    }) || '<unknown>';
                    var appBasePath = app === '<unknown>' ? basePath : allAppConfigs[app].path;
                    result.push([app, path.relative(appBasePath, file), fileCoverage]);
                }, []).sortBy([0, 1]) //by app, filename
                .map(function (fileCoverage) {
                    var stmts = _.last(fileCoverage);
                    var color = _.find(watermarks, function (mark) {
                        return stmts.pct <= mark[0];
                    })[1];

                    var result = table.options.head.length == 4 ? [colors[color](fileCoverage[0])] : [];
                    return result.concat([colors[color].bold(fileCoverage[1]), colors[color](stmts.covered + '/' + stmts.total), colors[color].bold(stmts.pct.toString())]);
                }).value());
                log.info('\n' + table.toString());
            }
        }
    });
}

CoveragePlugin.$inject = ['config.basePath', 'config.reporters', 'config.coverage', 'config.coverageMaps', 'config.coverageReporter.dir', 'config.talos.settings', 'emitter'];
module.exports = {
    'framework:coverage': ['type', CoveragePlugin]
};