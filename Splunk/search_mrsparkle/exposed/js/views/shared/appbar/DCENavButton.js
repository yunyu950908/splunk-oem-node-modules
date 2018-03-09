define(
    [
        'underscore',
        'module',
        'views/shared/DCEButton',
        'views/shared/DCEIcon',
        './DCENavButton.pcssm'
    ],
    function(
        _,
        module,
        Button,
        IconView,
        css
    ){
        return Button.extend({
            moduleId: module.id,
            css: css,
            initialize: function(options) {
                Button.prototype.initialize.apply(this, arguments);
            },
            render: function() {
                // Attributes
                this.$el.attr('href', this.options.href);
                this.$el.attr('class', css.view);
                this._setOrRemoveAttr('disabled', this.options.enabled ? false : 'disabled');
                this._setOrRemoveAttr('title', this.options.title || this.options.label);
                this._setOrRemoveAttr('data-action', this.options.action);
                this._setOrRemoveAttr('data-active', this.options.active ? 'active' : false);

                // Contents
                if (!this.el.innerHTML) {
                    this.$el.html('<span class="' + this.css.label + ' ' + this.css.visibleLg + '" data-role="label">' + this.options.label + '</span>');
                } else {
                    this.$('[data-role=label]').html(this.options.label);
                }

                // Icon
                if (this.options.icon) {
                    this.children.icon = this.children.icon || new IconView();
                    this.children.icon.set({icon: this.options.icon, size: this.options.iconSize});
                    // ghetto and inconsistent
                    this.children.icon.el.style.marginRight = '10px';

                    this.children.icon.render().prependTo(this.$el);
                } else if (this.children.icon) {
                    this.children.icon.$el.detach();
                }

                // Data Attributes
                _.each(this.options.dataAttributes, function(value, key){
                    var dataAttr = 'data-' + key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                    this._setOrRemoveAttr(dataAttr, value);
                }, this);
                return this;
            }
        });
    });
