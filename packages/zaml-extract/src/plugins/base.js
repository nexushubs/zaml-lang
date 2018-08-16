/**
 * Extractor base class
 */
class ExtractorBase {
  constructor(options) {
    this.options = options;
  }

  /**
   * Extract array of string
   * @param {string[]} list 
   */
  extract() {
    throw new TypeError('extract() method must be override');
  }
}

export default ExtractorBase
