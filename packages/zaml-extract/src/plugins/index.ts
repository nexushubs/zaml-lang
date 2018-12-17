import extractLink from './link';
import extractMention from './mention';
import RestExtractor from './rest';

export default {
  link: extractLink,
  mention: extractMention,
  rest: RestExtractor,
};
