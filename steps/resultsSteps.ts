import { step } from '../helpers/reportHelper';
import { ResultsPage } from "../pages/resultsPage";

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

export let expect = chai.expect;


export class ResultsSteps {

    resultsPage = new ResultsPage();


    /**
     * Verify there are more that 0 results found
     */
    verifyResultsFound(): void {
        step('Verify results found', () => {
            this.resultsPage.waitResultsToAppear();
            expect(this.resultsPage.getResultsCount(), 'Verify results count').to.be.eventually.greaterThan(0);
        });
    }

    /**
     * Verify every result block has given text
     * @param text
     */
    verifyAllResultsContain(text: string): void {
        step(`Verify each result has ${text}`, () => {
            this.resultsPage.getResultsText().then( (results) => {
               results.forEach( (result, index) => {
                   expect(result.toLowerCase(), `Result ${index} has no search text ${text}`).to.contain(text.toLowerCase());
               }) ;
            });
        });
    }

    /**
     * Verify weather widget appears along with search results
     */
    verifyWeatherWidgetAppears(): void {
        step('Verify weather widget appears along with search results', () => {
            expect(this.resultsPage.isWeatherWidgetVisible(), 'Weather widget not visible').to.be.eventually.true;
        });
    }

}