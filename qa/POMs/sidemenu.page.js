import Page from './page';

class SideMenu extends Page {

  // a.dropmenu:contains('Create')
  get createSection() { return browser.element("//*[contains(text(),'Create')]"); }
  get clientsSection() { return browser.element("h1"); }


}

export default new SideMenu();
