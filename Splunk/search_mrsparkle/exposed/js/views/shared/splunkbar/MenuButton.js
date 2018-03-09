define(
    [
        'module',
        'views/shared/DCEButton',
        './MenuButton.pcssm',
        './MenuButtonLite.pcssm'
    ],
    function(
        module,
        DCEButton,
        css,
        cssLite
    ){
        return DCEButton.extend({
            moduleId: module.id,
            constructor: function(options) {
                var isLite = options.model  && options.model.serverInfo && options.model.serverInfo.isLite();
                this.css = isLite? cssLite : css;
                this.className = this.css.view;
                DCEButton.apply(this, arguments);
            },
            initialize: function() {
                this.options.menu = true;
                this.options.action = 'toggle';
                this.options.svg = 'down-arrow';
                // TODO icon 修改
                // this.options.icon = '';
                DCEButton.prototype.initialize.apply(this, arguments);
            },
            render: function() {
                DCEButton.prototype.render.apply(this, arguments);
                // DCE-OEM-CHANGE 增加 dceIcon option, 修改 app name 右边的 padding
                if (this.options.dceIcon && this.options.truncateLongLabels) {
                    this.$('[data-role=label]').attr('class', this.css.truncateLabel + ' ' + this.css.dceIcon);
                } else {
                    this.options.dceIcon && this.$('[data-role=label]').attr('class', this.css.dceIcon);
                    this.options.hideLabelsAtSmallScreenSizes && this.$('[data-role=label]').attr('class', this.css.optionalLabel);
                }
                return this;
            }
        });
    });
