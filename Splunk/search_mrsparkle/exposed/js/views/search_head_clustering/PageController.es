/**
 * @author stewarts
 * @date 11/28/16
 *
 * Page Controller for Search Head Clustering
 */

import $ from 'jquery';
import _ from 'underscore';
import route from 'uri/route';
import BaseController from 'controllers/BaseManagerPageController';
import MembersCollection from 'collections/services/cluster/searchhead/Members';
import MemberModel from 'models/services/cluster/searchhead/Member';
import SHClusterStatusModel from 'models/services/shcluster/SHClusterStatus';
import GridRow from './GridRow';
import RestartButton from './RestartButton';
import TransferCaptainConfirmationDialog from './TransferCaptainConfirmationDialog';
import RollingRestartConfirmationDialog from './RollingRestartConfirmationDialog';
import ServiceNotReadyDialog from './ServiceNotReadyDialog';


export default BaseController.extend({
    moduleId: module.id,

    canShowServiceReadyDialog: true,

    initialize(options) {
        this.collection = this.collection || {};
        this.model = this.model || {};
        this.deferreds = this.deferreds || {};
        const optionsExtended = _.extend({}, options);

        optionsExtended.enableNavigationFromUrl = false;
        optionsExtended.model = this.model;
        optionsExtended.collection = this.collection;
        optionsExtended.entitiesCollectionClass = MembersCollection;
        optionsExtended.entityModelClass = MemberModel;
        optionsExtended.fragments = ['manager', 'system', 'search_head_clustering'];
        optionsExtended.entitySingular = _('Member').t();
        optionsExtended.entitiesPlural = _('Members').t();
        optionsExtended.header = {
            pageTitle: _('Search Head Clustering').t(),
            pageDesc: _('Monitor and take action on your search head cluster.').t(),
            learnMoreLink: 'whatsnew.searchheadclustering',
        };

        optionsExtended.grid = {
            showOwnerFilter: false,
            showAppColumn: false,
            showOwnerColumn: false,
            showDispatchAs: false,
            showStatusColumn: false,
            showSharingColumn: false,
            showAppFilter: false,
        };

        optionsExtended.customViews = {
            GridRow,
            NewButtons: RestartButton,
        };
        this.children.learnMoreLink = {};

        this.children.learnMoreLink.captain = route.docHelp(
            this.model.application.get('root'),
            this.model.application.get('locale'),
            'learnmore.shc.captainxfer',
        );

        this.children.learnMoreLink.restart = route.docHelp(
            this.model.application.get('root'),
            this.model.application.get('locale'),
            'learnmore.shc.rollingrestart',
        );

        BaseController.prototype.initialize.call(this, optionsExtended);

        this.model.SHClusterStatusInstance = new SHClusterStatusModel();

        // Captaincy Transfer Events
        this.listenTo(this.model.controller, 'beginTransferCaptaincy', this.beginTransferCaptaincy);
        this.listenTo(this.model.controller, 'openCaptainConfirmationDialog', this.openCaptainConfirmationDialog);

        // Rolling Restart Events
        this.listenTo(this.model.controller,
            'openRollingRestartConfirmationDialog',
            this.openRollingRestartConfirmationDialog,
        );
        this.listenTo(this.model.controller, 'beginRollingRestart', this.beginRollingRestart);

        // Status Polling Event
        this.listenTo(this.model.SHClusterStatusInstance, 'serviceReadyUpdate', this.serviceReadyHandleResponse);

        this.model.SHClusterStatusInstance.pollStatus();
    },

    /*
     * Transfer Captain
     */

    beginTransferCaptaincy() {
        this.collection.entities.transferCaptain(this.targetCaptain)
        .done(() => { this.endTransferCaptaincySuccess(); })
        .fail(() => { this.endTransferCaptaincyError(); });

        this.canShowServiceReadyDialog = false;
    },

    endTransferCaptaincySuccess() {
        this.model.controller.trigger('refreshEntities');
        this.model.controller.trigger('showCaptainTransferSuccess');
        this.canShowServiceReadyDialog = true;
    },

    endTransferCaptaincyError() {
        this.canShowServiceReadyDialog = true;
    },

    openCaptainConfirmationDialog(options) {
        this.targetCaptain = options.targetMember;
        const targetCaptainName = options.targetMember.getMemberName();

        this.children.transferCaptainConfirmDialog = new TransferCaptainConfirmationDialog({
            learnMoreLink: this.children.learnMoreLink.captain,
            controller: this.model.controller,
            collection: { entities: this.collection.entities.clone() },
            onHiddenRemove: true,
            backdrop: 'static',
            keyboard: false,
            targetCaptainName,
        });

        $('body').append(this.children.transferCaptainConfirmDialog.render().el);
        this.children.transferCaptainConfirmDialog.show();
    },

    /*
     * Rolling Restart
     */

    openRollingRestartConfirmationDialog() {
        this.children.rollingRestartConfirmDialog = new RollingRestartConfirmationDialog({
            learnMoreLink: this.children.learnMoreLink.restart,
            controller: this.model.controller,
            collection: { entities: this.collection.entities.clone() },
            backdrop: 'static',
            keyboard: false,
            onHiddenRemove: true,
        });

        $('body').append(this.children.rollingRestartConfirmDialog.render().el);
        this.children.rollingRestartConfirmDialog.show();
    },

    beginRollingRestart() {
        this.collection.entities.beginRollingRestart()
        .done(() => { this.rollingRestartSuccess(); })
        .fail(() => { this.rollingRestartError(); });

        this.model.controller.trigger('rollingRestartInProgress');
        this.canShowServiceReadyDialog = false;
    },

    rollingRestartSuccess() {
        this.model.controller.trigger('rollingRestartSuccess');
        this.canShowServiceReadyDialog = true;
    },

    rollingRestartError() {
        this.canShowServiceReadyDialog = true;
    },

    /*
     * Polling Functions
     */

    showServiceNotReadyDialog(statusResponse) {
        this.children.serviceNotReadyDialog = new ServiceNotReadyDialog({
            onHiddenRemove: true,
            backdrop: 'static',
            keyboard: false,
            statusResponse,
        });

        $('body').append(this.children.serviceNotReadyDialog.render().el);
        this.children.serviceNotReadyDialog.show();
    },

    serviceReadyHandleResponse(statusResponse) {
        const serviceFunctioningNormally = (_.isObject(statusResponse)
                                         && statusResponse.serviceReady
                                         && !statusResponse.rollingRestart);
        const shouldShowServiceNotReadyDialog = !serviceFunctioningNormally && this.canShowServiceReadyDialog;
        const shouldCloseServiceNotReadyDialog = serviceFunctioningNormally
                                                 && this.children.serviceNotReadyDialog
                                                 && this.children.serviceNotReadyDialog.shown;

        // Previously serviceable, but now unserviceable
        if (shouldShowServiceNotReadyDialog) {
            this.showServiceNotReadyDialog(statusResponse);
            this.canShowServiceReadyDialog = false;
        }
        if (shouldCloseServiceNotReadyDialog) {
            this.model.controller.trigger('refreshEntities');
            this.children.serviceNotReadyDialog.hide();
            this.canShowServiceReadyDialog = true;
        }
    },
});
