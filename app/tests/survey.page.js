import { Selector } from 'testcafe';
import { PageIDs } from '../imports/ui/utilities/ids';

class SurveyPage {
  constructor() {
    this.pageId = `#${PageIDs.surveyPage}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Test that adding a post works */

  /** Test that adding a comment works */
}

export const surveyPage = new SurveyPage();
