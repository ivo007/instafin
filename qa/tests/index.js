require('dotenv').config();

import { assert } from "chai";
import LoginPage from "../POMs/login.page";
import Dashboard from "../POMs/dashboard.page";
import SideMenu from "../POMs/sidemenu.page";
import ClientIndividual from "../POMs/client.individual.create.page";
import EditClient from "../POMs/client.individual.dashboard.page";

describe('Login page', function () {

  // open login
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

  //log in
  before(function () {
    LoginPage.open();

    LoginPage.username.setValue(process.env.INSTAFIN_USERNAME);
    LoginPage.password.setValue(process.env.INSTAFIN_PASSWORD);

    LoginPage.button.click();
  });

  describe("Logged-in User", function () {
    it("should see Dashboard", function () {
      let title = Dashboard.heading.getText().trim();

      assert(title === "Dashboard", "User is not logged in!");
    });
  });

  describe("User Manipulation", function () {

    // go to create page
    before(function () {
      // SideMenu.clientsSection.click();

      ClientIndividual.open("create");

      // browser.waitForVisible(ClientIndividual.firstName);
      browser.pause(1500);
    });

    it("Create User", function () {

      // first, fill in normal text
      const name = ClientIndividual.fillInputFields();

      // then fill in dropdowns
      ClientIndividual.fillSelectFields();

      // create the user
      ClientIndividual.button.click();

      browser.pause(1500);  // just for the sake of it

      // if successful it redirects to /client/individual/dashboard/<id>
      // we can either test URL or the title, for example
      const title = EditClient.headingText(name);

      assert("Individual Client -" + name + "- Overview", title, "User creation failed!");
    });
  });
});


