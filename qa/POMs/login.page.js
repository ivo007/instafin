/**
 * @tutorial http://webdriver.io/guide/testrunner/pageobjects.html#description
 */
import Page from './page';

class LoginPage extends Page {

  get username()  { return browser.element('#us1'); }
  get password()  { return browser.element('#pw1'); }
  get form()      { return browser.element('.form-horizontal'); }

  open() {
    super.open('user/login');
  }

  exists() {

  }

  submit() {
    this.form.submitForm();
  }

}

export default new LoginPage();
