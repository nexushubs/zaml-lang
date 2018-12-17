import * as _ from 'lodash';
import * as fetch from 'isomorphic-fetch';
import ExtractorBase from './base';
import { ExtractorInterface, EntityInfo } from '../types';
import { formatEntityData } from '../util';

export interface RestExtractorOptions {
  url?: string;
}

export interface EntityResult {
  text?: string;
  entities: EntityInfo[];
}

export interface SinglePredictionResult {
  predictions: PredictionResult;
}

export interface ArrayPredictionResult {
  predictions: PredictionResult;
}

export type PredictionResult = SinglePredictionResult | ArrayPredictionResult;

class RestExtractor extends ExtractorBase implements ExtractorInterface {

  constructor(options: RestExtractorOptions = {}) {
    super(options);
    if (!options.url) {
      throw new TypeError('missing option: url');
    }
  }

  async request(list: string | string[]): Promise<PredictionResult> {
    const data = {
      input: list,
    }
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(this.options.url, requestOptions);
      return response.json();
    } catch (error) {
      throw error;
    }
  }

  async extract(text: string): Promise<EntityInfo[]> {
    try {
      let data = await this.request(text);
      return _.get(data, 'predictions.entities').map(formatEntityData);
    } catch (error) {
      throw error;
    }
  }

  async extractArray(list: string[]): Promise<EntityInfo[][]> {
    try {
      const result = await this.request(list);
      if (_.isArray(result.predictions)) {
        return _.map(result.predictions, item => _.get(item, 'entities').map(formatEntityData));
      } else {
        throw new Error('invalid result from REST api');
      }
    } catch (error) {
      throw error;
    }
  }
}

export default RestExtractor;
