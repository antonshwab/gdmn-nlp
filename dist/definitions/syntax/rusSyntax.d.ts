import { RusVerb } from '../morphology/rusVerb';
import { RusNoun } from '../morphology/rusNoun';
import { RusAdjective } from '../morphology/rusAdjective';
import { RusPreposition } from '../morphology/rusPreposition';
import { RusWord } from '../morphology/rusMorphology';
import { Phrase } from './syntax';
export declare class RusPhrase extends Phrase<RusWord> {
}
export declare class RusVP extends RusPhrase {
}
export declare class RusImperativeVP extends RusVP {
    constructor(imperativeVerb: RusVerb, imperativeNP?: RusNP);
    readonly imperativeVerb: RusVerb;
    readonly imperativeNP: RusNP | undefined;
}
export declare class RusNP extends RusPhrase {
    constructor(n: RusNoun | RusANP, pp?: RusPP);
    readonly noun: RusNoun | RusANP;
    readonly pp: RusPP | undefined;
}
export declare class RusANP extends RusPhrase {
    constructor(adjf: RusAdjective, noun: RusNoun);
    readonly adjf: RusAdjective;
    readonly noun: RusNoun;
}
export declare class RusPP extends RusPhrase {
    constructor(prep: RusPreposition, noun: RusNoun);
    readonly prep: RusPreposition;
    readonly noun: RusNoun;
}
