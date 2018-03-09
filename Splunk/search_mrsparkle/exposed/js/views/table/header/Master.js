define(
    [
        'underscore',
        'module',
        'models/datasets/Table',
        'models/datasets/commands/InitialData',
        'mixins/dataset',
        'views/Base',
        'views/table/header/TableName',
        'views/table/header/Save',
        'views/shared/controls/SyntheticRadioControl',
        './Master.pcss'
    ],
    function(
        _,
        module,
        TableModel,
        InitialDataModel,
        datasetMixin,
        BaseView,
        TableNameView,
        SaveView,
        SyntheticRadioControl,
        css
    ) {
        return BaseView.extend({
            moduleId: module.id,

            initialize: function() {
                BaseView.prototype.initialize.apply(this, arguments);

                this.children.tableName = new TableNameView({
                    model: {
                        table: this.model.table
                    }
                });

                this.children.previewModeButtons = new SyntheticRadioControl({
                    model: this.model.table.entry.content,
                    modelAttribute: 'dataset.display.mode',
                    items: [
                        { label: _('Preview Rows').t(), value: datasetMixin.MODES.TABLE },
                        { label: _('Summarize Fields').t(), value: datasetMixin.MODES.DATA_SUMMARY }
                    ],
                    additionalClassNames: 'btn-group-tabs btn-group-summary'
                });

                this.children.saveDataset = new SaveView({
                    model: {
                        application: this.model.application,
                        searchPointJob: this.model.searchPointJob,
                        currentPointJob: this.model.currentPointJob,
                        table: this.model.table,
                        tablePristine: this.model.tablePristine,
                        user: this.model.user,
                        serverInfo: this.model.serverInfo
                    },
                    collection: {
                        roles: this.collection.roles
                    }
                });
            },

            activate: function(options) {
                var clonedOptions = _.extend({}, (options || {}));
                delete clonedOptions.deep;

                if (this.active) {
                    return BaseView.prototype.activate.call(this, clonedOptions);
                }

                this.children.tableName.activate({ deep: true });
                this.manageStateOfChildren();
                return BaseView.prototype.activate.call(this, clonedOptions);
            },

            startListening: function(options) {
                this.listenTo(this.model.state, 'change:initialDataState', this.manageStateOfChildren);
            },

            manageStateOfChildren: function() {
                if (this.model.state.get('initialDataState') === InitialDataModel.STATES.EDITING) {
                    this.children.previewModeButtons.deactivate({ deep: true }).$el.hide();
                    this.children.saveDataset.deactivate({ deep: true }).$el.hide();
                } else {
                    this.children.previewModeButtons.activate({ deep: true }).$el.css('display', '');
                    this.children.saveDataset.activate({ deep: true }).$el.css('display', '');
                }
            },

            render: function() {
                this.$el.html(this.compiledTemplate());

                this.children.previewModeButtons.render().prependTo(this.$el);
                this.children.tableName.activate({ deep: true }).render().prependTo(this.$el);
                this.children.saveDataset.render().appendTo(this.$('.btn-container'));

                return this;
            },

            template: '\
                <div class="btn-container"></div>\
            '
        });
    }
);
