class ExtractorBase {
  constructor(options) {
    this.options = options;
  }

  extract() {
    throw new TypeError('extract() method must be override');
  }
}

export default ExtractorBase
