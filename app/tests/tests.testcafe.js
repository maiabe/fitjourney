import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { communityPage } from './community.page';
import { forumPage } from './forum.page';
import { surveyPage } from './survey.page';
import { mappingPage } from './mapping.page';
import { dalle3Page } from './dalle3.page';
import { modelPage } from './model.page';
import { externalPage } from './external.page';
/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'admin@foo.com', password: 'changeme' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that Community page works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.gotoCommunityPage(testController);
  await communityPage.isDisplayed(testController);
  await communityPage.hasCards(testController);
});

test('Test that Forum page and adding post/comment works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.gotoForumPage(testController);
  await forumPage.isDisplayed(testController);
  /** Needs 'inappropriate content' error to be fixed first */
  await forumPage.gotoAddPost(testController);
  await navBar.gotoForumPage(testController);
  await forumPage.isDisplayed(testController);
  await forumPage.addComment(testController);
  await navBar.gotoForumPage(testController);
  await forumPage.isDisplayed(testController);
  await forumPage.deleteComment(testController);
  await forumPage.deletePost(testController);
});

test('Test that Survey page works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.gotoSurveyPage(testController);
  await surveyPage.isDisplayed(testController);
  /** Needs 'inappropriate contents' error to be fixed first */
  await surveyPage.addSurvey(testController);
});

test('Test that Model page works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.gotoModel(testController);
  await modelPage.isDisplayed(testController);
  /** Need to test actual function, idk what is supposed to happen on this page rn */
});

test('Test that Dalle3 page works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.gotoDalle3(testController);
  await dalle3Page.isDisplayed(testController);
  /** Below code needs to have keys to work */
  await dalle3Page.generate(testController);
  // await dalle3Page.isGenerated(testController);
});

test('Test that Mapping page works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.gotoMapping(testController);
  await mappingPage.isDisplayed(testController);
  await mappingPage.hasIframe(testController);
});

test('Test that External page works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.gotoExternal(testController);
  await externalPage.isDisplayed(testController);
  await externalPage.countLinks(testController);
});
