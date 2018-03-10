require('dotenv').config();

import { assert } from "chai";
import LoginPage from "../POMs/login.page";
import Dashboard from "../POMs/dashboard.page";

describe('Login page', function () {

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

  describe("Logged-in User", function () {
    it("should see Dashboard", function () {
      let title = Dashboard.heading.getText().trim();

      assert(title === "Dashboard", "User is not logged in!");
    });
  });

  describe("User Manipulation", function () {

  });
});


