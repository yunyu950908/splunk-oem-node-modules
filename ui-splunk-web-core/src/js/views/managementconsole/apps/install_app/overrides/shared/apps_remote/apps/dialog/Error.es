
import _ from 'underscore';
import $ from 'jquery';
import Modal from 'views/shared/Modal';
import ErrorView from 'views/shared/apps_remote/dialog/Error';
import splunkUtils from 'splunk.util';

const ERROR_STATUS = {
    MISSING_DEPENDENCIES: 4,
    ACCESS_DENIED: 403,
    DEPLOY_FAIL: 'DEPLOY_FAIL',
};
const STRINGS = {
    MULTIPLE_SERVER_ERRORS: _('The following server errors were reported: ').t(),
    MISSING_DEPENDENCIES_STR_1_TEMPLATE: _('<b>%s</b> (version %s) could not be \n' +
    'installed because it requires the following app dependencies to be \n' +
    'installed:').t(),
    MISSING_DEPENDENCIES_STR_2_TEMPLATE: _('Do you want to continue and install \n' +
    '<b>%s</b> (version %s) with these dependencies?').t(),
    INSTALLED_DEPENDENCIES_STR1: _('The following dependent app(s) are already installed on your machine:').t(),
    INSTALLED_DEPENDENCIES_STR2: _('These dependent app(s) were installed externally and are not compatible with ' +
    'self-service app installation. To resolve this issue, contact Splunk Support.').t(),
};

/* eslint-disable prefer-template */
const BUTTON_INSTALL_DEPENDENCIES = '<a href="#" class="btn btn-primary ' +
'modal-btn-primary pull-right install-dependencies">' +
_('Continue').t() + '</a>';

const MODAL_RETRY_BTN = '<a href="#" class="btn btn-primary modal-btn-primary retry-deploy" \n' +
    '>' + _('Retry').t() + '</a>';
/* eslint-enable prefer-template */

export default ErrorView.extend({
    moduleId: module.id,

    events: {
        'click .install-dependencies': function onClick(e) {
            e.preventDefault();

            this.model.wizard.set('appDependencies', this.dependencies);
            this.model.wizard.set('step', 'install_dependencies');
        },
        'click .retry-deploy': function retryDeploy(e) {
            e.preventDefault();

            this.model.wizard.set('step', 'retry_deploy');
        },
    },

    render() {
        this.$el.html(Modal.TEMPLATE);

        const errorHTML = this.getErrorHTML();
        this.$(Modal.HEADER_TITLE_SELECTOR).text(errorHTML.title);
        this.$(Modal.BODY_SELECTOR).append(errorHTML.body);
        _.each(errorHTML.buttons, function appendButton(button) {
            this.$(Modal.FOOTER_SELECTOR).append(button);
        }, this);
        return this;
    },

    hasAppInstalled(appId) {
        return !_.isUndefined(this.collection.appLocalsUnfiltered.findByEntryName(appId));
    },

    getInstalledDependencies(dependencies) {
        const installedDependencies = [];
        _.each(dependencies, (dependency) => {
            if (this.hasAppInstalled(dependency.app_id)) {
                installedDependencies.push(dependency);
            }
        });
        return installedDependencies;
    },

    getErrorHTML() {
        const errorResponse = this.model.wizard.get('errorResponse');

        if (!errorResponse) {
            return '';
        }

        switch (errorResponse.status) {
            case ERROR_STATUS.MISSING_DEPENDENCIES: {
                this.dependencies = errorResponse.missing_dependencies;

                const appName = this.model.appRemote.get('title');
                const appVersion = this.model.appRemote.get('release').title;
                const installedDependencies = this.getInstalledDependencies(this.dependencies);
                if (!_.isEmpty(installedDependencies)) {
                    return {
                        title: _('App installation failed - Install method conflict').t(),
                        body: _.template(this.installedDependenciesTemplate)({
                            appName,
                            installedDependencies,
                            INSTALLED_DEPENDENCIES_STR1: STRINGS.INSTALLED_DEPENDENCIES_STR1,
                            INSTALLED_DEPENDENCIES_STR2: STRINGS.INSTALLED_DEPENDENCIES_STR2,
                        }),
                        buttons: [Modal.BUTTON_CLOSE],
                    };
                }

                return {
                    title: _('App installation failed - Missing dependencies').t(),
                    body: _.template(this.missingDependenciesTemplate)({
                        dependencies: this.dependencies,
                        MISSING_DEPENDENCIES_STR_1: splunkUtils.sprintf(
                            STRINGS.MISSING_DEPENDENCIES_STR_1_TEMPLATE,
                            _.escape(appName),
                            _.escape(appVersion),
                        ),
                        MISSING_DEPENDENCIES_STR_2: splunkUtils.sprintf(
                            STRINGS.MISSING_DEPENDENCIES_STR_2_TEMPLATE,
                            _.escape(appName),
                            _.escape(appVersion),
                        ),
                    }),
                    buttons: [Modal.BUTTON_CANCEL, BUTTON_INSTALL_DEPENDENCIES],
                };
            }
            case ERROR_STATUS.ACCESS_DENIED: {
                return {
                    title: _('App installation failed - Insufficient permissions').t(),
                    body: `<p>${_('You do not have sufficient permissions to do this.').t()}</p>`,
                };
            }
            case ERROR_STATUS.DEPLOY_FAIL: {
                const closeButton = $(Modal.BUTTON_CLOSE);
                closeButton.removeClass('pull-right');
                closeButton.addClass('pull-left');

                const msg = _('Application cannot be installed because \n' +
                        'the previous deployment task failed. \n' +
                        'You can retry the deployment task. If this deployment \n' +
                        'task continues to fail, contact Splunk Support.').t();

                return {
                    title: _('App installation failed - Deploy failed').t(),
                    body: `<p>${msg}</p>`,
                    buttons: [closeButton, MODAL_RETRY_BTN],
                };
            }
            default: {
                const errorMsg = errorResponse.responseJSON.error.message;
                let body = `<p>${errorMsg}</p>`;

                if (_.isArray(errorMsg)) {
                    body = _.template(this.multipleErrorMessagesTemplate)({
                        errorMsgs: errorMsg,
                        MULTIPLE_SERVER_ERRORS: STRINGS.MULTIPLE_SERVER_ERRORS,
                    });
                }
                return {
                    title: _('App installation failed').t(),
                    body,
                    buttons: [Modal.BUTTON_CLOSE],
                };
            }
        }
    },

    multipleErrorMessagesTemplate: `
        <p><%= MULTIPLE_SERVER_ERRORS %></p>
        <ul>
            <% _.each(errorMsgs, function(msg) { %>
                <li><%- msg %></li>
            <% }) %>
        </ul>
    `,

    missingDependenciesTemplate: `
        <p><%= MISSING_DEPENDENCIES_STR_1 %></p>
        <ul>
        <% _.each(dependencies, function(dependency) { %>
            <li><%- dependency.app_title %></li>
        <% }) %>
        </ul>
        <p><%= MISSING_DEPENDENCIES_STR_2 %></p>
    `,

    installedDependenciesTemplate: `
    <p><%- INSTALLED_DEPENDENCIES_STR1 %></p>
    <ul>
    <% _.each(installedDependencies, function(dependency) { %>
        <li><%- dependency.app_title %></li>
    <% }) %>
    </ul>
    <p><%- INSTALLED_DEPENDENCIES_STR2 %></p>
    `,
});
