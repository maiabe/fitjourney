import { Selector } from 'testcafe';
import { PageIDs } from '../imports/ui/utilities/ids';

class CommunityPage {
  constructor() {
    this.pageId = `#${PageIDs.communityPage}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Test that at least 3 default cards are shown */
  async hasCards(testController) {
    const cardCount = Selector('.card').count;
    await testController.expect(cardCount).gte(3);
  }
}

export const communityPage = new CommunityPage();
