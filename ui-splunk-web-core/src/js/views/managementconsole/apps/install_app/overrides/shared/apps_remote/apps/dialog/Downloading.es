import _ from 'underscore';
import Modal from 'views/shared/Modal';
import WaitSpinner from 'views/shared/waitspinner/Master';
import RestartView from 'views/managementconsole/apps/install_app/overrides/shared/apps_remote/apps/dialog/Restarting';
import splunkUtils from 'splunk.util';

/* eslint-disable no-unused-vars */
import css from './Downloading.pcss';
/* eslint-enable no-unused-vars */

export default RestartView.extend({
    moduleId: module.id,
    className: 'downloading-dialog',

    initialize(...args) {
        RestartView.prototype.initialize.apply(this, ...args);

        this.waitspinner = new WaitSpinner({
            color: 'green',
            size: 'medium',
            frameWidth: 19,
        });

        this.onFail = () => {
            this.options.onFail();
            this.removeAppIdUrlParam();
        };
        this.onComplete = this.onComplete.bind(this);
    },

    updateBodyHTML() {
        const isInstallingDependencies = this.model.app && this.model.app.entry.content.get('installDependencies');
        let appName;
        let appVersion;
        if (this.model.appRemote) {
            appName = this.model.appRemote.get('title');
            appVersion = this.model.appRemote.get('release').title;
        } else if (this.model.app) {
            appName = this.model.app.entry.content.get('@label');
            appVersion = this.model.app.getVersion();
        }

        if (isInstallingDependencies) {
            this.title = _('Downloading app and dependencies...').t();
        } else {
            this.title = _('Downloading app...').t();
        }

        /* eslint-disable prefer-template */
        const bodyTemplate = _('Splunk Cloud is downloading and installing \n' +
        '<b>%s</b> (version %s)\n' +
        (isInstallingDependencies ? ' and its dependencies. \n' : '. \n') +
        'This might take several minutes and cause Splunk \n' +
        'Cloud to restart. Do not navigate away from this page until the \n' +
        'app installation process completes.').t();
        /* eslint-enable prefer-template */

        const customBody = splunkUtils.sprintf(bodyTemplate,
            _.escape(appName),
            _.escape(appVersion),
        );

        this.bodyHTML = this.compiledTemplate({
            customBody,
        });
    },

    render(...args) {
        this.updateBodyHTML();
        RestartView.prototype.render.apply(this, ...args);

        this.$(Modal.BODY_SELECTOR).append(this.waitspinner.render().el);
        this.waitspinner.start();

        return this;
    },

    onComplete() {
        this.collection.messages.fetch();
    },

    template: '<%= customBody %>',
});
