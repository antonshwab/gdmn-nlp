"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Punctuation = ['.', ',', '!', '?', ';'];
class Token {
    constructor(kind, tkn, startOffset) {
        this.getDisplayText = () => {
            return this.kind === 'space' ? this.tkn.replace(' ', String.fromCharCode(9251)) : this.tkn;
        };
        this.kind = kind;
        this.tkn = tkn;
        this.startOffset = startOffset;
    }
}
exports.Token = Token;
function charBelongs(s, i) {
    if (s.charAt(i) === ' ' || s.charCodeAt(i) === 9) {
        return 'space';
    }
    else if (s.charCodeAt(i) === 13 || s.charCodeAt(i) === 10) {
        return 'nl';
    }
    else if (Punctuation.indexOf(s.charAt(i)) > -1) {
        return 'punct';
    }
    else if (s.charCodeAt(i) < 32) {
        return 'spec';
    }
    else {
        return 'word';
    }
}
function tokenize(text) {
    let result = [], b = 0;
    while (b < text.length) {
        let bKind = charBelongs(text, b), e = b + 1;
        while (e < text.length && bKind === charBelongs(text, e)) {
            e++;
        }
        if (e - b) {
            result.push(new Token(bKind, text.slice(b, e), b));
        }
        b = e;
    }
    return result;
}
exports.tokenize = tokenize;
//# sourceMappingURL=token.js.map