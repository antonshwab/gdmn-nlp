import { ParsedText, Phrase, AnyWord } from '..';
export declare type ParsedText = {
    readonly wordsSignatures: string[];
    readonly phrase?: Phrase<AnyWord>;
};
export declare function parsePhrase(text: string): ParsedText;
