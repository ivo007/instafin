import _ from "lodash";
import path from "path";
import Page from './page';

class ClientIndividualCreatePage extends Page {

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

  fillInputFields() {
    // @todo: fill values from dummyUser.js
    console.log("setting firstName...");
    this.firstName.setValue("Harley");

    console.log("setting lastName...");
    this.lastName.setValue("Quinn");

    console.log("setting street1...");
    this.street1.setValue("Left Block 20");

    console.log("setting city...");
    this.city.setValue("Gotham");

    console.log("setting postCode...");
    this.postCode.setValue("10000");

    console.log("setting country...");
    this.country.setValue("Narnia");

    console.log("setting businessPhone...");
    this.businessPhone.setValue("Narnia");

    return "Harley Quinn";
  }

  fillSelectFields() {
    console.log("setting gender...");
    this.gender.click();
    this.genderInput.setValue("Male");

    console.log("setting dateOfBirth...");
    this.dateOfBirth.click();
    this.dateOfBirthInput.setValue("10/10/2017");

    console.log("setting branch...");
    this.branch.click();
    this.branchInput.setValue("Taguig");

    console.log("setting createdOn...");
    this.createdOn.click();
    this.createdOnInput.setValue("11/03/2018");
  }

  open(section) {
    if(_.isUndefined(section)) section = "";
    super.open(path.join("client/individual", section));
  }

}

export default new ClientIndividualCreatePage();
