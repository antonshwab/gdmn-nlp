import { Verb, Preposition, Noun, Adjective } from '../morphology/morphology';
export declare class Sentence {
}
export declare type PhraseItem<V extends Verb, N extends Noun, A extends Adjective, P extends Preposition> = V | N | A | P | Phrase<V, N, A, P>;
export declare class Phrase<V extends Verb, N extends Noun, A extends Adjective, P extends Preposition> {
    items: PhraseItem<V, N, A, P>[];
    readonly id: number;
    constructor(items: PhraseItem<V, N, A, P>[]);
    getText(): string;
    simplify(): void;
}
export declare class VP<V extends Verb, N extends Noun, A extends Adjective, P extends Preposition> extends Phrase<V, N, A, P> {
}
export declare class ImperativeVP<V extends Verb, N extends Noun, A extends Adjective, P extends Preposition> extends VP<V, N, A, P> {
    constructor(imperativeVerb: V, imperativeNP?: NP<V, N, A, P>);
    readonly imperativeVerb: V;
    readonly imperativeNP: NP<V, N, A, P> | undefined;
}
export declare class NP<V extends Verb, N extends Noun, A extends Adjective, P extends Preposition> extends Phrase<V, N, A, P> {
    constructor(n: N | ANP<V, N, A, P>, pp?: PP<V, N, A, P>);
    readonly noun: N | ANP<V, N, A, P>;
    readonly pp: PP<V, N, A, P> | undefined;
}
export declare class ANP<V extends Verb, N extends Noun, A extends Adjective, P extends Preposition> extends Phrase<V, N, A, P> {
    constructor(adjf: A, noun: N);
    readonly adjf: A;
    readonly noun: N;
}
export declare class PP<V extends Verb, N extends Noun, A extends Adjective, P extends Preposition> extends Phrase<V, N, A, P> {
    constructor(prep: P, noun: N);
    readonly prep: P;
    readonly noun: N;
}
