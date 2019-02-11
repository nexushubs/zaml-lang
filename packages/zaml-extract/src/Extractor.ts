import * as _ from 'lodash';
import pluginFactory from './plugins';
import ExtractorBase from './plugins/base';
import {
  EntityInfo,
  ExtractorType,
  ExtractorConstructorOptions,
  ExtractorOptions,
  ExtractorInterface,
  ExtendedExtractorOptions,
  AsyncArrayExtractor,
} from './types';
import extract from '.';

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
class Extractor implements ExtractorInterface {

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
   * @param text 
   * @param extractor 
   */
  execSingleExtractor(text: string, extractor: ExtractorType): Promise<EntityInfo[]>;
  execSingleExtractor(list: string[], extractor: ExtractorType): Promise<EntityInfo[][]>;
  async execSingleExtractor(input: string | string[], extractor: ExtractorType) {
    if (_.isFunction(extractor)) {
      if (_.isArray(input)) {
        return Promise.all(input.map(t => extractor(t)));
      } else {
        return extractor(input);
      }
    } else if (_.isFunction((extractor as ExtractorInterface).extract)) {
      if (_.isArray(input)) {
        if (_.isFunction((extractor as ExtractorInterface).extractArray)) {
          return ((extractor as ExtractorInterface).extractArray as AsyncArrayExtractor)(input);
        } else {
          return Promise.all(input.map(t => (extractor as ExtractorInterface).extract(t)));
        }
      } else {
        return (extractor as ExtractorInterface).extract(input);
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
  extract(text: string): Promise<EntityInfo[]>;
  extract(list: string[]): Promise<EntityInfo[][]>;
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

  extractArray(list: string[]): Promise<EntityInfo[][]> {
    return this.extract(list);
  }

}

export default Extractor;
