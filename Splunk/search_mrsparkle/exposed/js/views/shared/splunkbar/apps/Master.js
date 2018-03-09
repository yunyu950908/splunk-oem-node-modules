define(
    [
        'underscore',
        'jquery',
        'module',
        '../../DCEMenu',
        '../MenuButton',
        './MenuContents',
        'splunk.util',
        './Master.pcssm',
        'uri/route'
    ],
    function(
        _,
        $,
        module,
        MenuView,
        MenuButtonView,
        MenuContentsView,
        splunk_util,
        css,
        route
    ){
        return MenuView.extend({
            moduleId: module.id,
            css: css,
            initialize: function() {
                // this.options.dceStyle = true;
                if(this.options.activeMenu && this.options.activeMenu.name === 'app'){
                    this.currentApp = this.model.application.get('app');
                }
                this.collection.apps.on('ready change reset', this.debouncedRender, this);

                if (this.collection.apps.length > 0) {
                    this.debouncedRender();
                }

                this.options.toggleView = new MenuButtonView({
                    label:  _('Apps').t(),
                    truncateLongLabels: true,
                    // DCE-OEM-CHANGE 增加 dceIcon option
                    dceIcon: true
                });
                // console.log('apps', this.collection.apps);
                this.options.contentView = new MenuContentsView({
                    collection: {
                        apps: this.collection.apps
                    },
                    model: {
                        user: this.model.user,
                        application: this.model.application
                    },
                    activeMenu: this.options.activeMenu
                });

                MenuView.prototype.initialize.apply(this, arguments);

            },
            render: function() {
                MenuView.prototype.render.apply(this, arguments);

                // TO DO: Simplify this...
                var that = this,
                    curApp = null;

                this.collection.apps.each(function(model, key, list) {
                    if(model.entry.get('name') === that.currentApp && model.entry.content.get('show_in_nav')) {
                        curApp = model;
                    }
                });

                // DCE-OEM-CHANGE
                // 当前应用 label 如果是 dce_monitor 或 oem-starter-kit 显示为 DCE 监控控制台
                // 'DCE 监控控制台' : oldLabel;
                curApp && this.options.toggleView.set({label: curApp.entry.content.get('label') });
                // curApp && this.options.toggleView.set({label: _('App:').t() + ' ' + _(curApp.entry.content.get('label')).t() });
                // DCE-OEM-CHANGE
                // 将 popdown 的 options.adjustPosition 改为 false
                // 当此参数为 true 的时候，会讲 popdown 的定位的位置(top,left,margin-left, bottom) 以 inline style 的形式写入元素中
                // 导致我们无法将样式覆盖
                if (this.children.popdown) {
                    this.children.popdown.options.adjustPosition = false;
                }
                this.children.popdown && this.children.popdown.on('show', this.options.contentView.setIcons, this);
                // DCE-OEM-CHANGE
                // 修改 popdown 的 位置
                this.children.dialog.$el.css({top: '100%', left: 0, bottom: 0, margin: 0});
                return this;
            }
        });
    });
