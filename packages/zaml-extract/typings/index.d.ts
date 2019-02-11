import Extractor from './Extractor';
import { ExtractorConstructorOptions, EntityInfo } from './types';
declare function extract(text: string, options: ExtractorConstructorOptions): Promise<EntityInfo[]>;
declare function extract(list: string[], options: ExtractorConstructorOptions): Promise<EntityInfo[][]>;
declare const extractObject: {
    /**
     * Extract entities from a text
     * @param text Source string
     */
    extract: typeof extract;
    /**
     * @param options
     */
    create(options: ExtractorConstructorOptions): Extractor;
    Extractor: typeof Extractor;
};
export { Extractor, };
export default extractObject;
