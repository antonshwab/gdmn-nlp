import { RusGender, RusDeclension, RusDeclensionZ, RusCase, RusNounMorphSigns } from './types';
import { NounLexeme, Noun, Word, Words } from './morphology';
export declare class RusNounLexeme extends NounLexeme {
    readonly animate: boolean;
    readonly gender: RusGender;
    readonly declension: RusDeclension;
    readonly declensionZ: RusDeclensionZ;
    constructor(stem: string, stem1: string, stem2: string, animacy: boolean, gender: RusGender, declension: RusDeclension, declensionZ: RusDeclensionZ);
    getWordForm(morphSigns: RusNounMorphSigns): Word;
    hasPlural(): boolean;
    getWordForms(): Words;
}
export declare const RusNounLexemes: RusNounLexeme[];
export declare class RusNoun extends Noun {
    readonly grammCase: RusCase;
    readonly singular: boolean;
    constructor(word: string, lexeme: RusNounLexeme, grammCase: RusCase, singular: boolean);
    getDisplayText(): string;
    getSignature(): string;
}