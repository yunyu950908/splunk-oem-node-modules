/* REUSE WITH CAUTION
/* ----------------------------------------------------------
/* This a CSS Module based view should be considered as Beta.
/* API is likely to change       */

/**
 * All options can be set during initialization or later, by using set().
 * @initialize or @set
 *
 * @param {Object} [options]
 * @param {String} [options.icon = 'space'] - see icons.pcssm for full list of icons.
 * @param {Number} [options.iconSize = 1.0] - relative size of the icon.
 */

define([
    'underscore',
    'module',
    'views/Base',
    './DCEIcon.pcssm',
    '../../../dce-svg/icon_stack.svg',
    '../../../dce-svg/icon_down-arrow.svg',
    '../../../dce-svg/icon_question-mark.svg'
    ],
    function(
        _,
        module,
        BaseView,
        css,
        iconStackSvg,
        iconDownArrowSvg,
        iconQuestionSvg
    ){
        return BaseView.extend({
            moduleId: module.id,
            tagName: 'img',
            css: css,
            initialize: function(options){
                var defaults = {
                  icon: 'space',
                  size: 1.0
                };
                _.defaults(this.options, defaults);

                BaseView.prototype.initialize.apply(this, arguments);
            },
            set: function(options) {
                _.extend(this.options, options);
                this.render();
                return this;
            },
            render: function() {
                this.$el.attr('class', css.view);
                if (this.options.svg === 'down-arrow') {
                    this.$el.attr('src', iconDownArrowSvg);
                } else if (this.options.svg === 'question') {
                    this.$el.attr('src', iconQuestionSvg);
                } else {
                    this.$el.attr('src', iconStackSvg);
                }
                this.$el.css({
                        height: this.options.size + 'em',
                        width: this.options.size + 'em',
                        verticalAlign: (this.options.size == 1 ? '' : 'middle')
                    });
                return this;
            }
        });
    }
);
