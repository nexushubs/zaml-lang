import Extractor from './Extractor';
import { ExtractorConstructorOptions } from './types';
declare const extract: {
    /**
     * Extract entities from a text
     * @param text Source string
     */
    extract(text: string | string[], options: ExtractorConstructorOptions): Promise<import("./types").EntityInfo[] | import("./types").EntityInfo[][]>;
    /**
     *
     * @param {any} options
     */
    create(options: ExtractorConstructorOptions): Extractor;
    Extractor: typeof Extractor;
};
export { Extractor, };
export default extract;
