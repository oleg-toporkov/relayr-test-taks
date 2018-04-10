import { Config, browser } from "protractor";

process.env['multi'] = 'xunit=xunit_result-' + process.pid + '.xml spec=- mocha-allure-reporter=-'; //add reporters here

export let config: Config = {

    baseUrl: 'https://www.google.pl',

    framework: 'mocha',

    capabilities: {
        browserName: 'chrome'
    },

    suites: {
        search: '../specs/search/*.spec.js'
    },

    mochaOpts: {
        ui: 'bdd',
        reporter: 'mocha-multi',
        timeout: 360 * 1000 // 360 sec max test duration
    },

    params: {
        timeout: {
            animation: 500,
            general: 30 * 1000 // 30 seconds
        }
    },

    onPrepare: function() {
        browser.waitForAngularEnabled(false); // google not using angular
        browser.manage().timeouts().implicitlyWait(5 * 1000);
    }
};