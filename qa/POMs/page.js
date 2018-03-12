import config from "../../config/config";

export default class Page {
  constructor() {
    this.title = 'Base Page Object';
  }

  open(path) {
    browser.url(path);
  }

  debug(msg) {
    if(config.debug) {
      console.log(msg);
    }
  }
}
