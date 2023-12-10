import { Selector } from 'testcafe';
import { ComponentIDs, PageIDs } from '../imports/ui/utilities/ids';

class EditprofilePage {
  constructor() {
    this.pageId = `#${PageIDs.editProfile}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Checks to see if editing profile works */
  async editUserInformation(testController) {
    await testController.typeText(`#${ComponentIDs.editFirstName}`, 'Test');
    await testController.typeText(`#${ComponentIDs.editLastName}`, 'Cafe');
    await testController.typeText(`#${ComponentIDs.editLocation}`, 'YamumsHouse');
    await testController.typeText(`#${ComponentIDs.editBio}`, 'Get planny yahd fo BANG');
    await testController.click(`#${ComponentIDs.submitEdit} input.p-2.bg-white.border-1.rounded-1.mt-1`);
  }
}

export const editprofilePage = new EditprofilePage();
