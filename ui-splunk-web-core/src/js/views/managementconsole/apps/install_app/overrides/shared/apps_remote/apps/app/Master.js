define([
    'jquery',
    'underscore',
    'backbone',
    'module',
    'uri/route',
    'models/managementconsole/Task',
    'views/shared/apps_remote/apps/app/Master',
    'views/managementconsole/apps/install_app/overrides/shared/apps_remote/apps/dialog/Master',
    'views/managementconsole/apps/install_app/overrides/shared/apps_remote/apps/app/ConfirmDialog',
    'views/managementconsole/apps/app_listing/controls/UpdateDialog'
], function(
        $,
        _,
        Backbone,
        module,
        route,
        TaskModel,
        AppView,
        DialogView,
        ConfirmDialog,
        UpdateDialog
){
    return AppView.extend({
        moduleId: module.id,
        installMethodKey: 'install_method_distributed',

        initialize: function(options) {
            options = $.extend(true, options, {dialogViewClass: DialogView});
            AppView.prototype.initialize.call(this, options);

            this.listenTo(this.collection.appLocals, 'sync', this.render);
            this.listenTo(this.collection.dmcApps, 'sync', this.render);

            this.model.deployTask = new TaskModel();
            this.model.confirmation = new Backbone.Model();
            this.listenTo(this.model.confirmation, 'installApp', this.showDialog);
        },

        events: $.extend({}, AppView.prototype.events, {
            'click .install-button': function(e) {
               e.preventDefault();

               var confirmDialog = new ConfirmDialog({
                   model: {
                      confirmation: this.model.confirmation,
                      appRemote: this.model.appRemote
                   }
               });

               this.$('body').append(confirmDialog.render().el);
               confirmDialog.show();
            },

            'click .update-button': function(e) {
                e.preventDefault();

                var appId = this.model.appRemote.get('appid'),
                    dmcApp = this.collection.dmcApps.findByEntryName(appId),
                    updateDialog = new UpdateDialog({
                        model: {
                            app: dmcApp,
                            deployTask: this.model.deployTask,
                            auth: this.model.auth
                        },
                        appsCollectionFetch: this.fetchAppsCollections.bind(this),
                        primFn: dmcApp.update
                    });

                $("body").append(updateDialog.render().el);
                updateDialog.show();
            }
        }),

        // Fetch Both dmcApps and appLocals collections to update the app browser entry
        fetchAppsCollections: function() {
            this.collection.appLocals.fetch();
            this.collection.dmcApps.fetch();
        },

        cloudRender: function(install_method) {
            var appId = this.model.appRemote.get('appid'),
                localApp = this.collection.appLocals.findByEntryName(appId),
                localAppUnfiltered = this.collection.appLocalsUnfiltered.findByEntryName(appId),
                dmcApp = this.collection.dmcApps.findByEntryName(appId),
                // SPL-132754: We also need to check that the localApp is not a "dummy" app
                // We can do this by determining if its version is defined
                // This is not a general solution per se, but it works for all apps that we
                // allow to be installed in the cloud.
                localAppUnfilteredVersion = localAppUnfiltered && localAppUnfiltered.entry.content.get('version');
            
            if (dmcApp && (dmcApp.hasUpdate() && dmcApp.canUpdate())) {
                return this.getDmcAppUpdateButton(dmcApp);

            } else if (localApp && localApp.entry.links.has('update')) {
                return AppView.prototype.cloudRender.apply(this, arguments);
            } else if (dmcApp && localApp) {
                var appLink = route.prebuiltAppLink(this.model.application.get('root'), this.model.application.get('locale'), appId, '');
                return {
                    buttonText: _('Open App').t(),
                    link: appLink
                };
            } else if (localAppUnfilteredVersion && (localAppUnfiltered || dmcApp)) {
                return {
                    buttonText: _('Already Installed').t(),
                    buttonClass: 'disabled'
                };
            } else {
                switch(install_method) {

                    // This should never happen.
                    // If an app is ever flagged as "simple" in a AppManagement-Cloud
                    // environment, this means that this app should be installable,
                    // but only outside of AppManagement, therefore CloudOps needs to
                    // be invovled --> we resolve this case to 'assisted' here.
                    case 'simple':
                        return AppView.prototype.cloudRender.call(this, 'assisted');

                    // This case is logically the 'simple' case, but specific to
                    // AppManagement-Cloud environments.
                    // This flag indicates that this app is installable by AppManagement
                    // cloud environments but not by other Cloud environments.
                    case 'appmgmt_phase':
                        return this.getDmcAppInstallButton();

                    default:
                        return AppView.prototype.cloudRender.apply(this, arguments);
                }
            }
        },

        localRender: function(appId, localApp) {
            var dmcApp = this.collection.dmcApps.findByEntryName(appId);

            if (dmcApp && (dmcApp.hasUpdate() && dmcApp.canUpdate())) {
                return this.getDmcAppUpdateButton(dmcApp);

            } else {
                return AppView.prototype.localRender.apply(this, arguments);
            }
        },

        getDmcAppUpdateButton: function(dmcApp) {
            if (dmcApp.canEdit()) {
                return {
                    buttonText: _('Update').t(),
                    buttonClass: 'update-button'
                };
            } else {
                return {
                    messageText: _('You do not have permission to update this app.').t(),
                    buttonText: _('Update').t(),
                    buttonClass: 'disabled'
                };
            }
        },

        getDmcAppInstallButton: function() {
            if (this.model.user.hasCapability('dmc_deploy_apps')) {
                return {
                    buttonText: _('Install').t(),
                    buttonClass: 'btn-primary install-button'
                };
            } else {
                return {
                    messageText: _('You do not have permission to install this app.').t(),
                    buttonText: _('Install').t(),
                    buttonClass: 'disabled'
                };
            }
        }
    });
});
