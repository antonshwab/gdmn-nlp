import { PronounLexeme, Pronoun, Words, Word } from './morphology';
import { RusCase, RusPronounData } from './types';
export declare class RusPronounLexeme extends PronounLexeme {
    data: RusPronounData;
    constructor(data: RusPronounData);
    analyze(word: string, result: (w: Word) => void): void;
    getWordForm(c: RusCase): Word;
    getWordForms(): Words;
}
export declare const RusPronounLexemes: RusPronounLexeme[];
export declare class RusPronoun extends Pronoun {
    readonly grammCase: RusCase;
    constructor(word: string, lexeme: RusPronounLexeme, grammCase: RusCase);
    getDisplayText(): string;
    getSignature(): string;
}
