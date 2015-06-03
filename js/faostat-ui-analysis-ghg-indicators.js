define(['jquery',
        'handlebars',
        'text!faostat_ui_analysis_ghg_indicators/html/templates.hbs',
        'i18n!faostat_ui_analysis_ghg_indicators/nls/translate',
        'bootstrap',
        'sweetAlert'], function ($, Handlebars, templates, translate) {

    'use strict';

    function GHG_INDICATORS() {

        this.CONFIG = {
            lang: 'E',
            placeholder_id: 'placeholder'
        };

    }

    GHG_INDICATORS.prototype.init = function(config) {

        /* Extend default configuration. */
        this.CONFIG = $.extend(true, {}, this.CONFIG, config);

        /* Fix the language, if needed. */
        this.CONFIG.lang = this.CONFIG.lang != null ? this.CONFIG.lang : 'E';

    };

    return GHG_INDICATORS;

});