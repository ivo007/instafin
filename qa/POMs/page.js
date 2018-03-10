export default class Page {
  constructor() {
    this.title = 'Base Page Object';
  }

  open(path) {
    browser.url(path);
  }
}
