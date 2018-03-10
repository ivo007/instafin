require('dotenv').config();

import { assert } from "chai";

describe('Login page', function () {

  before(function () {
    browser.url("user/login");
  });

  it("should have username field", function () {

    const user = browser.isExisting("input[name='us1']");

    assert(user === true, "there is no username input");
  });

  it("should have password field", function () {

    const pass = browser.isExisting("input[name='pw1']");

    assert(pass === true, "there is no password input");
  });
});
