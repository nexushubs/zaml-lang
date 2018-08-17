import _ from 'lodash';
import './constants';
import * as pluginFactory from './plugins';
import ExtractorBase from './plugins/base';

/**
 * @typedef {{start:number,end:number,text:string,type:string,item:{}}} EntityInfo
 */

/**
 * @typedef {function(string): Promise<EntityInfo[]>} SingleExtractor
 */

/**
 * @typedef {function(string[]): Promise<EntityInfo[][]>} ArrayExtractor
 */

/**
 * @typedef {SingleExtractor | {extract: SingleExtractor, extractArray: ArrayExtractor}} ExtractorType
 */

/**
 * @typedef {string|{name:string,options:any}|ExtractorType} ExtractorOptions
 */

/**
 * @typedef {{plugins:ExtractorOptions[]}} ExtractorConstructorOptions
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

/**
 * Extractor class
 */
class Extractor {

  /**
   * @param {object} options 
   * @param {ExtractorConstructorOptions} options.plugins
   */
  constructor(options = {}) {
    const { plugins } = options;
    this.plugins = [];
    _.forEach(plugins, options => this.addPlugin(options));
  }

  /**
   * 
   * @param {ExtractorOptions} options 
   */
  addPlugin(options) {
    let extractor;
    if (_.isFunction(options) || _.isFunction(options.extract)) {
      extractor = options;
    } else {
      let name;
      let opt = {};
      if (_.isString(options)) {
        name = options;
      } else {
        ({ name, options: opt } = options);
      }
      const plugin = pluginFactory[name];
      extractor = isExtractorClass(plugin) ? new plugin(opt) : plugin;
    }
    if (!extractor) {
      throw new TypeError(`could not load plugin '${name}'`);
    }
    this.plugins.push(extractor);
  }

  /**
   * Execute single plugin to the text (array)
   * @param {string} text 
   * @param {ExtractorType} extractor 
   */
  async execSingleExtractor(text, extractor) {
    if (_.isFunction(extractor)) {
      if (_.isArray(text)) {
        return Promise.all(text.map(t => extractor(t)));
      } else {
        return extractor(text);
      }
    } else if (_.isFunction(extractor.extract)) {
      if (_.isArray(text)) {
        if (_.isFunction(extractor.extractArray)) {
          return extractor.extractArray(text);
        } else {
          return Promise.all(text.map(t => extractor.extract(t)));
        }
      } else {
        return extractor.extract(text);
      }
    } else {
      throw new TypeError('invalid extractor');
    }
  }

  /**
   * Extract all entities from text by plugins
   * @param {string[]} list 
   * @returns Promise<EntityInfo>
   */
  async extract(text) {
    let list = text;
    if (_.isString(text)) {
      list = [text];
    }
    if (!_.isArray(list)) {
      throw new TypeError('invalid text parameter');
    }
    const results = [...list.map(t => [])];
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
    return _.isString(text) ? results[0] : results;
  }

  /**
   * 
   * @param {any} node 
   */
  async extractNode(node) {
    
  }
}

export default Extractor;
