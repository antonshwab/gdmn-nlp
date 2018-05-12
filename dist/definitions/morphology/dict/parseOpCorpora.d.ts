/** Parse word from open corpora dictionary and returns morphological signs */
import { RusAspect, Transitivity, RusTense, RusGender, RusMood, Involvement, PartOfSpeech, RusPersons } from '../types';
export interface ParsedWord {
    word: string;
    pos: PartOfSpeech | undefined;
    aspect: RusAspect | undefined;
    transitivity: Transitivity | undefined;
    tense: RusTense | undefined;
    singular: boolean | undefined;
    gender: RusGender | undefined;
    person: RusPersons | undefined;
    mood: RusMood | undefined;
    involvement: Involvement | undefined;
}
export declare function parseWord(line: string): ParsedWord;
