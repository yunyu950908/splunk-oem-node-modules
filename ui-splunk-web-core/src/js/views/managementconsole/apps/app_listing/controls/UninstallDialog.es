import $ from 'jquery';
import _ from 'underscore';
import splunkUtils from 'splunk.util';
import WaitSpinner from 'views/shared/waitspinner/Master';
import BaseDialog from './BaseDialog';

const ERROR_MSGS = {
    GENERIC: _('Splunk Cloud cannot uninstall this app at this time. Exit and try again later.').t(),
    MISSING_CAPABILITIES: _('You do not have permission to uninstall this app.').t(),
    DEPLOY_FAIL_TEMPLATE: _('<b>%s</b> %s could not be uninstalled because the deployment task failed. \n' +
        'You can retry the deployment task. If this deployment task continues to fail, contact \n' +
        'Splunk Support.').t(),
};

export default BaseDialog.extend({
    moduleId: module.id,
    className: [BaseDialog.prototype.className, 'uninstall-dialog'].join(' '),

    DEPLOY_FAIL_TEMPLATE: ERROR_MSGS.DEPLOY_FAIL_TEMPLATE,

    initialize(...args) {
        BaseDialog.prototype.initialize.apply(this, args);

        this.appName = this.model.app.getAppLabel();
        this.appVersion = this.model.app.getVersion();
        this.appVersionLabel = `(${splunkUtils.sprintf(_('version %s').t(), _.escape(this.appVersion))})`;

        this.appsCollectionFetch = this.options.appsCollectionFetch;

        this.primFn = this.options.primFn;
        this.primFnSuccessCB = this.dmcSuccessCB;
        this.primFnFailCB = this.failCB;

        this.operation = 'uninstall';

        this.setInitialState(this.getInitialState());
    },

    events: $.extend(true, {}, BaseDialog.prototype.events, {
        'click .modal-btn-continue': function next(e) {
            e.preventDefault();

            this.executeAction(
                this.primFn.bind(this.model.app),
                this.primFnSuccessCB.bind(this),
                this.primFnFailCB.bind(this),
            );
        },
    }),

    taskCompleteCB() {
        this.appsCollectionFetch();
        this.setState(this.getSuccessState());
    },

    dmcSuccessCB(response) {
        if (response.status === 5) {
            this.failCB(response);
        } else {
            const taskID = response.entry[0].name;
            this.model.deployTask.beginPolling(taskID).done(() => {
                this.request.complete();
                this.taskCompleteCB();
            }).fail(this.setState.bind(this, this.getDeployFailState(this.appName, this.appVersionLabel)));
        }
    },

    failCB(response) {
        this.request.complete();
        this.setState(this.getFailState(response));
    },

    getInitialState() {
        return {
            title: this.getInitialTitle(),
            children: this.getInitialChildren(),
            footerBtns: this.getInitialFooterBtns(),
            postRenderFn: null,
        };
    },

    getInitialTitle() {
        return _('Uninstall - Confirm').t();
    },

    getInitialChildren() {
        const bodyHtml = splunkUtils.sprintf(_('Are you sure you want to uninstall \n' +
                '<b>%s</b> (version %s)? Uninstalling this app might cause \n' +
                'Splunk Cloud to restart and be unavailable for some time.').t(),
            _.escape(this.appName),
            _.escape(this.appVersion),
        );
        return [$(`<div> ${bodyHtml} </div>`)];
    },

    getInitialFooterBtns() {
        return [BaseDialog.BUTTON_CANCEL, BaseDialog.BUTTON_CONTINUE];
    },

    getInProgressTitle() {
        return _('Uninstall - In Progress').t();
    },

    getInProgressChildren() {
        this.waitspinner = new WaitSpinner({
            color: 'green',
            size: 'medium',
            frameWidth: 19,
        });

        const bodyHtml = splunkUtils.sprintf(_('Splunk Cloud is uninstalling \n' +
                '<b>%s</b> (version %s). This process might take several minutes and \n' +
                'cause Splunk Cloud to restart. Do not navigate away from this page \n' +
                'until the app uninstall process completes.').t(),
            _.escape(this.appName),
            _.escape(this.appVersion),
        );

        const bodyElem = $(`<div> ${bodyHtml} </div>`);
        return [bodyElem, this.waitspinner.render().el];
    },

    getSuccessState() {
        return {
            title: this.getSuccessTitle(),
            children: this.getSuccessChildren(),
            footerBtns: this.getSuccessFooterBtns(),
            postRenderFn: this.getCompletePostRenderFn.bind(this),
        };
    },

    getSuccessTitle() {
        return _('Uninstall - Complete').t();
    },

    getSuccessChildren() {
        let bodyHtml = splunkUtils.sprintf(_('Splunk Cloud uninstalled <b>%s</b> (version %s).').t(),
            _.escape(this.appName),
            _.escape(this.appVersion),
        );

        bodyHtml += _(' Verify the status of the deployment by clicking Last Deployment Status.').t();
        return [$(`<div> ${bodyHtml} </div>`)];
    },

    getSuccessFooterBtns() {
        return [BaseDialog.BUTTON_CLOSE];
    },

    getFailState(response) {
        return {
            title: this.getFailTitle(),
            children: this.getFailChildren(response),
            footerBtns: this.getFailBtns(),
            postRenderFn: this.getCompletePostRenderFn.bind(this),
        };
    },

    getFailTitle() {
        return _('Uninstall - Fail').t();
    },

    getFailChildren(response) {
        let errorMsg;

        // Dependencies required case
        if (response.status === 5) {
            const requiredAppStr = _.map(response.required_apps, app => app.app_title).join(', ');

            errorMsg = splunkUtils.sprintf(_('<b>%s</b> (version %s) could not be uninstalled \n' +
                'because it is required by the following apps: <b>%s<b>.').t(),
                _.escape(this.appName),
                _.escape(this.appVersion),
                _.escape(requiredAppStr),
            );
        } else {
            errorMsg = response.responseJSON.error.message || ERROR_MSGS.GENERIC;
            // Missing capability case
            // todo: Ask backend to change error object return in this case
            if (_.isObject(errorMsg) && _.has(errorMsg, 'missing_capabilities')) {
                errorMsg = ERROR_MSGS.MISSING_CAPABILITIES;
            } else if (_.isArray(errorMsg)) {
                errorMsg = this.handleMultipleErrorsResponse(errorMsg);
            }
        }

        return [$(`<div> ${errorMsg} </div>`)];
    },

    getFailBtns() {
        return [BaseDialog.BUTTON_CLOSE];
    },
});
