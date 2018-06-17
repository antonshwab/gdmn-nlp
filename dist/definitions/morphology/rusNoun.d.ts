import { RusGender, RusDeclension, RusDeclensionZ, RusCase, RusNounMorphSigns } from './types';
import { NounLexeme, Noun } from './morphology';
import { SemCategory } from '../semantics/categories';
export declare class RusNounLexeme extends NounLexeme {
    readonly animate: boolean;
    readonly gender: RusGender;
    readonly declension: RusDeclension;
    readonly declensionZ: RusDeclensionZ;
    constructor(stem: string, stem1: string, stem2: string, semCategories: SemCategory[], animacy: boolean, gender: RusGender, declension: RusDeclension, declensionZ: RusDeclensionZ);
    getWordForm(morphSigns: RusNounMorphSigns): RusNoun;
    hasPlural(): boolean;
    getWordForms(): RusNoun[];
}
export declare const RusNounLexemes: RusNounLexeme[];
export declare class RusNoun extends Noun<RusNounLexeme> {
    readonly grammCase: RusCase;
    readonly singular: boolean;
    constructor(word: string, lexeme: RusNounLexeme, grammCase: RusCase, singular: boolean);
    getDisplayText(): string;
    static getSignature(animate: boolean, gender: RusGender, singular: boolean, grammCase: RusCase): string;
    getSignature(): string;
}
