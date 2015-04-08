define(function() {

    var config = {
        paths: {
            FAOSTAT_UI_ANALYSIS_GHG_INDICATORS: 'faostat-ui-analysis-ghg-indicators',
            faostat_ui_analysis_ghg_indicators: '../'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }
    };

    return config;

});