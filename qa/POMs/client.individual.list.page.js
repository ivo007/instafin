import _ from "lodash";
import path from "path";
import Page from './page';

class ClientIndividualListPage extends Page {

  get heading() { return browser.element("h1"); }
  get button()  { return browser.element("button[type=submit]"); }
  get test() { return browser.element("//*[@data-qa-element-id]"); }  // not working

  // Required fields - dropdowns
  get gender() { return browser.element("[data-qa-element-id='gender']"); }
  get genderInput() { return browser.element("[data-qa-element-id='gender'] input"); }

  get dateOfBirth() { return browser.element("[data-qa-element-id='dateOfBirth']"); }
  get dateOfBirthInput() { return browser.element("[data-qa-element-id='dateOfBirth'] input"); }

  get branch() { return browser.element("[data-qa-element-id='hierarchySelect.branch']"); }
  get branchInput() { return browser.element("[data-qa-element-id='hierarchySelect.branch'] input"); }

  get createdOn() { return browser.element("[data-qa-element-id='createdOn']"); }
  get createdOnInput() { return browser.element("[data-qa-element-id='createdOn'] input"); }

  // Required fields - text
  get firstName() { return browser.element("[data-qa-element-id='firstName']"); }
  get lastName() { return browser.element("[data-qa-element-id='lastName']"); }
  get street1() { return browser.element("[data-qa-element-id='street1']"); }
  get city() { return browser.element("[data-qa-element-id='city']"); }
  get postCode() { return browser.element("[data-qa-element-id='postCode']"); }
  get country() { return browser.element("[data-qa-element-id='country']"); }
  get businessPhone() { return browser.element("[data-qa-element-id='optionalFields.businessPhone']"); }

  open(section) {
    if(_.isUndefined(section)) section = "";

    this.debug("retrieving client page...");
    super.open(path.join("client/individual", section));
  }

}

export default new ClientIndividualListPage();
