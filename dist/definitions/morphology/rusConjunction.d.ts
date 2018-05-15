import { ConjunctionLexeme, Conjunction, Words, Word } from './morphology';
export declare class RusConjunctionLexeme extends ConjunctionLexeme {
    analyze(word: string, result: (w: Word) => void): void;
    getWordForm(): Word;
    getWordForms(): Words;
}
export declare const RusConjunctionLexemes: RusConjunctionLexeme[];
export declare class RusConjunction extends Conjunction {
    getDisplayText(): string;
    getSignature(): string;
}
