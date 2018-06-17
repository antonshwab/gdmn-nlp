import { RusDeclensionAdjectiveZ, RusAdjectiveCategory, RusAdjectiveMorphSigns, RusGender, RusCase } from './types';
import { AdjectiveLexeme, Adjective } from './morphology';
import { RusNounLexeme } from './rusNoun';
export declare class RusAdjectiveLexeme extends AdjectiveLexeme {
    readonly category: RusAdjectiveCategory;
    readonly declensionZ: RusDeclensionAdjectiveZ;
    constructor(stem: string, stem1: string, stem2: string, category: RusAdjectiveCategory, declensionZ: RusDeclensionAdjectiveZ);
    hasShortForm(): boolean;
    getWordForm(morphSigns: RusAdjectiveMorphSigns): RusAdjective;
    getWordForms(): RusAdjective[];
    getNounLexeme(): RusNounLexeme | undefined;
}
export declare const RusAdjectiveLexemes: RusAdjectiveLexeme[];
export declare class RusAdjective extends Adjective<RusAdjectiveLexeme> {
    readonly singular: boolean;
    readonly gender: RusGender | undefined;
    readonly grammCase: RusCase | undefined;
    readonly animate: boolean | undefined;
    readonly short: boolean | undefined;
    constructor(word: string, lexeme: RusAdjectiveLexeme, morphSigns: RusAdjectiveMorphSigns);
    getDisplayText(): string;
    static getSignature(short: boolean | undefined, category: RusAdjectiveCategory, gender: RusGender | undefined, singular: boolean, grammCase: RusCase | undefined): string;
    getSignature(): string;
}
