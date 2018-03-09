/**
 * @author stewarts
 * @date 11/28/16
 *
 * Represents a row in the table. The row contains links to perform
 * operations on the given search head node.
 */

import _ from 'underscore';
import $ from 'jquery';
import GridRowBaseView from 'views/shared/basemanager/GridRow';

export default GridRowBaseView.extend({
    moduleId: module.id,
    tagName: 'tr',
    className: 'list-item',

    events: {
        'click .captain-select-action': function captainClickHandler(e) {
            this.model.controller.trigger('openCaptainConfirmationDialog', { targetMember: this.model.entity });
            e.preventDefault();
        },
    },

    prepareTemplate(...args) {
        const parentArgs = GridRowBaseView.prototype.prepareTemplate.apply(this, args);
        const isCaptain = this.model.entity.isCaptain();
        return $.extend(true, {}, parentArgs, {
            model: this.model.entity,
            name: this.model.entity.entry.content.get('label'),
            role: _(this.model.entity.getRoleLabel()).t(),
            isCaptain,
            status: _(this.model.entity.getSHMemberStatus()).t(),
            last_heartbeat: this.model.entity.getLastHeartBeatAsLocalTime(),
        });
    },

    template: `
    <td class="cell-name">
        <a href="#" class="model-title entity-edit-link"><%- name %></a>
    </td>
    <td class="cell-actions">
        <% if(!isCaptain) { %>
            <a href="#" class="entity-action captain-select-action "><%= _("Transfer Captain").t() %></a>
        <% } %>
    </td>
    <td class="cell-status"><%- status %></td>
    <td class="cell-role"><%- role %></td>
    <td class="cell-last_heartbeat"><%- last_heartbeat %></td>
    `,
}, {
    columns: [
        {
            id: 'name',
            title: _('Name').t(),
        },
        {
            id: 'status',
            title: _('Status').t(),
        },
        {
            id: 'is_captain',
            title: _('Role').t(),
        }, {
            id: 'last_heartbeat',
            title: _('Last heartbeat sent to captain').t(),
        },
    ],
});
