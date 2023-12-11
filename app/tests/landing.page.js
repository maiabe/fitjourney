import { Selector } from 'testcafe';
import { PageIDs } from '../imports/ui/utilities/ids';

class LandingPage {
  constructor() {
    this.pageId = `#${PageIDs.landing}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const landingPage = new LandingPage();
