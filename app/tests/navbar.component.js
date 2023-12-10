import { Selector } from 'testcafe';
import { ComponentIDs } from '../imports/ui/utilities/ids';

class NavBar {

  /** If someone is logged in, then log them out, otherwise do nothing. */
  async ensureLogout(testController) {
    const loggedInUser = await Selector(`#${ComponentIDs.currentUserDropDown}`).exists;
    if (loggedInUser) {
      await testController.click(`#${ComponentIDs.currentUserDropDown}`);
      await testController.click(`#${ComponentIDs.navBarSignOut}`);
    }
  }

  async gotoSignInPage(testController) {
    await this.ensureLogout(testController);
    await testController.click(`#${ComponentIDs.loginDropDown}`);
    await testController.click(`#${ComponentIDs.navBarSignIn}`);
  }

  /** Check that the specified user is currently logged in. */
  async isLoggedIn(testController, username) {
    await testController.expect(Selector(`#${ComponentIDs.currentUserDropDown}`).innerText).eql(username);
  }

  /** Check that someone is logged in, then click items to logout. */
  async logout(testController) {
    await testController.expect(Selector(`#${ComponentIDs.currentUserDropDown}`).exists).ok();
    await testController.click(`#${ComponentIDs.currentUserDropDown}`);
    await testController.click(`#${ComponentIDs.navBarSignOut}`);
  }

  /** Pull down login menu, go to sign up page. */
  async gotoSignUpPage(testController) {
    await this.ensureLogout(testController);
    await testController.click(`#${ComponentIDs.loginDropDown}`);
    await testController.click(`#${ComponentIDs.navBarSignUp}`);
  }

  async gotoForumPage(testController) {
    await testController.click(`#${ComponentIDs.navBarCivicEngagementItem}`);
    await testController.click(`#${ComponentIDs.navBarToForum}`);
  }

  /** Test that CE Forum page works */
  async gotoSurveyPage(testController) {
    await testController.click(`#${ComponentIDs.navBarCivicEngagementItem}`);
    await testController.click(`#${ComponentIDs.navBarToSurvey}`);
  }

  async gotoCommunityPage(testController) {
    await testController.click(`#${ComponentIDs.navBarCivicEngagementItem}`);
    await testController.click(`#${ComponentIDs.navBarToCommunity}`);
  }

  /** BEGIN VISUALIZE TOOLSET SECTION */
  async gotoMapp
}

export const navBar = new NavBar();
