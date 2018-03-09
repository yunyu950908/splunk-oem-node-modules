define(
    [
        'jquery',
        'module',
        'views/Base',
        'views/shared/delegates/StopScrollPropagation',
        'splunk.util',
        'contrib/text!./MenuContents.html',
        './MenuContents.pcssm',
        'uri/route'
    ],
    function(
        $,
        module,
        BaseView,
        StopScrollPropagation,
        splunk_util,
        appsTemplate,
        css,
        route
    ){
        return BaseView.extend({
            moduleId: module.id,
            template: appsTemplate,
            css: css,
            initialize: function() {
                this.haveIcons = false;
                BaseView.prototype.initialize.apply(this, arguments);

                if(this.options.activeMenu && this.options.activeMenu.name === 'app'){
                    this.currentApp = this.model.application.get('app');
                }
                this.collection.apps.on('ready change reset', this.debouncedRender, this);
                this.model.user.on('ready change', this.debouncedRender, this);
                // handle the case when collection.apps is already set
                if (this.collection.apps.length > 0) {
                    this.debouncedRender();
                }
                this.getDceUrl();
            },
            render: function() {
                this.haveIcons = false;
                var that = this,
                    app,
                    curApp = null,
                    apps = this.collection.apps.filter(function(app) {
                        if (app.entry.content.has('show_in_nav')) {
                            var appName = app.entry.get('name');
                            // console.log(`appname: ${appName}`);
                            // DCE-OEM-CHANGE
                            // return app.entry.content.get('show_in_nav')
                            // 过滤掉现在所在 app 不显示，
                            // 只显示 dce_monitor, dce_monitor_addon, oem-start-kit 应用
                            // TODO 删除 oem-start-kit
                            return app.entry.content.get('show_in_nav')
                            && appName !== that.currentApp
                            && (appName === 'dce_monitor'
                                || appName === 'dce_monitor_addon'
                                || appName === 'oem-starter-kit');
                        } else {
                            // SPL-124536 - Support the apps menu on Splunk < 6.3,
                            // before the 'show_in_nav' option was made available.
                            var appName = app.entry.get('name');
                            return appName !== 'splunk_management_console' &&
                                appName !== 'launcher';
                        }
                    }).map(function(model, key, list) {
                        var appIcon = route.appIconAlt(
                            that.model.application.get('root'),
                            that.model.application.get('locale'),
                            that.model.application.get('owner'),
                            model.entry.get('name')
                        );
                        // DCE-OEM-CHANGE
                        // dce_monitor 显示 DCE 监控控制台，
                        // dce_monitor_addon 显示 DCE 数据采集器
                        // TODO 删除 oem-start-kit
                        var oldLabel = model.entry.content.get('label');
                        var appLabel;
                        if (oldLabel === 'oem-starter-kit' || oldLabel === 'dce_monitor') {
                            appLabel = 'DCE 监控控制台';
                        } else if (oldLabel === 'dce_monitor_addon') {
                            appLabel = 'DCE 数据采集器';
                        } else {
                            appLabel = oldLabel;
                        }
                        app = {
                            href: splunk_util.make_url('/app/'+ model.entry.get('name')),
                            label: appLabel,
                            // DCE-OEM-CHANGE
                            // label: model.entry.content.get('label'),
                            name: model.entry.get('name'),
                            // icon: appIcon
                        };
                        if(model.entry.get('name') === that.currentApp) {
                            curApp = app;
                        }
                        return app;
                    }),
                    // DCE-OEM-CHANGE
                    // TODO 获取 dceUrl
                    html = this.compiledTemplate({
                        apps: apps,
                        currentApp: curApp,
                        dceUrl: this.dceUrl,
                        make_url: splunk_util.make_url,
                        appsRemote_url: route.appsRemote(
                                this.model.application.get('root'),
                                this.model.application.get('locale'),
                                this.model.application.get('app')),
                        canViewRemoteApps: that.model.user.canViewRemoteApps(),
                        css: css
                    });

                this.children.stopScrollPropagation = new StopScrollPropagation({el:this.$('[data-role=apps-list]')[0]});

                this.$el.html(html);
                return this;
            },
            getDceUrl: function() {
                var appname = this.currentApp ? this.currentApp : this.model.application.get('app');
                var locale = this.model.application.get('locale');
                var that = this;
                var url = '/' + locale + '/custom/' + appname + '/data/dce_url';
                $.ajax({
                    type: 'GET',
                    dataType: 'json',
                    cache: false,
                    url: url,
                    success: function(data) {
                        that.dceUrl = data.dce_url;
                    },
                    error: function(xhr, textStatus, errorThrown) {
                        console.log('error', xhr, textStatus, errorThrown);
                    }
                });
            },
            setIcons: function() {
                if(this.haveIcons){
                    return;
                }
                this.haveIcons = true;
                var icons = this.$el.find('[data-role="icon"]');
                icons.each(function(index, ico){
                    ico = $(ico);
                    ico.attr('src', ico.attr('data-icosrc')).show();
                });
            }
        });
    });
