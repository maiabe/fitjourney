import { Selector } from 'testcafe';
import { ComponentIDs, PageIDs } from '../imports/ui/utilities/ids';

class SignupPage {
  constructor() {
    this.pageId = `#${PageIDs.signUp}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Signs up a new user, then checks to see that they are logged in by checking the navbar. */
  async signupUser(testController) {
    await this.isDisplayed(testController);
    await testController.typeText(`#${ComponentIDs.signupEmail}`, 'foo@bar.com');
    await testController.typeText(`#${ComponentIDs.signupUser}`, 'TestCafe');
    await testController.typeText(`#${ComponentIDs.signupPass}`, 'changeme');
    await testController.click(`#${ComponentIDs.signupSubmit} input.p-2.bg-white.border-1.rounded-1.mt-1`);
  }
}

export const signupPage = new SignupPage();
