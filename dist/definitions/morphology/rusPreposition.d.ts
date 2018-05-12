import { PrepositionLexeme, Preposition, Word, Words } from './morphology';
import { PrepositionType } from './types';
export declare const rusPrepositions: {
    prepositionType: PrepositionType;
    words: string[];
}[];
export declare class RusPrepositionLexeme extends PrepositionLexeme {
    readonly prepositionType: PrepositionType;
    constructor(preposition: string, prepositionType: PrepositionType);
    analyze(word: string, result: (w: Word) => void): void;
    getWordForm(): Word;
    getWordForms(): Words;
}
export declare const RusPrepositionLexemes: RusPrepositionLexeme[];
export declare class RusPreposition extends Preposition {
    getDisplayText(): string;
    getSignature(): string;
}
