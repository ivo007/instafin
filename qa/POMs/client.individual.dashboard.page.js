import path from "path";
import Page from './page';

class ClientIndividualDashboardPage extends Page {

  get heading() { return browser.element("h1"); }
  get menuLoanAccounts() { return browser.element("#loan"); }

  headingText(name) {
    let text = this.heading.getText();
    // trim more than one consecutive whitespace
    return text.trim().replace(/\s\s+/g,'');
  }

  open(id) {
    this.debug("retrieving user dashboard...");
    super.open(path.join('client/individual/dashboard', id));
  }

}

export default new ClientIndividualDashboardPage();
