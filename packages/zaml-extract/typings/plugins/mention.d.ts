import { EntityInfo } from '../types';
export declare const STOP_CHARS = "\n ~`!#$%^&*()-=_+[]\\{}|;':\",./<>?\u3002\uFF1F\uFF01\uFF0C\u3001\uFF1B\uFF1A\u201C\u201D\u2018\uFF08\uFF09\u300A\u300B\u3008\u3009\u3010\u3011\u300E\u300F\u300C\u300D\uFE43\uFE44\u3014\u3015\u2026\u2014\uFF5E\uFE4F\uFFE5";
export declare const MENTION_CHARS = "@\uFF20";
export declare const P_MENTION: RegExp;
export interface ExtractMentionOptions {
    users?: string[];
    pattern?: RegExp;
}
/**
 * Parse mentioned usernames from text
 * @param text text to be parsed
 * @param [options]
 */
declare function extractMention(text: string, options?: ExtractMentionOptions): EntityInfo[];
export default extractMention;
