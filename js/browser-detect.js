    /* unsupported browser detection and splash page */
    function browserCheck() {
        function incompatible_browser() {
            var browserMsg = $('.sec-browser-incompatible').clone();
            $('body').html(browserMsg);
            $(browserMsg).removeClass('hide-me');
        };

        if (jQuery.browser.mozilla) {
            if (parseInt(jQuery.browser.version) < 2) {
                incompatible_browser();
            }
        } else if (jQuery.browser.msie) {
            if (parseInt(jQuery.browser.version) < 9) {
                incompatible_browser();
            }
        } else if (jQuery.browser.webkit) {
            var ver = jQuery.browser.version;
            var subver = ver.split('.');
            var firstver = parseInt(subver[0]);
            if (window.navigator.appVersion.indexOf('Chrome') > -1) {
                if (subver < 55) {
                    incompatible_browser();
                }
            }
            else if (firstver < 531) {
                incompatible_browser();
            }
        } else if (jQuery.browser.opera) {
            if (parseInt(jQuery.browser.version) < 12) {
                incompatible_browser();
            }
        }
    }

    browserCheck();
