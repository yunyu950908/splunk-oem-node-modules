define(
    [
        'jquery',
        'underscore',
        'backbone',
        'module',
        'controllers/BaseManagerPageController',
        'models/managementconsole/App',
        'models/apps_remote/Login',
        'collections/managementconsole/Apps',
        'views/managementconsole/apps/app_listing/Grid',
        'views/managementconsole/apps/app_listing/GridRow',
        'views/managementconsole/apps/app_listing/MoreInfo',
        'views/managementconsole/apps/app_listing/ActionCell',
        'views/managementconsole/apps/app_listing/controls/UninstallDialog',
        'views/managementconsole/apps/app_listing/controls/UpdateDialog',
        'views/managementconsole/apps/app_listing/controls/SuccessDialog',
        'views/managementconsole/apps/app_listing/controls/EnableDisable/EnableDialog',
        'views/managementconsole/apps/app_listing/controls/EnableDisable/DisableDialog',
        'views/managementconsole/apps/app_listing/controls/PermissionsDialog',
        'views/managementconsole/apps/app_listing/NewButtons',
        'views/shared/controls/SyntheticSelectControl',
        'views/managementconsole/shared/TopologyProgressControl',
        'helpers/managementconsole/url',
        'views/shared/pcss/basemanager.pcss',
        'views/managementconsole/shared.pcss',
        './PageController.pcss'
    ],
    function(
        $,
        _,
        Backbone,
        module,
        BaseController,
        AppModel,
        LoginModel,
        AppsCollection,
        Grid,
        GridRow,
        MoreInfo,
        ActionCell,
        UninstallDialog,
        UpdateDialog,
        SuccessDialog,
        EnableDialog,
        DisableDialog,
        PermissionsDialog,
        NewButtons,
        SyntheticSelectControl,
        TopologyProgressControl,
        urlHelper,
        cssBaseManager,
        cssShared,
        css
    ) {
        return BaseController.extend({
            moduleId: module.id,
            className: [BaseController.prototype.className, 'app-listing'].join(' '),

            initialize: function(options) {
                this.model = this.model || {};

                var newAppLinkHref = urlHelper.appBrowserUrl(),
                    appOperation = urlHelper.getUrlParam('operation'),
                    appLabel = urlHelper.getUrlParam('appLabel'),
                    appVersion = urlHelper.getUrlParam('appVersion');

                this.appsLocalMap = {};
                this.updateAppLocalsMap();

                options = $.extend(true, options, {
                    header: {
                        pageTitle: _('Apps').t(),
                        pageDesc: _('App Management lets you view and manage your Splunk apps. You can install applications, view dependencies, and download app packages to deploy manually to forwarders.').t()
                    },
                    learnMoreLink: '', // TODO
                    noEntitiesMessage: _('No apps found.').t(),
                    entitySingular: _('App').t(),
                    entitiesPlural: _('Apps').t(),
                    deleteDialogButtonLabel: _('Uninstall').t(),
                    entityModelClass: AppModel,
                    entitiesCollectionClass: AppsCollection,
                    deferreds: {
                        deployModel: this.model.deployModel.fetch()
                    },
                    grid: {
                        showAppFilter: false,
                        showOwnerFilter: false,
                        showSharingColumn: false,
                        showStatusColumn: false
                    },
                    customViews: {
                        Grid: Grid,
                        GridRow: GridRow,
                        ActionCell: ActionCell,
                        NewButtons: NewButtons,
                        MoreInfo: MoreInfo
                    },
                    editLinkHref: newAppLinkHref,
                    appsLocalMap: this.appsLocalMap
                });

                BaseController.prototype.initialize.call(this, options);

                this.model.state = this.model.state || new Backbone.Model();

                this.model.auth = new LoginModel();

                this.children.progressControl = new TopologyProgressControl({
                    model: {
                        topologyTask: this.model.deployTask,
                        user: this.model.user
                    },
                    onDeployTaskSuccessCB: function() {
                        return $.when(this.syncApps(), this.updateSplunkBarApps());
                    }.bind(this)
                });

                this.children.appTypeFilter = new SyntheticSelectControl({
                    label: _('Install Type:').t(),
                    menuWidth: 'narrow',
                    className: 'btn-group',
                    items: [
                        {value: '*', label: _('All').t()},
                        {value: 'external', label: _('Splunk').t()},
                        {value: 'self-service', label: _('Self-Service').t()}
                    ],
                    model: this.model.state,
                    modelAttribute: 'serviceability',
                    toggleClassName: 'btn-pill',
                    popdownOptions: {
                        detachDialog: true
                    }
                });

                if (appOperation && appLabel && appVersion) {
                    this.openSuccessDialog(appOperation, appLabel, appVersion);
                }

                this.model.state.on('change:serviceability', this.handleServiceabilityFilterChange.bind(this));

                this.model.controller.on('toggleUpdateChecking', this.toggleUpdateChecking.bind(this));
                this.model.controller.on('toggleVisibility', this.toggleVisibility.bind(this));
                this.model.controller.on('toggleStatus', this.openStatusDialog.bind(this));
                this.model.controller.on('editPermissions', this.handleEditPermissions.bind(this));
                this.model.controller.on('updateApp', this.openUpdateDialog.bind(this));
                this.model.controller.on('uninstallApp', this.openUninstallDialog.bind(this));

                this.model.deployTask.on('syncApps', this.syncApps.bind(this));
                this.collection.appsLocal.on('sync', this.updateAppLocalsMap.bind(this));
            },

            syncApps: function() {
                return this.collection.entities.fetch().done(this.collection.appsLocal.fetch.bind(this.collection.appsLocal));
            },

            // Construct map to perform merge with apps from dmc/apps
            // in O(n). Merge is required to not duplicate work / information
            // already available to us through apps/local endpoint
            // maps: name -> app model
            updateAppLocalsMap: function() {
                this.collection.appsLocal.each(function(app) {
                    this.appsLocalMap[app.entry.get('name')] = app;
                }.bind(this));

                this.collection.appsLocal.trigger('syncAppsLocal', this.appsLocalMap);
            },

            render: function() {
                BaseController.prototype.render.apply(this, arguments);

                $.when(this.renderDfd).then(function() {
                    this.children.progressControl.render().insertAfter($('.text-name-filter-placeholder'));
                    this.children.appTypeFilter.render().insertBefore($('.text-name-filter-placeholder'));
                }.bind(this));

                return this;
            },

            handleServiceabilityFilterChange: function(model, newVal) {
                switch (newVal) {
                    case 'external':
                            this.model.metadata.setQueryAttr('external', true);
                        break;
                    case 'self-service':
                            this.model.metadata.setQueryAttr('external', false);
                        break;
                    default:
                        this.model.metadata.unsetQueryAttr('external');
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

            // General Note on executing REST call on a model for basemanager:
            // Always make a clone of it before any functions like app.update,
            // app.uninstall, etc. This way if the call ends with a error on the
            // model, it will not automatically display the error message below the table row
            openUninstallDialog: function(appModel) {
                var uninstallDialog = new UninstallDialog({
                    model: {
                        app: appModel.clone(),
                        deployTask: this.model.deployTask
                    },
                    appsCollectionFetch: this.fetchEntitiesCollection.bind(this),
                    primFn: appModel.uninstall
                });

                $('body').append(uninstallDialog.render().el);
                uninstallDialog.show();
            },

            openUpdateDialog: function(appModel) {
                var dmcApp = appModel.clone(),
                    updateDialog = new UpdateDialog({
                    model: {
                        app: dmcApp,
                        deployTask: this.model.deployTask,
                        auth: this.model.auth
                    },
                    appsCollectionFetch: this.fetchEntitiesCollection.bind(this),
                    primFn: appModel.update
                });

                $("body").append(updateDialog.render().el);
                updateDialog.show();
            },

            openStatusDialog: function(appModel) {
                var appLocal = this.appsLocalMap[appModel.entry.get('name')],
                    isExternalApp = appModel.isExternal(),
                    app = isExternalApp ? appLocal.clone() : appModel.clone(),
                    isDisabled = appLocal.entry.content.get('disabled'),
                    DialogClass = isDisabled ? EnableDialog : DisableDialog,
                    primFn = isDisabled ? app.enable : app.disable,
                    dialog = new DialogClass({
                        model: {
                            app: app,
                            deployTask: this.model.deployTask
                        },
                        appLocalFetch: appLocal.fetch.bind(appLocal),
                        appModelFetch: appModel.fetch.bind(appModel),
                        isExternalApp: isExternalApp,
                        updateSplunkBarAppsCB: this.updateSplunkBarApps.bind(this),
                        operation: isDisabled ? 'enable' : 'disable',
                        primFn: primFn
                    });

                $('body').append(dialog.render().el);
                dialog.show();
            },

            handleEditPermissions: function(appModel) {
                var appLocal = this.appsLocalMap[appModel.entry.get('name')],
                    permissionsDialog = new PermissionsDialog({
                    model: {
                        app: appLocal,
                        user: this.model.user,
                        serverInfo: this.model.serverInfo
                    },
                    collection: {
                        roles: this.collection.roles
                    }
                });

                $('body').append(permissionsDialog.render().el);
                permissionsDialog.show();
            },

            toggleUpdateChecking: function(appModel) {
                var appLocal = this.appsLocalMap[appModel.entry.get('name')];
                appLocal.toggleUpdateChecking();
                appLocal.save();
            },

            toggleVisibility: function(appModel) {
                var appLocal = this.appsLocalMap[appModel.entry.get('name')];
                appLocal.toggleVisibility();
                appLocal.save().done(this.updateSplunkBarApps.bind(this));
            },

            updateSplunkBarApps: function() {
                // fetch data taken from views/shared/splunkbar/Master.js
                return this.collection.appLocals.fetch({
                    data: {
                        sort_key: 'name',
                        sort_dir: 'asc',
                        app: '-' ,
                        owner: this.model.application.get('owner'),
                        search: 'visible=true AND disabled=0 AND name!=launcher',
                        count: -1
                    }
                });
            }
        });
    }
);
