import WaitSpinner from 'views/shared/waitspinner/Master';
import splunkUtils from 'splunk.util';
import $ from 'jquery';
import _ from 'underscore';
import EnableDisableBase from './EnableDisableBase';

const ERROR_MSGS = {
    GENERIC: _('Splunk Cloud cannot disable this app at this time. Exit and try again later.').t(),
    MISSING_CAPABILITIES: _('You do not have permission to disable this app.').t(),
    DEPLOY_FAIL_TEMPLATE: _('<b>%s</b> %s could not be disabled because the deployment task failed. \n' +
        'You can retry the deployment task. If this deployment task continues to fail, contact \n' +
        'Splunk Support.').t(),
};

export default EnableDisableBase.extend({
    moduleId: module.id,

    DEPLOY_FAIL_TEMPLATE: ERROR_MSGS.DEPLOY_FAIL_TEMPLATE,
    GENERIC_ERROR_MSG: ERROR_MSGS.GENERIC,
    MISSING_CAPABILITIES_MSG: ERROR_MSGS.MISSING_CAPABILITIES,

    getInitialTitle() {
        return _('Disable - Confirm').t();
    },

    getInitialChildren() {
        const bodyHtml = splunkUtils.sprintf(_('Are you sure you want to \n' +
            'disable the app <b>%s</b>%s? Doing so might \n' +
            'affect the processing of any data forwarded through this app, \n' +
            'cause dependent apps to have incomplete functionality, and \n' +
            'trigger an automatic restart causing Splunk Cloud to be \n' +
            'unavailable for some time.').t(),
            _.escape(this.appName),
            _.escape(this.appVersionLabel),
        );

        return [$(`<div> ${bodyHtml} </div>`)];
    },

    getInProgressTitle() {
        return _('Disable - In Progress').t();
    },

    getInProgressChildren() {
        this.waitspinner = new WaitSpinner({
            color: 'green',
            size: 'medium',
            frameWidth: 19,
        });

        const bodyHtml = splunkUtils.sprintf(_('Splunk Cloud is disabling \n' +
            '<b>%s</b>%s. This process might take several minutes \n' +
            'and cause Splunk Cloud to restart. Do not navigate away from this \n' +
            'page until the app disable process completes.').t(),
            _.escape(this.appName),
            _.escape(this.appVersionLabel),
        );

        const bodyElem = $(`<div> ${bodyHtml} </div>`);
        return [bodyElem, this.waitspinner.render().el];
    },

    getSuccessTitle() {
        return _('Disable - Complete').t();
    },

    getSuccessChildren() {
        let bodyHtml = splunkUtils.sprintf(_('Splunk Cloud disabled <b>%s</b>%s. ').t(),
            _.escape(this.appName),
            _.escape(this.appVersionLabel),
        );

        // only mention deployment status if app is not external
        if (!this.isExternalApp) {
            bodyHtml += _('Verify the status of the deployment by clicking Last Deployment Status.').t();
        } else {
            bodyHtml += _('To disable any indexes or knowledge objects associated with \n' +
                'this app, contact Splunk Support.').t();
        }

        return [$(`<div> ${bodyHtml} </div>`)];
    },

    getFailTitle() {
        return _('Disable - Fail').t();
    },
});
