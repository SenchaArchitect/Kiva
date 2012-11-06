/*
 * File: app/view/Main.js
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

Ext.define('Kiva.view.Main', {
    extend: 'Ext.Container',
    alias: 'widget.mainview',

    requires: [
        'Kiva.view.LoanFilter',
        'Kiva.view.LoansList'
    ],

    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'loanfilter',
                docked: 'top'
            },
            {
                xtype: 'loanslist'
            }
        ]
    }

});