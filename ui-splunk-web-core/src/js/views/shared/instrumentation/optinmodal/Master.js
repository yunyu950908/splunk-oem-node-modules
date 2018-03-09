define([
    'jquery',
    'underscore',
    'module',
    'uri/route',
    'views/shared/Modal',
    'views/shared/controls/SyntheticCheckboxControl',
    'models/instrumentation/OptInModel',
    'models/instrumentation/EligibilityModel',
    'splunk.util',
    './Master.pcss'
],
function (
    $,
    _,
    module,
    route,
    Modal,
    SyntheticCheckboxControl,
    OptInModel,
    EligibilityModel,
    splunkUtil,
    css
) {
    return Modal.extend({
        moduleId: module.id,
        initialize: function() {
            Modal.prototype.initialize.apply(this, arguments);
            this.forceHide = false;
            this.deferreds = {};
            this.deferreds.optIn = $.Deferred();
            this.deferreds.eligibility = $.Deferred();

            this._loadModels();
            $.when(this.deferreds.optIn, this.deferreds.eligibility).then(function() {
                this._buildLayout();
            }.bind(this));
        },
        events: $.extend({}, Modal.prototype.events, {
            'click .modal-btn-primary': function(e) {
                e.preventDefault();
                this.submitSelection(true);
            },
            'click .modal-btn-cancel': function(e) {
                e.preventDefault();
                this.submitSelection(false);
            },
            'click .close': function(e) {
                e.preventDefault();
                this.submitSelection(false);
            }
        }),
        constants: {
            anonymous: {
                send: 'sendAnonymizedUsage',
                checked: 'precheckSendAnonymizedUsage'
            },
            license: {
                send: 'sendLicenseUsage',
                checked: 'precheckSendLicenseUsage'
            },
            webAnalytics: {
                send: 'sendAnonymizedWebAnalytics'
            },
            showModal: 'showOptInModal',
            optInVersion: 'optInVersion'
        },
        hide: function(forceHide) {
            this.forceHide = forceHide;
            Modal.prototype.hide.call(this);
        },
        _getDefaultValue: function(attr) {
            var value = 0;
            if (this.model.optIn && this.model.optIn.attributes && this.model.optIn.attributes.entry && this.model.optIn.attributes.entry[0] && this.model.optIn.attributes.entry[0].content){
                value = this.model.optIn.attributes.entry[0].content[attr];
            }
            return value;
        },
        _loadModels: function() {
            this.model.optIn = new OptInModel();

            this.model.eligibility = new EligibilityModel({
                application: this.model.application
            });

            this.model.optIn.fetch({
                data: { output_mode: 'json' },
                success: function() {
                    this.deferreds.optIn.resolve();
                }.bind(this),
                error: function() {
                    this.deferreds.optIn.reject();
                }.bind(this)
            });
            this.model.eligibility.fetch({
                success: function() {
                    this.deferreds.eligibility.resolve();
                }.bind(this),
                error: function() {
                    this.deferreds.eligibility.reject();
                }.bind(this)
            });
        },
        _buildLayout: function() {
            var hasAcknowledgedAnyVersion = this.model.optIn.hasAcknowledgedAnyVersion();

            var precheckAnonymous = hasAcknowledgedAnyVersion ?
                this._getDefaultValue(this.constants.anonymous.send) :
                this._getDefaultValue(this.constants.anonymous.checked);

            var precheckLicense = hasAcknowledgedAnyVersion ?
                this._getDefaultValue(this.constants.license.send) :
                this._getDefaultValue(this.constants.license.checked);

            this.children.anonymousCheckBox = new SyntheticCheckboxControl({
                label: _("Help make Splunk software better!").t(),
                modelAttribute: this.constants.anonymous.send,
                defaultValue: precheckAnonymous,
                enabled: true
            });

            this.children.licenseCheckBox = new SyntheticCheckboxControl({
                label: _("Share license usage data with Splunk").t(),
                modelAttribute: this.constants.license.send,
                defaultValue: precheckLicense,
                enabled: true
            });

            if (hasAcknowledgedAnyVersion) {
                this.$(Modal.HEADER_TITLE_SELECTOR).html(_("Update to data collection").t());
                this.$('.update-details').html(
                    _("The data Splunk software collects has been updated in this version.").t() +
                    ' ' +
                    _("Here are your previous selections.").t()
                );
            }
        },
        checkIfModalIsShown: function(){
            if (this.forceHide) {
                return false;
            }
            var showOptInModal = false;

            // Check eligibility first (verifies server roles & user capability)
            if (!(this.model.eligibility && this.model.eligibility.isEligible())) {
                return false;
            }

            // Check if this host has already confirmed this version
            if (!this.model.optIn.isAcknowledgementRequired()) {
                return false;
            }

            // Check if this user has already dismissed the modal
            if (!this.model.userPref.showInstrumentationOptInModal(
                  this.model.optIn.currentVersion())) {
                return false;
            }

            return true;
        },
        dontShowModalForUser: function() {
            var currentVersion = this.model.optIn.currentVersion();
            if (this.model.userPref.showInstrumentationOptInModal(currentVersion)) {
                this.model.userPref.entry.content.set("hideInstrumentationOptInModal", 1);
                this.model.userPref.entry.content.set("dismissedInstrumentationOptInVersion",
                                                      currentVersion);
                this.model.userPref.save();
            }
        },
        submitSelection: function(confirm) {
            var optInModel = this.model.optIn;
            var currentVersion = optInModel.currentVersion();
            var acknowledgedVersion = optInModel.acknowledgedVersion();

            if (confirm && optInModel) {
                var anonymousChoice = this.children.anonymousCheckBox.getValue(),
                    licenseChoice = this.children.licenseCheckBox.getValue();

                this.model.optIn.save({},{
                    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                    data: this.constants.anonymous.send + "=" + anonymousChoice +
                        // The anonymous data toggle in the opt-in modal controls the
                        // UI analytics setting as well as the normal anonymous data.
                        "&" + this.constants.webAnalytics.send + "=" + anonymousChoice +
                        "&" + this.constants.license.send + "=" + licenseChoice +
                        // Note: showOptInModal is deprecated in favor of optInVersionAcknowledged.
                        //       However, we continue to set the legacy flag in case of a
                        //       heterogenous deployment with respect to splunk versions.
                        "&showOptInModal=0" +
                        "&optInVersionAcknowledged=" + currentVersion
                });
            }
            // Never show modal if user closes it or presses ok.
            this.dontShowModalForUser();
            this.hide();
        },
        createDocLink: function(page) {
            return route.docHelp(this.model.application.get("root"), this.model.application.get("locale"), page);
        },
        onModalHide: function() {
            // If modal is not allowed to shown, run function if it were to be hidden.
            if (this.options.onHide) {
                this.options.onHide();
            }
        },
        render: function() {
            this.$el.html(Modal.TEMPLATE);

            this.$(Modal.HEADER_TITLE_SELECTOR).html(_("Help us improve Splunk software").t());
            this.$(Modal.BODY_SELECTOR).show();
            this.$(Modal.BODY_SELECTOR).append(Modal.FORM_HORIZONTAL);
            this.$(Modal.BODY_FORM_SELECTOR).html(_(this.dialogFormBodyTemplate).template({
                model: this.model,
                anonymousLink: this.createDocLink('learnmore.instrumentation.performance'),
                licenseLink: this.createDocLink('learnmore.instrumentation.usage')
            }));
            var buttonOkay = Modal.BUTTON_SAVE,
                buttonSkip = Modal.BUTTON_CANCEL;

            this.$(Modal.FOOTER_SELECTOR).append(buttonSkip);
            this.$(Modal.FOOTER_SELECTOR).append(buttonOkay);

            this.$('.btn.modal-btn-primary').text(_('OK').t());
            this.$('.btn.modal-btn-cancel').text(_('Skip').t()).removeAttr('data-dismiss');

            $.when(this.deferreds.optIn, this.deferreds.eligibility).done(function() {
                this.children.anonymousCheckBox.render().prependTo(this.$(".anonymous-checkbox-placeholder"));
                this.children.licenseCheckBox.render().prependTo(this.$(".license-checkbox-placeholder"));

                // Wait till eligibility modal is loaded and check if modal is shown.
                if (this.checkIfModalIsShown()){
                    this.show();
                    if (this.options.onHide) {
                        // Run passed in function when modal is hidden.
                        this.on('hide', this.options.onHide, this);
                    }
                }
                else {
                    this.onModalHide();
                }
            }.bind(this)).fail(function() {
                this.onModalHide();
            }.bind(this));

            return this;
        },
        dialogFormBodyTemplate: '\
            <div class="instrumentation-opt-in-modal-body">\
                <div class="update-details"></div>\
                <div class="anonymous-checkbox-wrapper">\
                    <div class="anonymous-checkbox-placeholder"><a class="learn-more-link external" target="_blank" href="<%= anonymousLink %>"><%= _("Learn More").t() %></a></div>\
                    <div class="checkbox-description"><%= _("I authorize collection of anonymized information about software usage so Splunk can improve its products and services. I understand that searches are run to collect this information, and I can opt out at any time.").t() %></div>\
                </div>\
                <div class="license-checkbox-wrapper">\
                    <div class="license-checkbox-placeholder"><a class="learn-more-link external" target="_blank" href="<%= licenseLink %>"><%= _("Learn More").t() %></a></div>\
                    <div class="checkbox-description"><%= _("I authorize collection of license usage data for compliance reporting as defined by select license agreements. I understand I must export this data myself if operating in a closed environment.").t() %></div>\
                </div>\
            </div>\
        '
    });
});
