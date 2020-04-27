const browserstackLocal = process.env.BROWSERSTACK_LOCAL;
const browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER;

const BROWSERS = {
    chrome: [{
        'browserName': 'chrome',
        'browserstack.selenium_version' : '3.141.59',
        'browserstack.local': browserstackLocal,
        'browserstack.localIdentifier': browserstackLocalIdentifier,
        'bstack:options': {
            'os': 'OS X',
            'osVersion': 'Catalina',
            'resolution': '1600x1200',
            'debug' : 'true',
            'projectName' : 'NEST',
            'consoleLogs' : 'verbose',
            'networkLogs': 'true',
            "seleniumVersion" : "3.141.59"
        },
        'chromeOptions': {
            args: [
                '--start-maximized',
                '--incognito',
                '--start-fullscreen',
                '--enable-features=NetworkService,NetworkServiceInProcess',
            ]},

    }],
    headlessChrome: [{
        'browserName': 'chrome',
        'browserstack.selenium_version' : '3.141.59',
        'browserstack.local': browserstackLocal,
        'browserstack.localIdentifier': browserstackLocalIdentifier,
        'bstack:options': {
            'os': 'OS X',
            'osVersion': 'Catalina',
            'resolution': '1600x1200',
            'debug' : 'true',
            'projectName' : 'NEST',
            'consoleLogs' : 'verbose',
            'networkLogs': 'true',
        },
        'chromeOptions': {
            args: [
                '--headless',
                '--no-sandbox',
            ]},

    }],
    chromewindows: [{
        'browserName': 'chrome',
        'browserstack.selenium_version' : '3.141.59',
        'browserstack.local': browserstackLocal,
        'browserstack.localIdentifier': browserstackLocalIdentifier,
        'bstack:options': {
            'os' : 'Windows',
            'osVersion' : '10',
            'resolution': '1600x1200',
            'networkLogs': 'true',
            'debug' : 'true',
            'projectName' : 'NEST',
            'consoleLogs' : 'verbose',
        },
        'chromeOptions': {
            args: [
                '--start-maximized',
                '--incognito',
            ]},
    }],
    chromeJSOff: [{
        'browserName': 'chrome',
        'browserstack.selenium_version' : '3.141.59',
        'browserstack.local': browserstackLocal,
        'browserstack.localIdentifier': browserstackLocalIdentifier,
        'bstack:options': {
            'os': 'OS X',
            'osVersion': 'Catalina',
            'resolution': '1600x1200',
            'networkLogs': 'true',
            'debug' : 'true',
            'projectName' : 'NEST',
            'consoleLogs' : 'verbose',
        },
        'chromeOptions': {
            args: [
                '--start-maximized',
                '--incognito',
            ],
            prefs: {
                'profile.managed_default_content_settings.javascript': 2,
            },
        },
    }],
    firefox: [{
        'browserName' : 'Firefox',
        'browserstack.selenium_version' : '3.141.59',
        'browserstack.local': browserstackLocal,
        'browserstack.localIdentifier': browserstackLocalIdentifier,
        'bstack:options' : {
            'os' : 'OS X',
            'osVersion' : 'Catalina',
            'resolution' : '1600x1200',
            'projectName' : 'NEST',
            'networkLogs': 'true',
            'debug' : 'true',
            'consoleLogs' : 'verbose',
        },

    }],
    safari: [{
        'browserName' : 'Safari',
        'browserstack.selenium_version' : '3.141.59',
        'browserstack.local': browserstackLocal,
        'browserstack.localIdentifier': browserstackLocalIdentifier,
        'bstack:options' : {
            'os' : 'OS X',
            'osVersion' : 'Mojave',
            'resolution' : '1920x1080',
            'projectName' : 'NEST',
            'debug' : 'true',
            'networkLogs' : 'true',
            'consoleLogs' : 'verbose',
            'safari' : {
                'enablePopups' : 'true',
                'allowAllCookies' : 'true',
            },
        },
    }],
    edge: [{
        'browserName' : 'Edge',
        'browserstack.selenium_version' : '4.0.0-alpha-2',
        'browserVersion' : '18.0',
        'browserstack.local': browserstackLocal,
        'browserstack.localIdentifier': browserstackLocalIdentifier,
        'bstack:options' : {
            'os' : 'Windows',
            'osVersion' : '10',
            'resolution' : '1920x1080',
            'projectName' : 'NEST',
            'debug' : 'true',
            'networkLogs' : 'true',
            'consoleLogs' : 'verbose',
        },
    }],
    ie: [{
        'browserName' : 'IE',
        'browserVersion' : '11.0',
        'browserstack.selenium_version' : '3.141.59',
        'browserstack.local': browserstackLocal,
        'browserstack.localIdentifier': browserstackLocalIdentifier,
        'bstack:options' : {
            'os' : 'Windows',
            'osVersion' : '10',
            'projectName' : 'NEST',
            'debug' : 'true',
            'resolution' : '1920x1080',
            'networkLogs' : 'true',
            'consoleLogs' : 'verbose',
            'idleTimeout' : 300,
            'ie' : {
                'noFlash' : 'true',
                'driver' : '3.141.59',
                'enablePopups' : 'true',
            },
        },
    }],
    android: [{
        'browserstack.appium_version':'1.15.0',
        'browserstack.local': browserstackLocal,
        'browserstack.localIdentifier': browserstackLocalIdentifier,
        'bstack:options' : {
            'osVersion' : '9.0',
            'deviceName' : 'Google Pixel 3a XL',
            'realMobile' : 'true',
            'projectName' : 'NEST',
            'debug' : 'true',
            'networkLogs' : 'true',
        },
    }],
    iphone: [{
        'browserstack.appium_version':'1.14.0',
        'browserstack.local': browserstackLocal,
        'browserstack.localIdentifier': browserstackLocalIdentifier,
        'browserstack.safari.enablePopups' : 'true',
        'handlesAlerts' : 'true',
        'autoAcceptAlerts': 'true',
        'unexpectedAlertBehaviour':'Allow',
        'bstack:options' : {
            'osVersion' : '13',
            'deviceName' : 'iPhone 11 Pro Max',
            'realMobile' : 'true',
            'projectName' : 'NEST',
            'debug' : 'true',
            'networkLogs' : 'true',
            'consoleLogs' : 'verbose',
        },
    }],
    ipad: [{
      'browserstack.appium_version' : '1.14.0',
        'browserstack.local': browserstackLocal,
        'browserstack.localIdentifier': browserstackLocalIdentifier,
        'browserstack.safari.enablePopups' : 'true',
        'handlesAlerts' : 'true',
        'bstack:options' : {
            'osVersion' : '13',
            'deviceName' : 'iPad Pro 12.9 2018',
            'realMobile' : 'true',
            'projectName' : 'NEST',
            'debug' : 'true',
            'networkLogs' : 'true',
            'consoleLogs' : 'verbose',
        },
    }],
};

module.exports.DEFAULT_BROWSERLIST = BROWSERS;
