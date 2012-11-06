/*
 * File: app/view/LoansListItem.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Kiva.view.LoansListItem', {
    extend: 'Ext.dataview.component.DataItem',
    alias: 'widget.loanslistitem',

    requires: [
        'Kiva.view.LoansListItemCompletion'
    ],

    config: {
        layout: {
            type: 'vbox'
        },
        cls: [
            'x-list-item'
        ],
        items: [
            {
                xtype: 'component',
                cls: [
                    'name'
                ],
                itemId: 'name'
            },
            {
                xtype: 'component',
                cls: [
                    'use'
                ],
                itemId: 'use'
            },
            {
                xtype: 'image',
                docked: 'left',
                itemId: 'avatar'
            },
            {
                xtype: 'loanslistitemcompletion',
                docked: 'right',
                itemId: 'completion'
            }
        ]
    },

    updateRecord: function(record) {
        // Provide an implementation to update this container's child items
        this.down('#name').setHtml(record.get('name'));
        this.down('#use').setHtml(record.get('use'));
        this.down('#avatar').setSrc(record.get('image'));
        this.down('#completion').setPercentFunded(record.get('percent_funded'));
    }

});