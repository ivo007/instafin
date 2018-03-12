import Page from './page';

class DashboardPage extends Page {

  get heading() { return browser.element("h1"); }

  open() {
    super.open('dashboard');
  }

}

export default new DashboardPage();
