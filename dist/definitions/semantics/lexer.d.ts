import { IToken, TokenType } from 'chevrotain';
import { Word } from '../morphology/morphology';
export interface IMorphToken extends IToken {
    word: Word;
}
export interface ITokenTypes {
    [name: string]: TokenType;
}
export declare function scan(text: string): {
    tokenTypes: TokenType[];
    tokens: IMorphToken[][];
};
