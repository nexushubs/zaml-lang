export default class ParseError extends Error {
    message: string;
    text: string;
    pos: number;
    constructor(message: string, text: string, pos: number);
}
