import { PrepositionLexeme, Preposition, Word } from './morphology';
import { PrepositionType } from './types';
export declare const rusPrepositions: {
    prepositionType: PrepositionType;
    words: string[];
}[];
export declare class RusPrepositionLexeme extends PrepositionLexeme {
    readonly prepositionType: PrepositionType;
    constructor(preposition: string, prepositionType: PrepositionType);
    analyze(word: string, result: (w: Word<RusPrepositionLexeme>) => void): void;
    getWordForm(): RusPreposition;
    getWordForms(): RusPreposition[];
}
export declare const RusPrepositionLexemes: RusPrepositionLexeme[];
export declare class RusPreposition extends Preposition<RusPrepositionLexeme> {
    getDisplayText(): string;
    getSignature(): string;
}
