// Create new ieUserAgent object
var ieUserAgent = {
    init: function () {
        // Get the user agent string
        var ua = navigator.userAgent;
        this.compatibilityMode = false;

        // Detect whether or not the browser is IE
        var ieRegex = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (ieRegex.exec(ua) == null)
            this.exception = "The user agent detected does not contain Internet Explorer.";

        // Get the current "emulated" version of IE
        this.renderVersion = parseFloat(RegExp.$1);
        this.version = this.renderVersion;

        // Check the browser version with the rest of the agent string to detect compatibility mode
        if (ua.indexOf("Trident/7.0") > -1) {
            this.version = 11;                  // IE 11
            if (ua.indexOf("compatible") > -1) {
                this.compatibilityMode = true;
            }
        }
        else if (ua.indexOf("Trident/6.0") > -1) {
            if (ua.indexOf("MSIE 7.0") > -1) {
                this.compatibilityMode = true;
                this.version = 10;                  // IE 10
            }
        }
        else if (ua.indexOf("Trident/5.0") > -1) {
            if (ua.indexOf("MSIE 7.0") > -1) {
                this.compatibilityMode = true;
                this.version = 9;                   // IE 9
            }
        }
        else if (ua.indexOf("Trident/4.0") > -1) {
            if (ua.indexOf("MSIE 7.0") > -1) {
                this.compatibilityMode = true;
                this.version = 8;                   // IE 8
            }
        }
        else if (ua.indexOf("MSIE 7.0") > -1)
            this.version = 7;                       // IE 7
        else if (ua.indexOf("Mac OS") > -1 && ua.indexOf("CPU OS 7") > -1 )
            this.version = 51;                      // iOS 7
        else
            this.version = 6;                       // IE 6
    },
    loadPolyfill: function() {
        var head = document.getElementsByTagName('head')[0];
        var libs = [
            "external/es5-shim.min.js",
            "external/es5-sham.min.js",
            "external/es6-promise.min.js"
        ];
        for(var i = 0; i < libs.length; i ++) {
            var script = document.createElement('script');

            script.type = 'text/javascript';
            script.src = libs[i];

            head.appendChild(script);
        }
    }
};

// Initialize the ieUserAgent object
ieUserAgent.init();
if(ieUserAgent.version > 6)
    ieUserAgent.loadPolyfill();

var pathName = document.location.pathname;
var contextPath = '';
var modulePath = ''

var index = pathName.substr(1).lastIndexOf("/");
if(index > 0) {
    modulePath = pathName.substr(0, index + 1);
    index = modulePath.substr(1).indexOf("/");
}
if(index > 0)
    contextPath = modulePath.substr(0, index + 1);
else
    contextPath = modulePath;

console.log("external/polyfill", pathName, modulePath, contextPath);
