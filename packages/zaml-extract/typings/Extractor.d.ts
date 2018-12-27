import { EntityInfo, ExtractorType, ExtractorConstructorOptions, ExtractorOptions } from './types';
/**
 * Extractor class
 */
declare class Extractor {
    plugins: ExtractorType[];
    /**
     *
     */
    constructor(options?: ExtractorConstructorOptions);
    /**
     * Add plugin
     * @param options
     */
    addPlugin(options: ExtractorOptions): void;
    /**
     * Execute single plugin to the text (array)
     * @param {} text
     * @param {} extractor
     */
    execSingleExtractor(text: string | string[], extractor: ExtractorType): Promise<any>;
    /**
     * Extract all entities from text by plugins
     * @param list
     * @returns
     */
    extract(text: string | string[]): Promise<EntityInfo[] | EntityInfo[][]>;
}
export default Extractor;
