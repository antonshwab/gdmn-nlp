import { IToken, TokenType } from "chevrotain";
import { Word } from "../morphology/morphology";
export interface IMorphToken extends IToken {
    word: Word;
}
export interface ITokenTypes {
    [name: string]: TokenType;
}
export declare const morphTokens: ITokenTypes;
