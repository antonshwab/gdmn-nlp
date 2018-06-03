export declare class Lexeme {
    readonly stem: string;
    readonly stem1: string;
    readonly stem2: string;
    constructor(stem?: string, stem1?: string, stem2?: string);
    matchStems(word: string): boolean;
    analyze(word: string, result: (w: Word) => void): void;
    getWordForms(): Words;
}
export declare class ConjunctionLexeme extends Lexeme {
}
export declare class NounLexeme extends Lexeme {
}
export declare class VerbLexeme extends Lexeme {
}
export declare class AdjectiveLexeme extends Lexeme {
}
export declare class PrepositionLexeme extends Lexeme {
}
export declare class PronounLexeme extends Lexeme {
}
export declare class Word {
    readonly word: string;
    readonly lexeme: Lexeme;
    readonly id: number;
    constructor(word: string, lexeme: Lexeme);
    getText(): string;
    getDisplayText(): string;
    getSignature(): string;
}
export declare class Conjunction extends Word {
}
export declare class Noun extends Word {
}
export declare class Verb extends Word {
}
export declare class Adjective extends Word {
}
export declare class Preposition extends Word {
}
export declare class Pronoun extends Word {
}
export declare type Words = Word[];
