import { GoogleSearchSteps, feature, story } from '../facade'

describe('Search in Google', () => {

    let googleSearchSteps = new GoogleSearchSteps();

    beforeEach( () => {
        feature('Search in Google');
        googleSearchSteps.openApplication();
    });


    it('test', () => {
        story('test');

    });

});
