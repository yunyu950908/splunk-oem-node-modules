import WaitSpinner from 'views/shared/waitspinner/Master';
import splunkUtils from 'splunk.util';
import $ from 'jquery';
import _ from 'underscore';
import EnableDisableBase from './EnableDisableBase';

const ERROR_MSGS = {
    GENERIC: _('Splunk Cloud cannot enable this app at this time. Exit and try again later.').t(),
    MISSING_CAPABILITIES: _('You do not have permission to enable this app.').t(),
    DEPLOY_FAIL_TEMPLATE: _('<b>%s</b> %s could not be enabled because the deploy task failed. \n' +
        'You can retry the deployment task. If this deployment task continues to fail, contact \n' +
        'Splunk Support.').t(),
};

export default EnableDisableBase.extend({
    moduleId: module.id,

    DEPLOY_FAIL_TEMPLATE: ERROR_MSGS.DEPLOY_FAIL_TEMPLATE,
    GENERIC_ERROR_MSG: ERROR_MSGS.GENERIC,
    MISSING_CAPABILITIES_MSG: ERROR_MSGS.MISSING_CAPABILITIES,

    getInitialTitle() {
        return _('Enable - Confirm').t();
    },

    getInitialChildren() {
        const bodyHtml = splunkUtils.sprintf(_('Are you sure you want to enable \n' +
            '<b>%s</b>%s? Enabling this app might cause \n' +
            'Splunk Cloud to restart and be unavailable for some time.').t(),
            _.escape(this.appName),
            _.escape(this.appVersionLabel),
        );
        return [$(`<div> ${bodyHtml} </div>`)];
    },

    getInProgressTitle() {
        return _('Enable - In Progress').t();
    },

    getInProgressChildren() {
        this.waitspinner = new WaitSpinner({
            color: 'green',
            size: 'medium',
            frameWidth: 19,
        });

        const bodyHtml = splunkUtils.sprintf(_('Splunk Cloud is enabling \n' +
            '<b>%s</b>%s. This process might take several minutes and \n' +
            'cause Splunk Cloud to restart. Do not navigate away from this page \n' +
            'until the app enable process completes.').t(),
            _.escape(this.appName),
            _.escape(this.appVersionLabel),
        );
        const bodyElem = $(`<div> ${bodyHtml} </div>`);
        return [bodyElem, this.waitspinner.render().el];
    },

    getSuccessTitle() {
        return _('Enable - Complete').t();
    },

    getSuccessChildren() {
        let bodyHtml = splunkUtils.sprintf(_('Splunk Cloud enabled <b>%s</b>%s. ').t(),
            _.escape(this.appName),
            _.escape(this.appVersionLabel),
        );

        // only mention deployment status if app is not external
        if (!this.isExternalApp) {
            bodyHtml += _('Verify the status of the deployment by clicking Last Deployment Status.').t();
        }

        return [$(`<div> ${bodyHtml} </div>`)];
    },

    getFailTitle() {
        return _('Enable - Fail').t();
    },
});
