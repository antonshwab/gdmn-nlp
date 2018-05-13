export declare type TokenKind = 'space' | 'word' | 'punct' | 'nl' | 'spec';
export declare class Token {
    readonly kind: TokenKind;
    readonly tkn: string;
    readonly startOffset: number;
    constructor(kind: TokenKind, tkn: string, startOffset: number);
    getDisplayText: () => string;
}
export declare type Tokens = Token[];
export declare function tokenize(text: string): Tokens;
