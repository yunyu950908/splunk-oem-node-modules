define([
    'jquery',
    'underscore',
    'backbone',
    'module',
    'views/Base',
    './DCENavButton',
    './AppNav.pcssm'
],
function(
    $,
    _,
    Backbone,
    module,
    BaseView,
    ButtonView,
    css
){
    return BaseView.extend({
        moduleId: module.id,
        css: css,
        events: {
            'sortstop .list-apps': 'onSortableStop'
        },
        initialize: function() {
            BaseView.prototype.initialize.apply(this, arguments);
            this.listenTo(this.model.appNav, 'change:nav', this.debouncedRender);
            this.listenTo(this.model.application, 'change:page', this.setActiveItem);
        },
        render: function() {
            var self = this;
            var navData = this.model.appNav.get('nav');
            var currentSection = this.model.application.get('page');
            if(!navData){return this;}

            this.$el.html('');

            $.each(navData, function(index, item){
                var itemView,
                    iconType;

                // workaround, add a gap to keep visual consistency
                if (index == 0) {
                    self.$el.append('<div class="' + css['blank-gap'] + '"></div>');
                }

                // add section title
                var sectionTitle = '<div class="' + css['section-title'] + '">' + item.label + '</div>';
                self.$el.append(sectionTitle);

                if (!item.submenu) {
                    itemView = new ButtonView({
                        href: item.uri,
                        title: item.label,
                        label: item.label,
                        icon: '',
                        iconSize: 1.5,
                        active: currentSection == item.viewName,
                        preventDefault: false,
                        dataAttributes: {targetView: item.viewName}
                    });

                    itemView && self.$el.append(itemView.render().$el);
                }

                // 可能由于配置错误没有子目录，所以这里要做一下容错
                $.each(item.submenu || [], function(index, sub){
                    itemView = new ButtonView({
                        href: sub.uri,
                        title: sub.label,
                        label: sub.label,
                        icon: '',
                        iconSize: 1.5,
                        active: currentSection == sub.viewName,
                        preventDefault: false,
                        dataAttributes: {targetView: sub.viewName}
                    });

                    itemView && self.$el.append(itemView.render().$el);
                });
            });

            this.setActiveItem.call(this);

            return this;
        },
        bindDragAndDrop: function() {
            var self = this;
            this.$listApps.sortable({ axis: "y" });
        },
        setActiveItem: function(){
            if(this.model.application.get('page')){
                //really should be figuring out which button is for this and calling set.
                this.$('[data-target-view=' + this.model.application.get('page') + ']').attr('data-active', 'active');
            }
        }
    });
});
