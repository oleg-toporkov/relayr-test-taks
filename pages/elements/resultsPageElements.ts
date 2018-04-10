import { ElementArrayFinder, element, by, ElementFinder } from "protractor";

export class ResultsPageElements {

    searchResults: ElementArrayFinder = element.all(by.xpath('//*[@id="rso"]//div[@class="g"]'));

    weatherWidget: ElementFinder = element(by.id('wob_wc'));

}