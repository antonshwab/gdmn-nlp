import { Lexer, IToken, TokenType } from 'chevrotain';
export declare const WhiteSpace: TokenType;
export declare const LineBreak: TokenType;
export declare const PunctuationMark: TokenType;
export declare const CyrillicWord: TokenType;
export declare const Other: TokenType;
export declare const tokenizer: Lexer;
export declare function tokenize(text: string): IToken[];
