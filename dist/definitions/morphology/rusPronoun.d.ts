import { PronounLexeme, Pronoun } from './morphology';
import { RusCase, RusPronounData } from './types';
export declare class RusPronounLexeme extends PronounLexeme {
    data: RusPronounData;
    constructor(data: RusPronounData);
    analyze(word: string, result: (w: RusPronoun) => void): void;
    getWordForm(c: RusCase): RusPronoun;
    getWordForms(): RusPronoun[];
}
export declare const RusPronounLexemes: RusPronounLexeme[];
export declare class RusPronoun extends Pronoun<RusPronounLexeme> {
    readonly grammCase: RusCase;
    constructor(word: string, lexeme: RusPronounLexeme, grammCase: RusCase);
    getDisplayText(): string;
    getSignature(): string;
}
