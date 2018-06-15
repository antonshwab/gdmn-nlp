import { Word, Verb, Preposition, Noun, Adjective } from '../morphology/morphology';
export declare class Sentence {
}
export declare type PhraseItem = Word | Phrase;
export declare class Phrase {
    items: PhraseItem[];
    readonly id: number;
    constructor(items: PhraseItem[]);
    getText(): string;
    simplify(): void;
}
export declare class VP extends Phrase {
}
export declare class ImperativeVP<V extends Verb, N extends Noun, A extends Adjective, P extends Preposition> extends VP {
    constructor(imperativeVerb: V, imperativeNP?: NP<N, A, P>);
    readonly imperativeVerb: V;
    readonly imperativeNP: NP<N, A, P> | undefined;
}
export declare class NP<N extends Noun, A extends Adjective, P extends Preposition> extends Phrase {
    constructor(n: N | ANP<A, N>, pp?: PP<P, N>);
    readonly noun: N | ANP<A, N>;
    readonly pp: PP<P, N> | undefined;
}
export declare class ANP<A extends Adjective, N extends Noun> extends Phrase {
    constructor(adjf: A, noun: N);
    readonly adjf: A;
    readonly noun: N;
}
export declare class PP<P extends Preposition, N extends Noun> extends Phrase {
    constructor(prep: P, noun: N);
    readonly prep: P;
    readonly noun: N;
}
