import { Lexer, TokenType, IToken } from 'chevrotain';
export declare const WhiteSpace: TokenType;
export declare const LineBreak: TokenType;
export declare const PunctuationMark: TokenType;
export declare const RusWord: TokenType;
export declare const Other: TokenType;
export declare const tokenizer: Lexer;
export declare function tokenize(text: string): IToken[];
