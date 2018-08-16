import _ from 'lodash';
import Extractor from './Extractor';
import RestExtractor from './plugins/async/rest';

const extract = {

  /**
   * Extract entities from a text
   * @param {string|string[]} text Source string
   * @returns {Node}
   */
  extract(text, options) {
    const extractor = new Extractor(options);
    return extractor.extract(text);
  },

  /**
   * 
   * @param {any} options 
   */
  create(options) {
    return new Extractor(options);
  },

  /**
   * Create rest extractor
   * @param {any} options 
   */
  rest(options) {
    new RestExtractor(options);
  },

  Extractor,

};

export {
  Extractor,
};

export default extract;