import { ResultsPageElements } from './elements/resultsPageElements'
import { browser, ExpectedConditions } from "protractor";
import { promise as wdpromise } from 'selenium-webdriver';

export class ResultsPage {

    resultsPageElements = new ResultsPageElements();


    waitResultsToAppear(): wdpromise.Promise<void> {
        return browser.wait(ExpectedConditions.visibilityOf(
            this.resultsPageElements.searchResults.first()),
            browser.params['timeout']['general'], 'No results appeared');
    }

    getResultText(index: number): wdpromise.Promise<string> {
        return this.resultsPageElements.searchResults.get(index).getText();
    }

    getResultsCount(): wdpromise.Promise<number> {
        return this.resultsPageElements.searchResults.count();
    }

    getResultsText(): wdpromise.Promise<string[]> {
        return this.resultsPageElements.searchResults.map( (element) => {
            return element.getText();
        });
    }

    isWeatherWidgetVisible(): wdpromise.Promise<boolean> {
        return this.resultsPageElements.weatherWidget.isDisplayed();
    }

}