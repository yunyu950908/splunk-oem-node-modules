define(
    [
        'module',
        'jquery',
        'underscore',
        '../Base',
        'views/shared/PopTart',
        'util/pdf_utils'
    ],
    function(module,
             $,
             _,
             BaseDashboardView,
             PopTartView,
             PDFUtils) {

        var defaults = {
            button: true,
            showOpenActions: true,
            deleteRedirect: false
        };

        var OtherMenu = PopTartView.extend({
            className: 'dropdown-menu other-menu',
            initialize: function() {
                PopTartView.prototype.initialize.apply(this, arguments);
                _.defaults(this.options, defaults);
                this._menuModel = {
                    allowEditPermission: this.model.view.entry.acl.get('can_change_perms') && this.model.view.entry.acl.canWrite(),
                    allowConvertToHTML: this.model.view.isSimpleXML() && !this.model.serverInfo.isLite() && this.model.view.entry.acl.canWrite() && this.model.user.canEditViewHtml(),
                    allowClone: !this.model.view.isHTML() || this.model.user.canEditViewHtml(),
                    allowMakeHome: !this.model.serverInfo.isLite() && this.model.view.isSimpleXML() && !(this.model.userPref.entry.content.get('display.page.home.dashboardId') === this.model.view.get('id')),
                    allowDelete: this.model.view.entry.acl.canWrite() && this.model.view.entry.acl.get('removable')
                };
            },
            events: {
                'click a.edit-perms': function(e) {
                    e.preventDefault();
                    this._triggerControllerEvent('action:edit-permission');
                },
                'click a.convert-to-html': function(e) {
                    e.preventDefault();
                    this._triggerControllerEvent('action:convert-html');
                },
                'click a.clone': function(e) {
                    e.preventDefault();
                    this._triggerControllerEvent('action:clone');
                },
                'click a.make-home': function(e) {
                    e.preventDefault();
                    this._triggerControllerEvent('action:make-home');
                },
                'click a.delete': function(e) {
                    e.preventDefault();
                    this._triggerControllerEvent('action:delete');
                }
            },
            _triggerControllerEvent: function() {
                this.model.controller.trigger.apply(this.model.controller, arguments);
                this.hide();
            },
            render: function() {
                this.$el.html(PopTartView.prototype.template_menu);
                this.$el.append(this.compiledTemplate(this._menuModel));
                return this;
            },
            isEmpty: function() {
                return !_.some(_.values(this._menuModel));
            },
            template: '\
                    <ul class="first-group">\
                        <% if(allowEditPermission) { %>\
                        <li><a href="#" class="edit-perms"><%- _("Edit Permissions").t() %></a></li>\
                        <% } %>\
                        <% if (allowConvertToHTML) { %>\
                        <li><a href="#" class="convert-to-html"><%- _("Convert to HTML").t() %></a></li>\
                        <% } %>\
                    </ul>\
                    <ul class="second-group">\
                        <% if (allowClone) { %>\
                        <li><a href="#" class="clone"><%- _("Clone").t() %></a></li>\
                        <% } %>\
                        <% if (allowMakeHome) { %>\
                        <li><a href="#" class="make-home"><%- _("Set as Home Dashboard").t() %></a></li>\
                        <% } %>\
                        <% if(allowDelete) { %>\
                        <li><a href="#" class="delete"><%- _("Delete").t() %></a></li>\
                        <% } %>\
                    </ul>\
            '
        });

        var ExportMenu = PopTartView.extend({
            className: 'dropdown-menu export-menu',
            initialize: function() {
                PopTartView.prototype.initialize.apply(this, arguments);
                _.defaults(this.options, defaults);
            },
            events: {
                'click a.edit-export-pdf': function(e) {
                    e.preventDefault();
                    this._triggerControllerEvent('action:export-pdf');
                },
                'click a.edit-schedule-pdf': function(e) {
                    e.preventDefault();
                    if ($(e.currentTarget).is('.disabled')) {
                        return;
                    }
                    this._triggerControllerEvent('action:schedule-pdf');
                },
                'click a.edit-print': function(e) {
                    e.preventDefault();
                    this._triggerControllerEvent('action:print');
                }
            },
            _triggerControllerEvent: function() {
                this.model.controller.trigger.apply(this.model.controller, arguments);
                this.hide();
            },
            render: function() {
                this.$el.html(PopTartView.prototype.template_menu);
                this.$el.append(this._getTemplate());
                return this;
            },
            _getTemplate: function() {
                var menuModel = {
                    canWrite: this.model.view.entry.acl.canWrite(),
                    isSimpleXML: this.model.view.isSimpleXML(),
                    userCanSchedule: this.model.user.canSchedulePDF(),
                    viewSchedulable: this.model.view.canSchedulePDF(),
                    viewPdfSchedulable: PDFUtils.isPDFGenAvailable() && this.model.view.canSchedulePDF(),
                    canExport: this.model.view.isSimpleXML() && PDFUtils.isPDFGenAvailable(),
                    isForm: this.model.view.isForm()
                };
                return this.compiledTemplate(menuModel);
            },
            isEmpty: function() {
                return false; // There're will be at least one print item
            },
            template: '\
                <ul class="first-group">\
                    <% if (canExport) { %>\
                        <li><a href="#" class="edit-export-pdf"><%- _("Export PDF").t() %></a></li>\
                    <% } else { %>\
                        <li><a href="#" class="edit-export-pdf disabled"><%- _("Export PDF").t() %></a></li>\
                    <% } %>\
                    <% if (userCanSchedule) { %>\
                        <% if (viewPdfSchedulable) { %>\
                            <li><a href="#" class="edit-schedule-pdf"><%- _("Schedule PDF Delivery").t() %></a></li>\
                        <% } else { %>\
                            <li><a href="#" class="edit-schedule-pdf disabled"><%- _("Schedule PDF Delivery").t() %></a></li>\
                        <% } %>\
                    <% } %>\
                    <li><a href="#" class="edit-print"><%- _("Print").t() %></a></li>\
                </ul>\
            '
        });

        return BaseDashboardView.extend({
            moduleId: module.id,
            viewOptions: {
                register: false
            },
            className: 'dashboard-menu pull-right',
            initialize: function() {
                BaseDashboardView.prototype.initialize.apply(this, arguments);
            },
            events: {
                'click a.edit-btn': function(e) {
                    e.preventDefault();
                    this.model.controller.trigger('mode:edit');
                },
                'click a.edit-export': function(e) {
                    e.preventDefault();
                    this.children.exportMenu = new ExportMenu({
                        model: this.model
                    });
                    this.children.exportMenu.once('hide', this.children.exportMenu.remove);
                    $('body').append(this.children.exportMenu.render().$el);
                    var $btn = $(e.currentTarget);
                    $btn.addClass('active');
                    this.children.exportMenu.show($btn);
                    this.children.exportMenu.once('hide', function(){
                        $btn.removeClass('active');
                    });
                },
                'click a.edit-other': function(e) {
                    e.preventDefault();
                    this.children.otherMenu = new OtherMenu({
                        model: this.model
                    });
                    this.children.otherMenu.once('hide', this.children.otherMenu.remove);
                    $('body').append(this.children.otherMenu.render().$el);
                    var $btn = $(e.currentTarget);
                    $btn.addClass('active');
                    this.children.otherMenu.show($btn);
                    this.children.otherMenu.once('hide', function(){
                        $btn.removeClass('active');
                    });

                }
            },
            render: function() {
                var menuModel = {
                    canWrite: this.model.view.entry.acl.canWrite()
                };
                this.$el.html(this.compiledTemplate(menuModel));
                return this;
            },
            template: '\
            <span class="dashboard-view-controls">\
               <% if(canWrite) { %>\
                    <a class="btn edit-btn" href="#"><%- _("Edit").t() %></a>\
               <% } %>\
                <a class="btn edit-export" href="#"><%- _("Export").t() %> <span class="caret"></span></a>\
                <a class="btn edit-other" href="#">...</a>\
            </span>\
        '
        });
    }
);
