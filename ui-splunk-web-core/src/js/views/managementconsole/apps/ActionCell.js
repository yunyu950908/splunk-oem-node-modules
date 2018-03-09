define([
        'jquery',
        'underscore',
        'module',
        'views/shared/basemanager/ActionCell'
    ],
    function (
        $,
        _,
        module,
        ActionCell
    ) {
        return ActionCell.extend({
            events: {
                'click a.uninstall-app': function(e) {
                    e.preventDefault();
                    this.model.controller.trigger("deleteEntity", this.model.entity);
                }
            },

            // This overrides the method in the base class
            render: function() {
                var html = this.compiledTemplate({
                    canDelete: this.model.entity.canDelete(),
                    downloadLink: this.model.entity.getExportUrl(),
                    releaseNoteLink: this.model.entity.getReleaseNotesURI()
                });

                this.$el.html(html);

                return this;
            },

            template: '\
                <% if (canDelete) { %>\
                    <a href="#" class="uninstall-app"><%- _("Uninstall").t() %></a>\
                <% } %>\
                <a href="<%- downloadLink %>" class="entity-action export-action"><%- _("Download").t() %></a>\
                <% if (releaseNoteLink) { %>\
                    <a href="<%- releaseNoteLink %>" target=_blank class="release-notes-link"><%- _("Release Notes").t() %> <i class="icon-external"></i></a>\
                <% } %>\
            '
        });
    }
);

