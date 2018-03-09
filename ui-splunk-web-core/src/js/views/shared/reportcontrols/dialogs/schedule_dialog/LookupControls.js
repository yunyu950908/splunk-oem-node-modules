define(
    [
        'underscore',
        'jquery',
        'module',
        'views/Base',
        'views/shared/controls/ControlGroup',
        'splunk.util'
    ],
    function(
        _,
        $,
        module,
        BaseView,
        ControlGroup,
        splunkUtils
    ) {
        return BaseView.extend({
            moduleId: module.id,

            initialize: function() {
                BaseView.prototype.initialize.apply(this, arguments);

                this.children.lookupCheckbox = new ControlGroup({
                    label: _('Write to a CSV Lookup File').t(),
                    controlType: 'SyntheticCheckbox',
                    controlOptions: {
                        model: this.model.inmem.entry.content,
                        modelAttribute: 'action.lookup'
                    }
                });

                this.children.lookupName = new ControlGroup({
                    label: _('Filename').t(),
                    controlType: 'Text',
                    controlOptions: {
                        model: this.model.inmem.entry.content,
                        modelAttribute: 'action.lookup.filename'
                    },
                    help: _('Provide a new or existing .csv lookup filename. A new filename will result in the creation of a new .csv lookup file that you can apply to lookup definitions.').t()
                });

                this.children.appendCheckbox = new ControlGroup({
                    label: _('Append New Results').t(),
                    controlType: 'SyntheticCheckbox',
                    additionalClassNames: 'append-control',
                    controlOptions: {
                        model: this.model.inmem.entry.content,
                        modelAttribute: 'action.lookup.append'
                    },
                    help: _('Select to preserve the results from previous scheduled report runs. Each time the report runs, the new results are added to the existing result set.').t()
                });

                this.model.inmem.entry.content.on('change:action.lookup', this.toggleExtraControls, this);
            },

            toggleExtraControls: function() {
                if (splunkUtils.normalizeBoolean(this.model.inmem.entry.content.get('action.lookup'))) {
                    this.children.lookupName.$el.show();
                    this.children.appendCheckbox.$el.show();
                } else {
                    this.children.lookupName.$el.hide();
                    this.children.appendCheckbox.$el.hide();
                }
            },

            render: function() {
                this.children.lookupCheckbox.render().appendTo(this.$el);
                this.children.lookupName.render().appendTo(this.$el);
                this.children.appendCheckbox.render().appendTo(this.$el);

                this.toggleExtraControls();

                return this;
            }
        });
    }
);
