import { Selector } from 'testcafe';
import { ComponentIDs, PageIDs } from '../imports/ui/utilities/ids';

class ExternalPage {
  constructor() {
    this.pageId = `#${PageIDs.external}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async countLinks(testController) {
    const itemCount = Selector(`#${ComponentIDs.externalLink}`).count;
    await testController.expect(itemCount).gte(8);
  }
}
export const externalPage = new ExternalPage();
