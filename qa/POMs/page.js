/**
 * @tutorial http://webdriver.io/guide/testrunner/pageobjects.html
 */
import config from "../../config/config";

export default class Page {
  constructor() {
    this.title = 'Base Page Object';
  }

  open(path) {
    browser.url(path);
  }

  /**
   * Manage logging for all POM classes
   * @param msg
   */
  debug(msg) {
    if(config.debug) {
      console.log(msg);
    }
  }
}
