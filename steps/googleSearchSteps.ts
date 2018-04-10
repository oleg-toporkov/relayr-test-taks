import { step } from '../helpers/reportHelper';
import { browser } from "protractor";

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

export let expect = chai.expect;


export class GoogleSearchSteps {

    /**
     * Open base URL and verify title text
     */
    openApplication(): void {
        step('Open Google search application', () => {
            browser.get(browser.baseUrl);
            browser.manage().window().maximize();
            browser.sleep(browser.params['timeout']['animation']); // small wait for animation to finish
            expect(browser.getTitle(), 'Verify browser title').eventually.contains('Google');
        });
    }

}