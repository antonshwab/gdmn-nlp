import { ParsedText, Phrase } from '..';
export declare type ParsedText = {
    readonly wordsSignatures: string[];
    readonly phrase?: Phrase;
};
export declare function parsePhrase(text: string): ParsedText;
