import ExtractorBase from './base';
import { ExtractorInterface, EntityInfo } from '../types';
export interface RestExtractorOptions {
    url?: string;
}
export interface EntityResult {
    text?: string;
    entities: EntityInfo[];
}
export interface SinglePredictionResult {
    predictions: PredictionResult;
}
export interface ArrayPredictionResult {
    predictions: PredictionResult;
}
export declare type PredictionResult = SinglePredictionResult | ArrayPredictionResult;
declare class RestExtractor extends ExtractorBase implements ExtractorInterface {
    constructor(options?: RestExtractorOptions);
    request(list: string | string[]): Promise<PredictionResult>;
    extract(text: string): Promise<EntityInfo[]>;
    extractArray(list: string[]): Promise<EntityInfo[][]>;
}
export default RestExtractor;
