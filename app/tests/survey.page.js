import { Selector } from 'testcafe';
import { ComponentIDs, PageIDs } from '../imports/ui/utilities/ids';

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
  async addSurvey(testController) {
    await testController.click(`#${ComponentIDs.addSurvey}`);
    await testController.typeText(`#${ComponentIDs.addSurveyContent}`, 'Chicken not bread?');
    await testController.typeText(`#${ComponentIDs.addSurveyOption1}`, 'Chicken is not bread!');
    await testController.typeText(`#${ComponentIDs.addSurveyOption2}`, 'She cannot breathe!');
    await testController.click(`#${ComponentIDs.submitSurvey} input.p-2.bg-white.border-1.rounded-1.mt-1`);
    await testController.click('button.swal-button.swal-button--confirm');
  }
}

export const surveyPage = new SurveyPage();
