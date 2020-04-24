require('dotenv').config();
const browsersList = require('./browsers.ts');
const cliarguments = require('yargs')
    .default('browserName', 'chrome')
    .argv;
const browserName = cliarguments.browserName;

const bstackUserName = process.env.BROWSERSTACK_USERNAME;
const bstackPassword =  process.env.BROWSERSTACK_ACCESS_KEY;
const applitoolsKey= process.env.APPLITOOLS_API_KEY;

exports.config = {
    user: bstackUserName,
    key: bstackPassword,
    specs: [
        './dist/specs/*.spec.js',
    ],
    maxInstances: 10,
    APPLITOOLS_API_KEY: applitoolsKey,
    capabilities: browsersList['DEFAULT_BROWSERLIST'][browserName],
    logLevel: 'trace',
    outputDir: './wdio-logs/',
    baseUrl: 'https://www.softwareadvice.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['browserstack'],
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }],
    ],
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 1000000, // For applitools
    },
    beforeTest: function(test) {
        if (!browser.isMobile) {
            browser.maximizeWindow();
        }
    },
}
