import { Selector } from 'testcafe';
import { navBar } from './navbar.component';
import { ComponentIDs, PageIDs } from '../imports/ui/utilities/ids';

class SigninPage {
  constructor() {
    this.pageId = `#${PageIDs.signIn}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Fills out and submits the form to signin, then checks to see that login was successful. */
  async signin(testController, username, password) {
    await this.isDisplayed(testController);
    await testController.typeText(`#${ComponentIDs.signInEmail}`, username);
    await testController.typeText(`#${ComponentIDs.signInPass}`, password);
    await testController.click(`#${ComponentIDs.signInSubmit}`);
    await navBar.isLoggedIn(testController, username);
  }
}

export const signinPage = new SigninPage();
