require('dotenv').config();

import { assert } from "chai";
import LoginPage from "../POMs/login.page";

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
