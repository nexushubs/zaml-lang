export interface EntityInfo {
    type: string;
    start: number;
    end: number;
    text?: string;
    data?: any;
}
export declare type SingleExtractor = (text: string) => EntityInfo[];
export declare type AsyncSingleExtractor = (text: string) => Promise<EntityInfo[]>;
export declare type ArrayExtractor = (textArr: string[]) => EntityInfo[][];
export declare type AsyncArrayExtractor = (textArr: string[]) => Promise<EntityInfo[][]>;
export interface ExtractorInterface {
    extract: AsyncSingleExtractor;
    extractArray?: AsyncArrayExtractor;
}
export declare type ExtractorType = SingleExtractor | ExtractorInterface;
export declare type ExtendedExtractorOptions = {
    name: string;
    options: any;
};
export declare type ExtractorOptions = string | ExtendedExtractorOptions | ExtractorType;
export declare type ExtractorConstructorOptions = {
    plugins?: ExtractorOptions[];
};
