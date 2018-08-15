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
      console.log(JSON.stringify(data, null, 2));
      const response = await fetch(this.options.url, requestOptions);
      return response.json();
    } catch (error) {
      throw error;
    }
  }

  /**
   * Extract array of string
   * @param {string[]} list 
   */
  async extract(list) {
    try {
      let data = await this.request(list);
      return _.map(data.results, item => _.get(item, 'predictions.entities'));
    } catch (error) {
      throw error;
    }
  }
}

export default RestExtractor;
