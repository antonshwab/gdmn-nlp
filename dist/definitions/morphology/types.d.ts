export declare type PartOfSpeech = 'VERB';
export declare type RusPersons = 1 | 2 | 3;
export declare enum RusGender {
    Masc = 0,
    Femn = 1,
    Neut = 2
}
export declare const RusGenderNames: string[];
export declare const ShortGenderNames: string[];
export declare type RusDeclension = 1 | 2 | 3;
export declare enum RusCase {
    Nomn = 0,
    Gent = 1,
    Datv = 2,
    Accs = 3,
    Ablt = 4,
    Loct = 5
}
export declare const RusCaseNames: string[];
export declare const ShortCaseNames: string[];
export declare type RusDeclensionZ = '1a' | '2a' | '3a' | '4a' | '5a' | '6a' | '7a' | '1b' | '2b' | '3b' | '4b' | '5b' | '6b' | '7b' | '1c' | '3c' | '4c' | '6c' | '7c' | '1d^' | '3d' | '1e' | '2e' | '3e' | '4e' | '2f' | '1*a' | '1*b' | '1*e' | '2*a' | '2*b' | '2*e' | '3*a' | '3*b' | '5*a' | '5*b' | '6*a' | '6*b' | '1°a' | '1°c(1)' | '3°a' | '3°b' | '1a(2)' | '1c(1)' | '1c(2)' | '1c(1)(2)' | '3c(1)' | '1e(2)' | '3b(2)' | '5a(2)' | '3*a(2)' | '3*b(2)' | '3*d(2)' | '1d' | '2d' | '4d' | '6d' | '1d\'' | '3d\'' | '4d\'' | '1f' | '3f' | '4f' | '1f\'' | '3f\'' | '8a' | '8e' | '8a-ш' | '8e-ш' | '8f"' | '1*d' | '1*f' | '2*a-ня' | '2*d' | '3*d' | '3*f' | '3*f\'' | '8*b\'' | '8*b\'ш' | '7b(2)' | '7b^' | '2c' | '5d' | '3e^' | '1*c^' | '5*c' | '5*d' | '5*f' | '6*d' | '8°a' | '8°c' | '3a(1)' | '3d(1)' | '4f(1)' | '3*a(1)' | '3c(2)' | '3*c(2)' | '5*a(2)' | '6*a(2)' | '6*d(2)' | '3a(1)(2)' | '3*a(1)(2)' | '3*b(1)(2)';
export declare type RusDeclensionZEnding = {
    animate: boolean;
    gender: RusGender;
    declensionZ: RusDeclensionZ;
    singular: string[];
    plural: string[];
};
export interface RusNounInterface {
    readonly stem: string;
    readonly stem1: string;
    readonly stem2: string;
    readonly animate: boolean;
    readonly gender: RusGender;
    readonly declension: RusDeclension;
    readonly declensionZ: RusDeclensionZ;
}
export interface RusNounMorphSigns {
    c: RusCase;
    singular: boolean;
}
export declare enum RusAspect {
    Perf = 0,
    Impf = 1
}
export declare enum Transitivity {
    Tran = 0,
    Intr = 1
}
/**
 * Наклонение глагола.
 */
export declare enum RusMood {
    Indc = 0,
    Cond = 1,
    Impr = 2
}
export declare const ShortMoodNames: string[];
export declare enum RusTense {
    Past = 0,
    Pres = 1,
    Futr = 2
}
export declare const ShortTenseNames: string[];
export declare enum Involvement {
    Incl = 0,
    Excl = 1
}
export declare type RusConjugationZ = '1a' | '1aСВ' | '1a-ся' | '1a-сяСВ' | '2a' | '2b' | '3a(2)СВ' | '3a-гСВ' | '3b' | '3bСВ' | '3b-еСВ' | '3b-сяСВ' | '3c' | '3cСВ' | '3c-ся' | '3°a' | '3°aСВ' | '3°a((5)(6))-г' | '4a' | '4a-б' | '4a-б-с' | '4a-б-сСВ' | '4a-л' | '4a-лСВ' | '4a-л-ся' | '4a-cc' | '4a-с-л-сяСВ' | '4a-т' | '4a-тСВ' | '4a-тX' | '4a-ш' | '4a-ш-с' | '4a((3))-тСВ' | '4a((3))-ш' | '4a((3))-шСВ' | '4b' | '4b-ш' | '4b-б' | '4b-т' | '4b-сяСВ' | '4c' | '4c(4)' | '4c(4)-б' | '4c-ш' | '4c-ш-сяСВ' | '4c-б' | '4c-бСВ' | '4c-т' | '4c-т-ся' | '4c-тСВ' | '4c-сяСВ' | '5a-д-ся' | '5a-т' | '5a-ш' | '5b' | '5b-ш' | '5b-ш-ся' | '5b-ж' | '5b-т' | '5b-т-ся' | '5b-тСВ' | '5b-т-сяСВ' | '5b-ся' | '5b/c' | '5b/c"-ся' | '5c' | '5c-е' | '5c-т' | '5c/c' | '6a' | '6a-н' | '6a-б' | '6a^' | '6a-т' | '6a-т-иСВ' | '6b' | '6b-ся' | '6b-ш' | '6b^' | '6°b' | '6c' | '6cСВ' | '6c-сяСВ' | '6cX' | '7a(9)-дСВ' | '9aСВ' | '9b' | '9bСВ' | '9b-ся' | '9*bСВ' | '10c' | '10c-ся' | '11b' | '11bСВ' | '11*b/c"-сяСВ' | '12a' | '12a-ы' | '12b' | '12bСВ' | '12b/c' | '13b' | '13b-ся' | '14b' | '14b-ся' | '14bСВ' | '14b-сяСВ' | '14*bСВ' | '14*b-сяСВ' | '14b/cСВ' | '14cСВ' | '14c(1)СВ' | '14c/c"-сяСВ' | '15aСВ' | '15a-сяСВ' | '16b/c' | '^a-бытьСВ' | '^a-ех' | '^a-ехСВ' | '^b' | '^b/b(9)' | '^b/b(9)СВ' | '^b/cСВ';
export interface RusVerbInterface {
    readonly stem: string;
    readonly stem1: string;
    readonly stem2: string;
    readonly aspect: RusAspect;
    readonly transitivity: Transitivity;
    readonly conjZ: RusConjugationZ;
}
export declare type RusVerbEnding = {
    ending: string;
    tense?: RusTense;
    singular: boolean;
    gender?: RusGender;
    person?: RusPersons;
    mood: RusMood;
    involvement?: Involvement;
};
export declare type RusConjugationZEnding = {
    conjZ: RusConjugationZ;
    aspect: RusAspect;
    transitivity: Transitivity;
    suffix: 'нуть' | 'сть' | 'сти' | 'дти' | 'ать' | 'ить' | 'уть' | 'еть' | 'ыть' | 'ять' | 'оть' | 'ть' | 'чь' | 'ти';
    endings: RusVerbEnding[];
};
export interface RusVerbMorphSigns {
    infn?: boolean;
    tense?: RusTense;
    singular?: boolean;
    person?: RusPersons;
    gender?: RusGender;
    mood?: RusMood;
    involvement?: Involvement;
}
export declare type RusDeclensionAdjectiveZ = '1a' | '1a/c\'' | '1a\'' | '2a' | '3a' | '4a' | '4a-ся' | '5a' | '6a' | '1b' | '1b/c' | '3b' | '4b' | '1*a' | '1*a\'' | '1a/b' | '1a/с' | '1*a/c' | '1a/c\'' | '1*b' | '2*a' | '2*b' | '2a/c' | '3a/c' | '3*a' | '3a/c"^' | '3*a\'' | '3*a/c' | '3*a/c\'';
export declare enum RusAdjectiveCategory {
    Qual = 0,
    Poss = 1,
    Rel = 2,
    Pron = 3
}
export declare const RusAdjectiveCategoryNames: string[];
export declare const ShortAdjectiveCategoryNames: string[];
export interface RusAdjectiveInterface {
    readonly stem: string;
    readonly stem1: string;
    readonly stem2: string;
    readonly category: RusAdjectiveCategory;
    readonly declensionZ: RusDeclensionAdjectiveZ;
}
export declare type RusAdjectiveEnding = {
    ending: string;
    c: RusCase;
    singular: boolean;
    gender?: RusGender;
    animate?: boolean;
};
export declare type RusDeclensionAdjectiveZEnding = {
    declensionZ: RusDeclensionAdjectiveZ;
    endings: RusAdjectiveEnding[];
};
export interface RusAdjectiveMorphSigns {
    c?: RusCase;
    singular: boolean;
    gender?: RusGender;
    animate?: boolean;
    short?: boolean;
}
export declare enum PrepositionType {
    Place = 0,
    Time = 1,
    Reason = 2,
    Goal = 3,
    Comparative = 4,
    Object = 5
}
export declare const RusPrepositionTypeNames: string[];
export declare const ShortPrepositionTypeNames: string[];
export declare enum PronounType {
    Personal = 0,
    Reflexive = 1,
    Possesive = 2,
    Demonstrative = 3,
    Interrogative = 4,
    Relative = 5,
    Definitive = 6,
    Negative = 7,
    Vague = 8
}
export declare const RusPronounTypeNames: string[];
export declare const ShortPronounTypeNames: string[];
export declare type RusPronounData = {
    pronounType: PronounType;
    person?: RusPersons;
    singular?: boolean;
    gender?: RusGender;
    noNomn?: boolean;
    words: string[];
};
