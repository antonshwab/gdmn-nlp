import { Lexer, IToken } from 'chevrotain';
export declare const WhiteSpace: import("../../../../../../Golden/NS/lib/gdmn-nlp/node_modules/chevrotain").TokenType;
export declare const LineBreak: import("../../../../../../Golden/NS/lib/gdmn-nlp/node_modules/chevrotain").TokenType;
export declare const PunctuationMark: import("../../../../../../Golden/NS/lib/gdmn-nlp/node_modules/chevrotain").TokenType;
export declare const CyrillicWord: import("../../../../../../Golden/NS/lib/gdmn-nlp/node_modules/chevrotain").TokenType;
export declare const Other: import("../../../../../../Golden/NS/lib/gdmn-nlp/node_modules/chevrotain").TokenType;
export declare const tokenizer: Lexer;
export declare function tokenize(text: string): IToken[];
