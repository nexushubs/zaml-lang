import * as _ from 'lodash';

export function formatEntityData(data: any): any {
  return _.omitBy(data, _.isPlainObject);
}
