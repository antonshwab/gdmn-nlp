import { SetParsedText, Phrase } from '..';
export declare type SetParsedText = {
    readonly parsedText: string[];
    readonly phrase?: Phrase;
};
export declare function parsePhrase(text: string): SetParsedText;
