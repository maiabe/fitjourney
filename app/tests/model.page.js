import { Selector } from 'testcafe';
import { ComponentIDs, PageIDs } from '../imports/ui/utilities/ids';

class ModelPage {
  constructor() {
    this.pageId = `#${PageIDs.model}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Check for Map, click on it, and add it as a Mod Card */
  async clickMapAndAddCard(testController) {
    await testController.expect(Selector(`#${ComponentIDs.modelMap}`).exists).ok();
    await testController.click(`#${ComponentIDs.modelMap}`);
    await testController.wait(2000);
    await testController.click(`#${ComponentIDs.userModButton}`);
    await testController.click(`#${ComponentIDs.userModAddButton}`);
    await testController.typeText(`#${ComponentIDs.addModType}`, 'House');
    await testController.typeText(`#${ComponentIDs.addModCost}`, '$500,000');
    await testController.typeText(`#${ComponentIDs.addModDetail}`, 'Buggah stay BIG bumbai');
    await testController.click(`#${ComponentIDs.addModSubmit} input.btn.btn-primary`);
  }
}

export const modelPage = new ModelPage();
