export declare type TokenKind = 'space' | 'word' | 'punct' | 'nl' | 'spec';
export declare class Token {
    kind: TokenKind;
    tkn: string;
    constructor(kind: TokenKind, tkn: string);
    getDisplayText: () => string;
}
export declare type Tokens = Token[];
export declare function tokenize(text: string): Tokens;
