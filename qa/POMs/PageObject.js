class PageObject {
  constructor (options) {
    this.options = options;
  }

  getOption(key) {
    return this.options[key];
  }
}

module.exports = PageObject;
