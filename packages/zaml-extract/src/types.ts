export interface EntityInfo {
  type: string;
  start: number;
  end: number;
  text?: string;
  data: {[key: string]: any};
}

export type SingleExtractor = (text: string) => EntityInfo[];

export type AsyncSingleExtractor = (text: string) => Promise<EntityInfo[]>;

export type ArrayExtractor = (textArr: string[]) => EntityInfo[][];

export type AsyncArrayExtractor = (textArr: string[]) => Promise<EntityInfo[][]>;

export interface ExtractorInterface {
  extract: AsyncSingleExtractor;
  extractArray?: AsyncArrayExtractor;
}

export type ExtractorType = SingleExtractor | ExtractorInterface;

export type ExtendedExtractorOptions = { name:string, options:any };

export type ExtractorOptions = string | ExtendedExtractorOptions | ExtractorType;

export type ExtractorConstructorOptions = {
  plugins?: ExtractorOptions[];
}
