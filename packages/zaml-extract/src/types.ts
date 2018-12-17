export interface EntityInfo {
  start: number;
  end: number;
  text: string;
  type: string;
  data: {[key: string]: any};
}

export type SingleExtractor = (text: string) => EntityInfo[] | Promise<EntityInfo[]>;

export type ArrayExtractor = (textArr: string[]) => EntityInfo[][] | Promise<EntityInfo[][]>;

export interface ExtractorInterface {
  extract: SingleExtractor;
  extractArray: ArrayExtractor;
}

export type ExtractorType = SingleExtractor | ExtractorInterface;

export type ExtendedExtractorOptions = { name:string, options:any };

export type ExtractorOptions = string | ExtendedExtractorOptions | ExtractorType;

export type ExtractorConstructorOptions = {
  plugins?: ExtractorOptions[];
}
