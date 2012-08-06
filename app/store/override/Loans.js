Ext.define('Kiva.store.override.Loans', {
    override: 'Kiva.store.Loans',
    
    requires: [
        'Kiva.model.Loan'
    ],
    
    config: {
        autoLoad: true,
        model: 'Kiva.model.Loan',
        remoteFilter: true,
        storeId: 'Loans',    
        proxy: {
                type: 'kiva',
                reader: {
                    type: 'json',
                    successProperty: 'success',
                    rootProperty: function(data) {
                            if (data.error || data.query.count === 0) {
                                return [];
                            } else {
                                return data.query.results.loans;
                            }
                        }
                }
            }
       }

});