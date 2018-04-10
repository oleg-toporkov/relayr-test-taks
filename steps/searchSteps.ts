import { step } from '../helpers/reportHelper';
import { browser } from "protractor";
import { SearchPage } from "../pages/searchPage";

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

export let expect = chai.expect;


export class SearchSteps {

    searchPage = new SearchPage();

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

    /**
     * Type search query
     * @param query
     */
    typeSearchQuery(query: string): void {
        step('Type search query', () => {
            this.searchPage.waitSearchInputToAppear();
            this.searchPage.typeSearchQuery(query);
        });
    }

    /**
     * Click search button and wait button do disappear
     */
    clickSearch(): void {
        step('Click search', () => {
            this.searchPage.clickSearch();
            this.searchPage.waitSearchButtonToDisappear()
        });
    }

}