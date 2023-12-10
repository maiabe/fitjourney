import { Selector } from 'testcafe';
import { ComponentIDs, PageIDs } from '../imports/ui/utilities/ids';

class Dalle3Page {
  constructor() {
    this.pageId = `#${PageIDs.dalle3}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Test Generating a Picture */
  async generate(testController) {
    await testController.typeText(`#${ComponentIDs.dalle3Text}`, 'Pictures of Condo');
    await testController.click(`#${ComponentIDs.dalle3Generate}`);
    await testController.click('button.swal-button.swal-button--confirm');
  }

  /** Test to see new Image */
  async isGenerated(testController) {
    await testController.expect(`#${ComponentIDs.generatedImage}`).exists.ok();
  }
}

export const dalle3Page = new Dalle3Page();
