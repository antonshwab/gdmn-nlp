import { RusAspect, Transitivity, RusConjugationZ, RusTense, RusGender, RusPersons, RusMood, Involvement, RusVerbMorphSigns, RusConjugationZEnding } from './types';
import { VerbLexeme, Verb } from './morphology';
export declare class RusVerbLexeme extends VerbLexeme {
    readonly aspect: RusAspect;
    readonly transitivity: Transitivity;
    readonly conjZ: RusConjugationZ;
    readonly conjZEnding: RusConjugationZEnding | undefined;
    constructor(stem: string, stem1: string, stem2: string, aspect: RusAspect, transitivity: Transitivity, conjZ: RusConjugationZ);
    hasImprMood(): boolean;
    getWordForm(morphSigns: RusVerbMorphSigns): RusVerb;
    getWordForms(): RusVerb[];
}
export declare const RusVerbLexemes: RusVerbLexeme[];
export declare class RusVerb extends Verb<RusVerbLexeme> {
    readonly infn: boolean;
    readonly tense: RusTense | undefined;
    readonly singular: boolean | undefined;
    readonly gender: RusGender | undefined;
    readonly person: RusPersons | undefined;
    readonly mood: RusMood | undefined;
    readonly involvement: Involvement | undefined;
    constructor(word: string, lexeme: RusVerbLexeme, morphSigns: RusVerbMorphSigns);
    getDisplayText(): string;
    getSignature(): string;
}
