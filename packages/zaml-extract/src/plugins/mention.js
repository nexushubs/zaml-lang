import _ from 'lodash';

export const STOP_CHARS = '\n ~`!#$%^&*()-=_+[]\\{}|;\':",./<>?。？！，、；：“”‘（）《》〈〉【】『』「」﹃﹄〔〕…—～﹏￥';
export const MENTION_CHARS = '@＠';
export const P_MENTION = new RegExp(`[${_.escapeRegExp(MENTION_CHARS)}]([^${_.escapeRegExp(STOP_CHARS)}]+)`, 'g');

/**
 * Parse mentioned usernames from text
 * @param {string} text text to be parsed
 * @param {{users:string[],pattern:RegExp}} [options]
 * @returns {{start:number,end:number,type:'USER',item:{user:string}}[]}
 */
function extractMention(text, options = {}) {
  const {
    users,
    pattern = P_MENTION,
  } = options;
  let match;
  pattern.lastIndex = 0;
  const items = [];
  do {
    match = pattern.exec(text);
    if (!match) {
      break;
    }
    const [found, userName] = match;
    const start = match.index;
    const end = start + found.length;
    const entity = {
      start,
      end,
      type: 'MENTION',
      text: found,
      data: {},
    };
    if (users && users.includes(userName)) {
      entity.data.user = userName;
    }
    items.push(entity);
  } while (match);
  return Promise.resolve(items);
}

export default extractMention;
