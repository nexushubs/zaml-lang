import CodeMirror from 'codemirror';
import 'codemirror/addon/mode/simple';

// https://codemirror.net/demo/simplemode.html
// TODO support error linting

(CodeMirror as any).defineSimpleMode("zaml", {
  // The start state contains the rules that are initially used
  start: [
    // Block labels
    {regex: /#[^#\s\n}]+/, token: 'variable-3'},
    // Entity tag & block tag without attributes
    {regex: /{\/?([^\s}]+)}/, token: 'keyword'},
    // attribute names
    {regex: /[^\s{\n]+(?=[:：=][^\n])/, token: 'variable-2'},
    // Block brackets
    {regex: /{|}/, token: 'def'},
    // Block starting tag
    {regex: /(?={)[^\s}]+/, token: 'keyword'},
    // Entity text content
    {regex: /\[[^\]]+\]/, token: "string"},
    // Block tag
    {regex: /(?:BLOCK|INLINE)\b/, token: "keyword"},
    // Special values
    {regex: /true|false|null|undefined/, token: "atom"},
    // Numbers
    {regex: /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i, token: "number"},
    // Single line comment
    {regex: /~[^~].*/, token: "comment"},
    // Multi-line comment start
    {regex: /~~~/, token: "comment", next: "comment"},
    // ?
    {regex: /\/(?:[^\\]|\\.)*?\//, token: "variable-3"},
    // Intends
    {regex: /[{]/, indent: true},
    {regex: /[}]/, dedent: true},
    // {regex: /[a-z$][\w$]*/, token: "variable"},
    // {regex: /<</, token: "meta", mode: {spec: "xml", end: />>/}}
  ],
  // The multi-line comment state.
  comment: [
    // Multi-line comment ends
    {regex: /.*?~~~/, token: "comment", next: "start"},
    // Multi-line comment continues
    {regex: /.*/, token: "comment"}
  ],
  // The meta property contains global information about the mode. It
  // can contain properties like lineComment, which are supported by
  // all modes, and also directives like dontIndentStates, which are
  // specific to simple modes.
  meta: {
    dontIndentStates: ["comment"],
    lineComment: "~"
  }
});
