export { GoogleSearchSteps } from '../steps/googleSearchSteps';


require('mocha-allure-reporter');
declare let allure: any;

export function feature(name: string): void {
    allure.feature(name);
}

export function story(name: string): void {
    allure.story(name);
}