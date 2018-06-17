import { SemCategory } from '../semantics/categories';
export declare abstract class Lexeme {
    readonly stem: string;
    readonly stem1: string;
    readonly stem2: string;
    readonly semCategories: SemCategory[];
    constructor(stem?: string, stem1?: string, stem2?: string, semCategories?: SemCategory[]);
    matchStems(word: string): boolean;
    analyze(word: string, result: (w: AnyWord) => void): void;
    abstract getWordForms(): AnyWords;
}
export declare abstract class ConjunctionLexeme extends Lexeme {
}
export declare abstract class NounLexeme extends Lexeme {
}
export declare abstract class VerbLexeme extends Lexeme {
}
export declare abstract class AdjectiveLexeme extends Lexeme {
}
export declare abstract class PrepositionLexeme extends Lexeme {
}
export declare abstract class PronounLexeme extends Lexeme {
}
export declare abstract class Word<L extends Lexeme> {
    readonly word: string;
    readonly lexeme: L;
    readonly id: number;
    constructor(word: string, lexeme: L);
    getText(): string;
    getDisplayText(): string;
    getSignature(): string;
}
export declare abstract class Conjunction<L extends ConjunctionLexeme> extends Word<L> {
}
export declare abstract class Noun<L extends NounLexeme> extends Word<L> {
}
export declare abstract class Verb<L extends VerbLexeme> extends Word<L> {
}
export declare abstract class Adjective<L extends AdjectiveLexeme> extends Word<L> {
}
export declare abstract class Preposition<L extends PrepositionLexeme> extends Word<L> {
}
export declare abstract class Pronoun<L extends PrepositionLexeme> extends Word<L> {
}
export declare type AnyWord = Word<Lexeme>;
export declare type AnyWords = AnyWord[];
