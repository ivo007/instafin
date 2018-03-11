require('dotenv').config();

import { assert } from "chai";
import LoginPage from "../POMs/login.page";
import Dashboard from "../POMs/dashboard.page";
import SideMenu from "../POMs/sidemenu.page";
import ClientIndividual from "../POMs/client.individual.create.page";

describe.skip('Login page', function () {

  before(function () {
    LoginPage.open();
  });

  it("should have username field", function () {
    const user = LoginPage.username;

    assert(user.value !== null, "there is no username input");
  });

  it("should have password field", function () {
    const pass = LoginPage.password;

    assert(pass.value !== null, "there is no password input");
  });

});

describe("Users", function () {

  before(function () {
    LoginPage.open();

    LoginPage.username.setValue(process.env.INSTAFIN_USERNAME);
    LoginPage.password.setValue(process.env.INSTAFIN_PASSWORD);

    LoginPage.button.click();
  });

  describe.skip("Logged-in User", function () {
    it("should see Dashboard", function () {
      let title = Dashboard.heading.getText().trim();

      assert(title === "Dashboard", "User is not logged in!");
    });
  });

  describe("User Manipulation", function () {

    before(function () {
      let text = SideMenu.createSection.getText();
      text = text.trim();
      console.log("Create User", text);

      // SideMenu.clientsSection.click();
      // random guy: edit/CL00065
      ClientIndividual.open("create");

      // browser.waitForVisible(ClientIndividual.firstName);
      browser.pause(2000);
    });

    it("Create User", function () {

      // first, fill in normal text
      console.log("setting firstName...");
      ClientIndividual.firstName.setValue("Harley");

      console.log("setting lastName...");
      ClientIndividual.lastName.setValue("Quinn");

      console.log("setting street1...");
      ClientIndividual.street1.setValue("Left Block 20");

      console.log("setting city...");
      ClientIndividual.city.setValue("Gotham");

      console.log("setting postCode...");
      ClientIndividual.postCode.setValue("10000");

      console.log("setting country...");
      ClientIndividual.country.setValue("Narnia");

      console.log("setting businessPhone...");
      ClientIndividual.businessPhone.setValue("Narnia");

      // then fill in dropdowns

      console.log("setting gender...");
      ClientIndividual.gender.click();
      ClientIndividual.genderInput.setValue("Male");

      console.log("setting dateOfBirth...");
      ClientIndividual.dateOfBirth.click();
      ClientIndividual.dateOfBirthInput.setValue("10/10/2017");

      console.log("setting branch...");
      ClientIndividual.branch.click();
      ClientIndividual.branchInput.setValue("Taguig");

      console.log("setting createdOn...");
      ClientIndividual.createdOn.click();
      ClientIndividual.createdOnInput.setValue("11/03/2018");

      ClientIndividual.button.click();
    });
  });
});


