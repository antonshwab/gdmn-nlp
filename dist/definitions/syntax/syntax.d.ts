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
export declare class ImperativeVP extends VP {
    constructor(imperativeVerb: Verb, imperativeNP?: NP);
    readonly imperativeVerb: Verb;
    readonly imperativeNP: NP | undefined;
}
export declare class NP extends Phrase {
    constructor(n: Noun | ANP, pp?: PP);
    readonly noun: Noun | ANP;
    readonly pp: PP | undefined;
}
export declare class ANP extends Phrase {
    constructor(adjf: Adjective, noun: Noun);
    readonly adjf: Adjective;
    readonly noun: Noun;
}
export declare class PP extends Phrase {
    constructor(prep: Preposition, noun: Noun);
    readonly prep: Preposition;
    readonly noun: Noun;
}
