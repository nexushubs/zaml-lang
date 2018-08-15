import _ from 'lodash';
import './constants';
import * as pluginFactory from './plugins';
import ExtractorBase from './plugins/base';

/**
 * @typedef {{start:number,end:number,text:string,type:string,item:{}}} EntityInfo
 */

/**
 * Check if a extractor is a class
 * @param {any} target
 */
const isExtractorClass = target => (
  target.prototype instanceof ExtractorBase
);

/**
 * Is entity ranges overlapped with existing items
 * @param {EntityInfo[]} items 
 * @param {EntityInfo} target 
 * @returns {boolean}
 */
const isOverlapping = (items, target) => items.some(item => (
  (item.start <= target.start && item.end >= target.start) ||
  (item.start <= target.end && item.end >= target.end)
));

class Extractor {

  constructor(options = {}) {
    const { plugins } = options;
    this.plugins = _.map(plugins, pluginOptions => {
      let name;
      let options = {};
      if (_.isString(pluginOptions)) {
        name = pluginOptions;
      } else {
        ({ name, options } = pluginOptions);
      }
      const Plugin = pluginFactory[name];
      if (!Plugin) {
        throw new TypeError(`could not load plugin '${name}'`);
      }
      if (isExtractorClass(Plugin)) {
        return new Plugin(options);
      } else {
        return Plugin;
      }
    });
  }

  /**
   * Execute single plugin to the text (array)
   * @param {string|string[]} text 
   * @param {function|Extractor} extractor 
   */
  execSingleExtractor(text, extractor) {
    if (_.isFunction(extractor)) {
      if (_.isArray(text)) {
        return text.map(t => extractor(t));
      } else {
        return extractor(text);
      }
    } else if (_.isFunction(extractor.extract)) {
      return extractor.extract(text);
    } else {
      throw new TypeError('invalid extractor');
    }
  }

  /**
   * Extract all entities from text by plugins
   * @param {string|string[]} list 
   * @returns Promise<EntityInfo>
   */
  async extract(text) {
    let list = text;
    if (_.isString(text)) {
      list = [text];
    }
    if (!_.isArray(list)) {
      console.log('list = ', list);
      throw new TypeError('invalid text parameter');
    }
    const results = [...list.map(t => [])];
    console.log(results);
    for (const extractor of this.plugins) {
      const result = await this.execSingleExtractor(list, extractor);
      result.forEach((items, i) => {
        const extracted = results[i];
        items.forEach(item => {
          if (!isOverlapping(extracted, item)) {
            extracted.push(item);
          }
        });
      });
    }
    return _.isString(text) ? results : results[0];
  }

}

export default Extractor;
