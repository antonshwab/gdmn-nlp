import { Word, Verb } from '../morphology/morphology';
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
}
export declare class ANP extends NP {
}
export declare class PP extends NP {
}
