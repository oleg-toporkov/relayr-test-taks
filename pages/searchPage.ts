import { SearchPageElements } from './elements/searchPageElements'
import { browser, ExpectedConditions, protractor } from "protractor";
import { promise as wdpromise } from 'selenium-webdriver';

export class SearchPage {

    searchPageElements = new SearchPageElements();

    waitSearchButtonToDisappear(): wdpromise.Promise<void> {
        return browser.wait(ExpectedConditions.invisibilityOf(
            this.searchPageElements.searchButton),
            browser.params['timeout']['general'], 'Search button not disappeared');
    }

    waitSearchInputToAppear(): wdpromise.Promise<void> {
        return browser.wait(ExpectedConditions.visibilityOf(
            this.searchPageElements.searchButton),
            browser.params['timeout']['general'], 'Search input not appeared');
    }

    clickSearch(): wdpromise.Promise<void> {
        return this.searchPageElements.searchButton.click();
    }

    typeSearchQuery(query: string): wdpromise.Promise<void> {
        this.searchPageElements.searchQueryInput.sendKeys(query);
        return this.searchPageElements.searchQueryInput.sendKeys(protractor.Key.ESCAPE); //closing auto suggestion
    }

}