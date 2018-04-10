import { SearchSteps, ResultsSteps, feature, story } from '../facade'

describe('Search in Google', () => {

    let searchSteps = new SearchSteps();
    let resultsSteps = new ResultsSteps();

    beforeEach( () => {
        feature('Search in Google');
        searchSteps.openApplication();
    });


    it('Search one word', () => {
        story('Fulltext search');

        let query = 'test';

        searchSteps.typeSearchQuery(query);
        searchSteps.clickSearch();

        resultsSteps.verifyResultsFound();
        resultsSteps.verifyAllResultsContain(query);
    });

    it('Search weather widget by city name', () => {
        story('Widget search');

        let query = 'weather krakow';

        searchSteps.typeSearchQuery(query);
        searchSteps.clickSearch();

        resultsSteps.verifyResultsFound();
        resultsSteps.verifyWeatherWidgetAppears();
    });

});
