Ext.define('Kiva.view.override.LoansListItem', {
    override: 'Kiva.view.LoansListItem',
    
    config:{
         layout: {
            pack: 'center',
            type: 'vbox'
        },
        cls: [
            'x-list-item'
        ],
        name: {
            cls: 'name'
        },
        use: {
            cls: 'use'
        },
        avatar: {
            docked: 'left'
        },
        completion: {
            docked: 'right',
            hidden: (Ext.os.deviceType==='Phone') ? true: false
        },
        dataMap: {
            getName: {
                setHtml: 'name'
            },
            getUse: {
                setHtml: 'use'
            },
            getAvatar: {
                setSrc: 'image'
            },
            getCompletion: {
                setPercentFunded: 'percent_funded'
            }
        }
    }
    
});