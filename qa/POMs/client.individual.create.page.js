import _ from "lodash";
import path from "path";
import Page from './page';
import testUser from "../data/testUser";

class ClientIndividualCreatePage extends Page {

  get heading() { return browser.element("h1"); }
  get button()  { return browser.element("button[type=submit]"); }
  get test() { return browser.element("//*[@data-qa-element-id]"); }  // not working

  // Required fields - text
  get firstName() { return browser.element("[data-qa-element-id='firstName']"); }
  get lastName() { return browser.element("[data-qa-element-id='lastName']"); }
  get street1() { return browser.element("[data-qa-element-id='street1']"); }
  get city() { return browser.element("[data-qa-element-id='city']"); }
  get postCode() { return browser.element("[data-qa-element-id='postCode']"); }
  get country() { return browser.element("[data-qa-element-id='country']"); }
  get businessPhone() { return browser.element("[data-qa-element-id='optionalFields.businessPhone']"); }

  // Required fields - dropdowns
  get gender() { return browser.element("[data-qa-element-id='gender']"); }
  get genderInput() { return browser.element("[data-qa-element-id='gender'] input"); }

  get dateOfBirth() { return browser.element("[data-qa-element-id='dateOfBirth']"); }
  get dateOfBirthInput() { return browser.element("[data-qa-element-id='dateOfBirth'] input"); }

  get branch() { return browser.element("[data-qa-element-id='hierarchySelect.branch']"); }
  get branchInput() { return browser.element("[data-qa-element-id='hierarchySelect.branch'] input"); }

  // this is predefined
  // get createdOn() { return browser.element("[data-qa-element-id='createdOn']"); }
  // get createdOnInput() { return browser.element("[data-qa-element-id='createdOn'] input"); }

  fillInputFields() {
    this.debug("setting firstName...");
    this.firstName.setValue(testUser.firstName);

    this.debug("setting lastName...");
    this.lastName.setValue(testUser.lastName);

    this.debug("setting street1...");
    this.street1.setValue(testUser.street1);

    this.debug("setting city...");
    this.city.setValue(testUser.city);

    this.debug("setting postCode...");
    this.postCode.setValue(testUser.postCode);

    this.debug("setting country...");
    this.country.setValue(testUser.country);

    this.debug("setting businessPhone...");
    this.businessPhone.setValue(testUser["optionalFields.businessPhone"]);
  }

  fillSelectFields() {
    this.debug("setting gender...");
    this.gender.click();
    this.genderInput.setValue(testUser.gender);
    browser.keys("Enter");  // found out that setValue is overridden by React if the Enter key is not pressed

    this.debug("setting dateOfBirth...");
    this.dateOfBirth.click();
    this.dateOfBirthInput.setValue(testUser.dateOfBirth);

    this.debug("setting branch...");
    this.branch.click();
    this.branchInput.setValue(testUser["hierarchySelect.branch"]);
    browser.keys("Enter");
  }

  open(section) {
    if(_.isUndefined(section)) section = "";
    super.open(path.join("client/individual", section));
  }

}

export default new ClientIndividualCreatePage();
