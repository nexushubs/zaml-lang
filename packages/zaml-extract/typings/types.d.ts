export interface EntityInfo {
    start: number;
    end: number;
    text: string;
    type: string;
    data: {
        [key: string]: any;
    };
}
export declare type SingleExtractor = (text: string) => EntityInfo[] | Promise<EntityInfo[]>;
export declare type ArrayExtractor = (textArr: string[]) => EntityInfo[][] | Promise<EntityInfo[][]>;
export interface ExtractorInterface {
    extract: SingleExtractor;
    extractArray: ArrayExtractor;
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
