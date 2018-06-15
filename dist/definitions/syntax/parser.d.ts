import { ParsedText, Phrase, RusVerb, RusNoun } from '..';
import { RusAdjective } from '../morphology/rusAdjective';
import { RusPreposition } from '../morphology/rusPreposition';
export declare type ParsedText = {
    readonly wordsSignatures: string[];
    readonly phrase?: Phrase<RusVerb, RusNoun, RusAdjective, RusPreposition>;
};
export declare function parsePhrase(text: string): ParsedText;
