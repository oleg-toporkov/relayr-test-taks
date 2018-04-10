import { log } from 'util';
import { browser, protractor } from 'protractor';
import { promise as wdpromise } from 'protractor';
import { error as seleniumExceptions } from "selenium-webdriver";

let chai = require('chai');

require('mocha-allure-reporter');
declare let allure: any;


export function step(name: string, fn: Function): any {
    return protractor.browser.controlFlow().execute( () => {
        return createStep(name, () => protractor.browser.controlFlow().execute( () => {
            log(name);
            return fn();
        }));
    }, name);
}

function createStep(name: string, fn: Function): any {
    let stepName = allure._format(name, Array.prototype.slice.call(arguments, 0)),
        status = 'passed',
        result: any,
        error : Error;
    allure._allure.startStep(stepName);
    try {
        result = fn.apply(this, arguments);
    }
    catch(error) {
        allure._allure.endStep('broken');
        throw error;
    }
    finally {
        if(allure.isPromise(result)) {
            result.then(function() {
                attachScreenshot(name).then( () => {
                    allure._allure.endStep('passed');
                })
            }, function(err) {
                attachScreenshot('Failed - ' + name).then( () => {
                    if (err instanceof seleniumExceptions.TimeoutError ||
                        err instanceof seleniumExceptions.ScriptTimeoutError) {
                        status = 'failed';
                        error = new chai.AssertionError(err);
                    } else {
                        status = 'broken';
                        error = err;
                    }
                    allure._allure.endStep(status);
                    throw error;
                });
            });
        } else {
            allure._allure.endStep(status);
        }
    }
    return result;
}

function attachScreenshot(name: string): wdpromise.Promise<void> {
    return browser.takeScreenshot().then( (img) => {
        allure.createAttachment(name, new Buffer(img, 'base64'), 'image/png');
    });
}