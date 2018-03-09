define(['underscore', 'splunkjs/mvc/utils'], function (_, Utils) {

    setupTestApp(function (helpers) {
        var moduleIsolator = new helpers.CachedModuleIsolator(require.cache);

        return {
            loadSetup: function () {
                console.log('ponyville load setup');

                //see hook_override test
                _.extend(Utils, {
                    _getUrlInfo: function () {
                        return {
                            root: '',
                            locale: 'en-us',
                            app: 'test',
                            page: 'page'
                        };
                    }
                });
            },

            loadFileSetup: function () {
                console.log('ponyville load file setup');
            },

            loadFileTeardown: function (file) {
                console.log('ponyville load file teardown', file);

                moduleIsolator.undefine(file, true);
            },

            appSetup: function () {
                console.log('ponyville app setup');
            },

            appTeardown: function () {
                console.log('ponyville app teardown');
            },

            fileSetup: function (file) {
                console.log('ponyville file setup', file);

                moduleIsolator.restore(file);
            },

            fileTeardown: function (file) {
                console.log('ponyville file teardown', file);
            },

            testSetup: function () {
                //console.log('ponyville test setup');
            },

            testTeardown: function () {
                //console.log('ponyville test teardown');
            }
        };
    });
});
