import _ from 'lodash';
import fetch from 'isomorphic-fetch';
import ExtractorBase from './base';

class RestExtractor extends ExtractorBase {

  constructor(options = {}) {
    super(options);
    if (!options.url) {
      throw new TypeError('missing option: url');
    }
  }

  async request(list) {
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

  async extract(text) {
    try {
      let data = await this.request(text);
      return _.get(data, 'predictions.entities');
    } catch (error) {
      throw error;
    }
  }

  async extractArray(list) {
    try {
      let data = await this.request(list);
      return _.map(data.predictions, item => _.get(item, 'entities'));
    } catch (error) {
      throw error;
    }
  }
}

export default RestExtractor;
