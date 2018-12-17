import Extractor from './Extractor';
import { ExtractorConstructorOptions } from './types';

const extract = {

  /**
   * Extract entities from a text
   * @param text Source string
   */
  extract(text: string | string[], options: ExtractorConstructorOptions) {
    const extractor = new Extractor(options);
    return extractor.extract(text);
  },

  /**
   * 
   * @param {any} options 
   */
  create(options: ExtractorConstructorOptions) {
    return new Extractor(options);
  },

  Extractor,

};

export {
  Extractor,
};

export default extract;
