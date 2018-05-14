import { Phrase } from './semantics';
export declare type SetParsedText = {
    readonly parsedText: string[];
    readonly phrase?: Phrase;
};
export declare function parseSemantics(text: string): SetParsedText;
