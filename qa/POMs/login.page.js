import Page from './page';

class LoginPage extends Page {

  get username()  { return browser.element('#us1'); }
  get password()  { return browser.element('#pw1'); }
  get button()  { return browser.element("button[type=submit]"); }

  open() {
    super.open('user/login');
  }

}

export default new LoginPage();
