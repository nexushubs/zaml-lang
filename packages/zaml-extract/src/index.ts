import * as _ from 'lodash';
import Extractor from './Extractor';
import { ExtractorConstructorOptions, EntityInfo } from './types';

function extract(text: string, options: ExtractorConstructorOptions): Promise<EntityInfo[]>;
function extract(list: string[], options: ExtractorConstructorOptions): Promise<EntityInfo[][]>;
function extract(input: string | string[], options: ExtractorConstructorOptions) {
  const extractor = new Extractor(options);
  if (_.isString(input)) {
    return extractor.extract(input);
  } else {
    return extractor.extract(input);
  }
}

const extractObject = {

  /**
   * Extract entities from a text
   * @param text Source string
   */
  extract,

  /**
   * @param options 
   */
  create(options: ExtractorConstructorOptions) {
    return new Extractor(options);
  },

  Extractor,

};

export {
  Extractor,
};

export default extractObject;
