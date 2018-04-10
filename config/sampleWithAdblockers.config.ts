import { Config, browser } from "protractor";
import { getFileAsBase64 } from '../helpers/fileHelper';

process.env['multi'] = 'xunit=xunit_result-' + process.pid + '.xml spec=- mocha-allure-reporter=-'; //add reporters here

export let config: Config = {

    baseUrl: 'https://www.google.pl',

    framework: 'mocha',

    suites: {
        trackers: '../specs/search/*.spec.js'
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

    capabilities: {
        browserName: 'chrome',

        'chromeOptions': {
            'extensions': [getFileAsBase64('../../extensions/Adblock-Plus_v1.12.4.crx'),
                           getFileAsBase64('../../extensions/AdBlock_v3.8.5.crx'),
                           getFileAsBase64('../../extensions/Adblock-Pro_v4.1.crx'),
                           getFileAsBase64('../../extensions/Ghostery_v7.1.2.3.crx'),
                           getFileAsBase64('../../extensions/uBlock-Pro_v0.0.2.crx')], //add here more extensions to load
        }
    },

    onPrepare: function() {
        browser.waitForAngularEnabled(false);
        browser.manage().timeouts().implicitlyWait(5 * 1000);
    }
};