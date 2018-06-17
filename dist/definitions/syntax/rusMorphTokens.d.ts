import { IToken, TokenType } from "chevrotain";
import { AnyWord } from "../morphology/morphology";
export interface IMorphToken extends IToken {
    word: AnyWord;
}
export interface ITokenTypes {
    [name: string]: TokenType;
}
export declare const morphTokens: ITokenTypes;
