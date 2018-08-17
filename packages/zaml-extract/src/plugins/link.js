import createLinkify from 'linkify-it';

const linkify = createLinkify();
const P_EMAIL = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

function extractLink(text) {
  const tokens = linkify.match(text);
  if (!tokens) {
    return [];
  }
  const items = tokens.map(token => ({
    start: token.index,
    end: token.lastIndex,
    type: P_EMAIL.test(token.text) ? 'EMAIL' : 'LINK',
    text: token.text,
    data: {
      url: token.url,
    },
  }));
  return Promise.resolve(items);
}

export default extractLink;
