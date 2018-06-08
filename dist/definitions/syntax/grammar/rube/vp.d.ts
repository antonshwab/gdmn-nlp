import { Parser, IToken } from "chevrotain";
/**
 * Грамматика для фразы типа "Покажи все организации из Минска"
 */
export declare class VPParser extends Parser {
    constructor(input: IToken[]);
    sentence: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    vp: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    imperativeVP: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    imperativeVerb: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    imperativeNP: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    qualImperativeNoun: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    imperativeDets: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    imperativeDet: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    imperativeNoun: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    nounAccs: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    pp: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    prep: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    ppNoun: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
    nounGent: (idxInCallingRule?: number | undefined, ...args: any[]) => any;
}
