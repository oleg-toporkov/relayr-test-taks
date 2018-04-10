import { ElementFinder, element, by } from "protractor";

export class SearchPageElements {

    searchQueryInput: ElementFinder = element(by.id('lst-ib'));
    
    searchButton: ElementFinder = element(by.name('btnK'));

}