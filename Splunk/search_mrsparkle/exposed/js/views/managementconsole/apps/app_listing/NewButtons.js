define([
        'underscore',
        'backbone',
        'helpers/managementconsole/url',
        'models/managementconsole/App',
        'views/managementconsole/shared/NewButtons',
        'react',
        'react-dom',
        './NewButtons.pcss'
    ],
    function (
        _,
        Backbone,
        urlHelper,
        AppModel,
        NewButtons,
        React,
        ReactDOM,
        css
    ) {
        return NewButtons.extend({

            initialize: function() {
                NewButtons.prototype.initialize.apply(this, arguments);
                // store the disable state . In case of re-render the button is rendered in the correct state.
                this.installDisabled = false;
                // On load set the install app button state
                this.handleInstallState();
                this.listenTo(this.model.deployTask.entry.content, 'change:state', this.handleInstallState);
            },

            /**
             * Changes the state of install button if the state of deployTask is running or new.
             */
            handleInstallState: function() {
                var name = this.model.deployTask.entry.get('name');
                if (name) {
                    var taskState = this.model.deployTask.entry.content.get('state');
                    if ( (taskState === 'running' || taskState === 'new')) {
                        this.installDisabled = true;
                        this.$el.find('a.new-entity-button').addClass('disabled');
                        return;
                    }
                }
                this.installDisabled = false;
                this.$el.find('a.new-entity-button').removeClass('disabled');
            },

            render: function () {
                var canEdit = this.model.user.hasCapability('dmc_deploy_apps'),
                    html = this.compiledTemplate({
                    btnName: canEdit ? _("Install").t() : _("Browse").t(),
                    btnClass: canEdit ? 'btn-primary' : '',
                    entitiesPlural: this.options.entitiesPlural,
                    editLinkHref: this.options.editLinkHref || '#',
                    installCss: this.installDisabled ? 'disabled' : ''
                });

                this.$el.html(html);

                return this;
            },

            template: '\
                <a href="<%- editLinkHref %>" class="btn <%- btnClass %> new-entity-button <%- installCss %>"><%- btnName + " " + entitiesPlural %></a>\
            '
        });
    }
);
