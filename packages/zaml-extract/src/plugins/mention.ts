import * as _ from 'lodash';
import { EntityInfo } from '../types';

export const STOP_CHARS = '\n ~`!#$%^&*()-=_+[]\\{}|;\':",./<>?。？！，、；：“”‘（）《》〈〉【】『』「」﹃﹄〔〕…—～﹏￥';
export const MENTION_CHARS = '@＠';
export const P_MENTION = new RegExp(`[${_.escapeRegExp(MENTION_CHARS)}]([^${_.escapeRegExp(STOP_CHARS)}]+)`, 'g');

export interface ExtractMentionOptions {
  users?: string[];
  pattern?: RegExp;
}

/**
 * Parse mentioned usernames from text
 * @param text text to be parsed
 * @param [options]
 */
function extractMention(text: string, options: ExtractMentionOptions = {}): EntityInfo[] {
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
    const [found, username] = match;
    const start = match.index;
    const end = start + found.length;
    const entity: EntityInfo = {
      start,
      end,
      type: 'MENTION',
      text: found,
      data: {},
    };
    if (users && users.includes(username)) {
      entity.data.username = username;
    }
    items.push(entity);
  } while (match);
  return items;
}

export default extractMention;
