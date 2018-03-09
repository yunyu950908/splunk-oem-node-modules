define(['./window-c'], function(windowC) {

    var windowSelect2 = {};

    return {
        hooks: {
            beforeSetup: function() {
                window.$C = windowC();
                delete require.cache['stubs/splunk.config'];
            },

            beforeEachAppLoad: function() {
                delete window.Select2;
                delete window.$;
                delete window.jQuery;
            },

            afterEachAppLoad: function(app) {
                windowSelect2[app] = window.Select2;
            },

            beforeEachApp: function(app) {
                window.Select2 = windowSelect2[app];
            }
        },

        testHelpers: function() {
            return {
                mockModuleLocationsGen: function mockModules(list_of_module_locations, mock_location) {
                    //webpack transforms calls to this helper at define-time (for .js test files)
                    throw new Error('Calling mockModuleLocationsGen at runtime or from ES6 files is unsupported');
                }
            };
        },

        moduleIsolatorBlacklist: function() {
            return [
                // document.registerElement doesn't support multiple calls
                /webcomponents\/forminputs\/Splunk.*/
            ];
        }
    };
});
