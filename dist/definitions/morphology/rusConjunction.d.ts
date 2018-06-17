import { ConjunctionLexeme, Conjunction } from './morphology';
export declare class RusConjunctionLexeme extends ConjunctionLexeme {
    analyze(word: string, result: (w: RusConjunction) => void): void;
    getWordForm(): RusConjunction;
    getWordForms(): RusConjunction[];
}
export declare const RusConjunctionLexemes: RusConjunctionLexeme[];
export declare class RusConjunction extends Conjunction<RusConjunctionLexeme> {
    getDisplayText(): string;
    getSignature(): string;
}
