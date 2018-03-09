define([
    'jquery',
    'underscore',
    'backbone',
    'module',
    'views/shared/apps_remote/Master',
    'views/managementconsole/apps/install_app/overrides/shared/apps_remote/ResultsPane',
    'views/managementconsole/apps/install_app/overrides/shared/apps_remote/FilterBar',
    'views/managementconsole/apps/install_app/overrides/shared/apps_remote/apps/dialog/Master',
    'views/managementconsole/apps/app_listing/controls/SuccessDialog',
    'models/managementconsole/App',
    'models/services/appsbrowser/v1/App',
    'helpers/managementconsole/url',
    './Master.pcss'
], function(
    $,
    _,
    Backbone,
    module,
    AppsRemoteMasterView,
    ResultsPane,
    FilterBar,
    DialogView,
    SuccessDialog,
    DmcAppModel,
    AppRemoteModel,
    urlHelper,
    css
  ) {

    return AppsRemoteMasterView.extend({
        moduleId: module.id,

        initialize: function(options) {
            options = $.extend(true, options, {resultsPaneClass: ResultsPane, filterBarClass: FilterBar});
            AppsRemoteMasterView.prototype.initialize.call(this, options);

            var appId = this.getAppIdFromURL();
            if (appId) {
                this.handleSuccessReload(appId);
            }

            this.handleUrlParams();
        },

        handleUrlParams: function() {
            var appOperation = urlHelper.getUrlParam('operation'),
                appLabel = urlHelper.getUrlParam('appLabel'),
                appVersion = urlHelper.getUrlParam('appVersion');

            if (appOperation && appLabel && appVersion) {
                this.openSuccessDialog(appOperation, appLabel, appVersion);
            }
        },

        openSuccessDialog: function(appOperation, appLabel, appVersion) {
            urlHelper.removeUrlParam('operation');
            urlHelper.removeUrlParam('appLabel');
            urlHelper.removeUrlParam('appVersion');

            var successDialog = new SuccessDialog({
                operation: appOperation,
                appLabel: appLabel,
                appVersion: appVersion
            });

            $('body').append(successDialog.render().el);
            successDialog.show();
        },

        getAppIdFromURL: function() {
            var appId = this.model.metadata.get('appId');
            this.model.metadata.unset('appId', {silent: true});
            this.model.metadata.save({}, {replaceState: true, silent: true});
            return appId;
        },

        handleSuccessReload: function(appId) {
            this.fetchAppRemote(appId, this.showSuccessDialog.bind(this));
        },

        fetchAppRemote: function(appId, cb) {
            this.appRemote = new AppRemoteModel({id: appId});
            this.appRemote.fetch({
                data: $.param({ include: 'release' })
            }).done(this.fetchDmcApp.bind(this, this.appRemote, cb));
        },

        fetchDmcApp: function(appRemote, cb) {
            this.dmcApp = new DmcAppModel();
            this.dmcApp.entry.set('name', appRemote.get('appid'));
            this.dmcApp.fetch().done(cb);
        },

        showSuccessDialog: function() {
            var dialogView = new DialogView({
                showSuccess: true,
                model: $.extend({}, this.model, {
                  appRemote: this.appRemote,
                  app: this.dmcApp
                }),
                collection: this.collection
            });

            $('body').append(dialogView.render().el);
            dialogView.show();
        }
    });
});
