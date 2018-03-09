import $ from 'jquery';
import _ from 'underscore';
import splunkUtils from 'splunk.util';
import WaitSpinner from 'views/shared/waitspinner/Master';
import BaseDialog from './BaseDialog';
import LoginView from './Login';

const ERROR_MSGS = {
    GENERIC: _('Splunk Cloud cannot update this app at this time. Exit and try again later.').t(),
    MISSING_CAPABILITIES: _('You do not have permission to update this app.').t(),
    DEPLOY_FAIL_TEMPLATE: _('<b>%s</b> %s could not be updated because the deploy task failed. \n' +
        'You can retry the deployment task. If this deployment task continues to fail, contact \n' +
        'Splunk Support.').t(),
};
const BUTTON_LOGIN_DISABLED = `<button class="btn btn-primary modal-btn-login pull-right disabled" disabled>
    ${_('Login and Update').t()}</button>`;

const BUTTON_LOGIN = `<button class="btn btn-primary modal-btn-login pull-right">
    ${_('Login and Update').t()}</button>`;

export default BaseDialog.extend({
    moduleId: module.id,
    className: [BaseDialog.prototype.className, 'update-dialog'].join(' '),

    DEPLOY_FAIL_TEMPLATE: ERROR_MSGS.DEPLOY_FAIL_TEMPLATE,

    initialize(...args) {
        BaseDialog.prototype.initialize.apply(this, args);

        this.appCanUpdate = this.model.app.canUpdate();
        this.appName = this.model.app.getAppLabel();
        this.appVersion = this.model.app.getVersion();
        this.appVersionLabel = `(${splunkUtils.sprintf(_('version %s').t(), _.escape(this.appVersion))})`;

        this.appsCollectionFetch = this.options.appsCollectionFetch;

        this.primFn = this.options.primFn;
        this.primFnSuccessCB = this.dmcSuccessCB;
        this.primFnFailCB = this.failCB;

        this.operation = 'update';

        // Login Step Body
        this.children.loginStateChildren = new LoginView({
            model: {
                auth: this.model.auth,
                app: this.model.app,
            },
            operation: this.operation,
        });

        this.setInitialState(this.getInitialState());

        this.model.auth.on('loginComplete', this.triggerUpdate.bind(this));
        this.model.auth.on('change:consent', this.toggleLoginButton.bind(this));
        this.model.auth.on('loginFail', this.enableLoginButton.bind(this));
        this.model.auth.on('invalid', this.disableLoginButton.bind(this));
    },

    events: $.extend(true, {}, BaseDialog.prototype.events, {
        'click .modal-btn-continue': function next(e) {
            e.preventDefault();

            this.setState(this.getLoginState());
        },

        'click .modal-btn-login': function next(e) {
            e.preventDefault();

            this.children.loginStateChildren.doLogin();
        },
    }),

    triggerUpdate() {
        this.model.app.entry.content.set('auth', this.model.auth.get('sbsessionid'));

        this.executeAction(
            this.primFn.bind(this.model.app),
            this.primFnSuccessCB.bind(this),
            this.primFnFailCB.bind(this),
        );
    },

    taskCompleteCB() {
        this.appsCollectionFetch();
        this.setState(this.getSuccessState());
    },

    dmcSuccessCB(response) {
        const taskID = response.entry[0].name;
        this.model.deployTask.beginPolling(taskID).done(() => {
            this.request.complete();
            this.taskCompleteCB();
        }).fail(this.setState.bind(this, this.getDeployFailState(this.appName, this.appVersionLabel)));
    },

    failCB(response) {
        this.request.complete();
        this.setState(this.getFailState(response));
    },

    toggleLoginButton() {
        if (this.model.auth.get('consent')) {
            this.enableLoginButton();
        } else {
            this.disableLoginButton();
        }
    },

    enableLoginButton() {
        this.$('.modal-btn-login').removeClass('disabled');
        this.$('.modal-btn-login').prop('disabled', false);
    },

    disableLoginButton() {
        this.$('.modal-btn-login').addClass('disabled');
        this.$('.modal-btn-login').prop('disabled', true);
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
        let title;
        if (this.appCanUpdate) {
            title = _('Update - Confirm').t();
        } else {
            title = _('Update - Contact Splunk Support').t();
        }
        return title;
    },

    getInitialChildren() {
        let bodyHtml;
        if (this.appCanUpdate) {
            bodyHtml = splunkUtils.sprintf(_('Are you sure you want to update \n' +
                    '<b>%s</b> (version %s)? Updating this app might cause \n' +
                    'Splunk Cloud to restart and be unavailable for some time.').t(),
                _.escape(this.appName),
                _.escape(this.appVersion),
            );
        } else {
            bodyHtml = splunkUtils.sprintf(_('You cannot update <b>%s</b> (version %s) \n' +
                    'by using self-service app installation. To update this app, contact Splunk Support.').t(),
                _.escape(this.appName),
                _.escape(this.appVersion),
            );
        }
        return [$(`<div> ${bodyHtml} </div>`)];
    },

    getInitialFooterBtns() {
        let btns;
        if (this.appCanUpdate) {
            btns = [BaseDialog.BUTTON_CANCEL, BaseDialog.BUTTON_CONTINUE];
        } else {
            btns = [BaseDialog.BUTTON_CLOSE];
        }
        return btns;
    },

    getLoginState() {
        return {
            title: this.getLoginTitle(),
            children: this.getLoginChildren(),
            footerBtns: this.getLoginFooterBtns(),
            postRenderFn: this.getLoginPostRenderFn.bind(this),
        };
    },

    getLoginTitle() {
        return _('Login and Update').t();
    },

    getLoginChildren() {
        const bodyHtml = this.children.loginStateChildren.render().el;

        return [bodyHtml];
    },

    getLoginFooterBtns() {
        let btns;
        if (this.model.auth.get('consent')) {
            btns = [BaseDialog.BUTTON_CANCEL, BUTTON_LOGIN];
        } else {
            btns = [BaseDialog.BUTTON_CANCEL, BUTTON_LOGIN_DISABLED];
        }
        return btns;
    },

    getLoginPostRenderFn() {
        this.$('.username-placeholder').find('input').focus();
    },

    getInProgressTitle() {
        return _('Update - In Progress').t();
    },

    getInProgressChildren() {
        this.waitspinner = new WaitSpinner({
            color: 'green',
            size: 'medium',
            frameWidth: 19,
        });

        const bodyHtml = splunkUtils.sprintf(_('Splunk Cloud is updating \n' +
                '<b>%s</b> (version %s). This process might take several minutes and \n' +
                'cause Splunk Cloud to restart. Do not navigate away from this page \n' +
                'until the app update process completes.').t(),
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
        return _('Update - Complete').t();
    },

    getSuccessChildren() {
        let bodyHtml = splunkUtils.sprintf(_('Splunk Cloud updated <b>%s</b>.').t(),
            _.escape(this.appName),
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
        return _('Update - Fail').t();
    },

    getFailChildren(response) {
        let errorMsg = response.responseJSON.error.message || ERROR_MSGS.GENERIC;

        // Missing capability case
        // todo: Ask backend to change error object return in this case
        if (_.isObject(errorMsg) && _.has(errorMsg, 'missing_capabilities')) {
            errorMsg = ERROR_MSGS.MISSING_CAPABILITIES;
        } else if (_.isArray(errorMsg)) {
            errorMsg = this.handleMultipleErrorsResponse(errorMsg);
        }

        return [$(`<div> ${errorMsg} </div>`)];
    },

    getFailBtns() {
        return [BaseDialog.BUTTON_CLOSE];
    },
});
