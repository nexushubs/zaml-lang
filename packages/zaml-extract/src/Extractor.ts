import * as _ from 'lodash';
import './constants';
import pluginFactory from './plugins';
import ExtractorBase from './plugins/base';
import {
  EntityInfo,
  ExtractorType,
  ExtractorConstructorOptions,
  ExtractorOptions,
  ExtractorInterface,
  ExtendedExtractorOptions,
} from './types';

/**
 * Check if a extractor is a class
 * @param target
 */
const isExtractorClass = (target: any) => (
  target.prototype instanceof ExtractorBase
);

/**
 * Is entity ranges overlapped with existing items
 * @param items 
 * @param target 
 */
const isOverlapping = (items: EntityInfo[], target: EntityInfo) => items.some(item => (
  (item.start <= target.start && item.end >= target.start) ||
  (item.start <= target.end && item.end >= target.end)
));

/**
 * Extractor class
 */
class Extractor {

  public plugins: ExtractorType[];
  /**
   * 
   */
  constructor(options: ExtractorConstructorOptions = {}) {
    const { plugins } = options;
    this.plugins = [];
    _.forEach(plugins, options => this.addPlugin(options));
  }

  /**
   * Add plugin
   * @param options 
   */
  addPlugin(options: ExtractorOptions) {
    let extractor: ExtractorType;
    if (_.isFunction(options) || _.isFunction((<ExtractorInterface> options).extract)) {
      extractor = <ExtractorType> options;
    } else {
      let name: string;
      let opt = {};
      if (_.isString(options)) {
        name = options;
      } else {
        ({ name, options: opt } = <ExtendedExtractorOptions> options);
      }
      const plugin = (<any> pluginFactory)[name];
      if (!plugin) {
        throw new Error('invalid plugin name');
      } else if (isExtractorClass(plugin)) {
        extractor = new plugin(opt);
      } else if (_.isFunction(plugin)) {
        extractor = (text) => plugin(text, opt);
      } else {
        extractor = plugin;
      }
    }
    if (!extractor) {
      throw new TypeError(`could not load plugin '${name}'`);
    }
    this.plugins.push(extractor);
  }

  /**
   * Execute single plugin to the text (array)
   * @param {} text 
   * @param {} extractor 
   */
  async execSingleExtractor(text: string | string[], extractor: ExtractorType) {
    if (_.isFunction(extractor)) {
      if (_.isArray(text)) {
        return Promise.all(text.map(t => extractor(t)));
      } else {
        return extractor(text);
      }
    } else if (_.isFunction((<ExtractorInterface> extractor).extract)) {
      if (_.isArray(text)) {
        if (_.isFunction((<ExtractorInterface> extractor).extractArray)) {
          return (<ExtractorInterface> extractor).extractArray(text);
        } else {
          return Promise.all(text.map(t => (<ExtractorInterface> extractor).extract(t)));
        }
      } else {
        return (<ExtractorInterface> extractor).extract(text);
      }
    } else {
      throw new TypeError('invalid extractor');
    }
  }

  /**
   * Extract all entities from text by plugins
   * @param list 
   * @returns 
   */
  async extract(text: string | string[]) {
    let list: string[];
    if (_.isArray(text)) {
      list = text;
    } else {
      list = [text];
    }
    if (!_.isArray(list)) {
      throw new TypeError('invalid text parameter');
    }
    const results: EntityInfo[][] = [...list.map(t => [])];
    for (const extractor of this.plugins) {
      let result: EntityInfo[][];
      try {
        result = await this.execSingleExtractor(list, extractor);
      } catch (e) {
        console.error('extractor execution error:', extractor);
        console.error(e);
        result = [];
      }
      result.forEach((items: EntityInfo[], i: number) => {
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

}

export default Extractor;
