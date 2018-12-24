import { SourcePosition } from "./TextStream";
export default class ParseError extends Error {
    message: string;
    text: string;
    from: SourcePosition;
    to: SourcePosition;
    constructor(message: string, text: string, from: SourcePosition, to: SourcePosition);
}
