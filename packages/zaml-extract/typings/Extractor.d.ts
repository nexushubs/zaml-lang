import { EntityInfo, ExtractorType, ExtractorConstructorOptions, ExtractorOptions, ExtractorInterface } from './types';
/**
 * Extractor class
 */
declare class Extractor implements ExtractorInterface {
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
     * @param text
     * @param extractor
     */
    execSingleExtractor(text: string, extractor: ExtractorType): Promise<EntityInfo[]>;
    execSingleExtractor(list: string[], extractor: ExtractorType): Promise<EntityInfo[][]>;
    /**
     * Extract all entities from text by plugins
     * @param list
     * @returns
     */
    extract(text: string): Promise<EntityInfo[]>;
    extract(list: string[]): Promise<EntityInfo[][]>;
    extractArray(list: string[]): Promise<EntityInfo[][]>;
}
export default Extractor;
