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
  }

  /** Test to see new Image */
  async isGenerated(testController) {
    // Waits that image is generated.
    await testController.wait(15000);
    // Checks to see that an AI image is generated.
    await testController.expect(Selector(`#${ComponentIDs.generatedImage}`).exists).ok();
  }
}

export const dalle3Page = new Dalle3Page();
