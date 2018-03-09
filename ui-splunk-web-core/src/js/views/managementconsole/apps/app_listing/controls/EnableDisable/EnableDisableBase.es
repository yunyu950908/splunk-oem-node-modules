import $ from 'jquery';
import _ from 'underscore';
import splunkUtils from 'splunk.util';
import BaseDialog from '../BaseDialog';

export default BaseDialog.extend({
    moduleId: module.id,
    className: [BaseDialog.prototype.className, 'enable-disable-base'].join(' '),

    initialize(...args) {
        BaseDialog.prototype.initialize.apply(this, args);

        this.isExternalApp = this.options.isExternalApp;
        this.appName = this.isExternalApp ? this.model.app.getTitle() : this.model.app.getAppLabel();

        // for apps that do not have a version, set default version 0.0.0
        this.appVersion = this.model.app.getVersion();

        if (this.appVersion) {
            this.appVersionLabel = ` (${splunkUtils.sprintf(_('version %s').t(), _.escape(this.appVersion))})`;
        } else {
            this.appVersionLabel = '';
        }

        this.appLocalFetch = this.options.appLocalFetch;
        this.appModelFetch = this.options.appModelFetch;

        this.operation = this.options.operation;

        this.primFn = this.options.primFn;
        this.primFnSuccessCB = this.isExternalApp ? this.externalSuccessCB : this.dmcSuccessCB;
        this.primFnFailCB = this.failCB;

        this.updateSplunkBarAppsCB = this.options.updateSplunkBarAppsCB;

        this.setInitialState(this.getInitialState());
    },

    events: $.extend(true, {}, BaseDialog.prototype.events, {
        'click .modal-btn-continue': function confirm(e) {
            e.preventDefault();

            this.executeAction(
                this.primFn.bind(this.model.app),
                this.primFnSuccessCB.bind(this),
                this.primFnFailCB.bind(this),
            );
        },
    }),

    externalSuccessCB() {
        this.request.complete();
        $.when(this.updateSplunkBarAppsCB(), this.appLocalFetch(), this.appModelFetch()).done(() => {
            this.setState(this.getSuccessState());
        });
    },

    dmcSuccessCB(response) {
        const taskID = response.entry[0].name;
        this.model.deployTask.beginPolling(taskID).done(() => {
            this.request.complete();
            this.externalSuccessCB();
        }).fail(this.setState.bind(this, this.getDeployFailState(this.appName, this.appVersionLabel)));
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

    getInitialFooterBtns() {
        return [BaseDialog.BUTTON_CANCEL, BaseDialog.BUTTON_CONTINUE];
    },

    getSuccessState() {
        return {
            title: this.getSuccessTitle(),
            children: this.getSuccessChildren(),
            footerBtns: this.getSuccessFooterBtns(),
            postRenderFn: this.getCompletePostRenderFn.bind(this),
        };
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

    getFailChildren(response) {
        let errorMsg = response &&
                       response.responseJSON &&
                       response.responseJSON.error &&
                       response.responseJSON.error.message;

        errorMsg = errorMsg || this.GENERIC_ERROR_MSG;

        // Missing capability case
        // todo: Ask backend to change error object return in this case
        if (_.isObject(errorMsg) && _.has(errorMsg, 'missing_capabilities')) {
            errorMsg = this.MISSING_CAPABILITIES_MSG;
        } else if (_.isArray(errorMsg)) {
            errorMsg = this.handleMultipleErrorsResponse(errorMsg);
        }

        return [$(`<div> ${errorMsg} </div>`)];
    },

    getFailBtns() {
        return [BaseDialog.BUTTON_CLOSE];
    },
});
