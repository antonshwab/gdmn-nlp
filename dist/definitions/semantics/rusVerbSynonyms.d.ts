import { SemContext } from "./types";
import { RusVerbLexeme, RusVerb } from "..";
export interface IRusVerbSynonyms {
    semContext: SemContext;
    chains: RusVerbLexeme[][];
}
export declare function hasMeaning(semContext: SemContext, meaning: string, word: RusVerb): boolean;
