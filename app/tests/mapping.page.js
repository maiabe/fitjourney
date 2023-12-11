import { Selector } from 'testcafe';
import { ComponentIDs, PageIDs } from '../imports/ui/utilities/ids';

class MappingPage {
  constructor() {
    this.pageId = `#${PageIDs.mapping}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Test that iframe VR is present */
  async hasIframe(testController) {
    await testController.expect(Selector(`#${ComponentIDs.iframe}`).exists).ok();
  }
}

export const mappingPage = new MappingPage();
