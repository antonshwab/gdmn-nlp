"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chevrotain_1 = require("chevrotain");
const token_1 = require("../morphology/token");
const morphAnalyzer_1 = require("../morphology/morphAnalyzer");
;
;
function scan(text) {
    const tokenTypes = {};
    function getTokenType(w) {
        const typeSignature = w.getSignature();
        let result = tokenTypes[typeSignature];
        if (!result) {
            result = chevrotain_1.createToken({ name: typeSignature, pattern: chevrotain_1.Lexer.NA });
            tokenTypes[typeSignature] = result;
        }
        return result;
    }
    function createTokenInstance(w) {
        const tokType = getTokenType(w);
        return {
            word: w,
            image: w.word,
            startOffset: 1,
            tokenTypeIdx: tokType.tokenTypeIdx,
            tokenType: tokType
        };
    }
    const words = token_1.tokenize(text).reduce((p, t) => {
        if (t.kind === 'word') {
            p.push(morphAnalyzer_1.morphAnalyzer(t.tkn));
        }
        return p;
    }, []);
    const cmbn = [];
    function recurs(curr) {
        if (curr.length >= words.length - 1) {
            words[words.length - 1].forEach(w => cmbn.push([...curr, createTokenInstance(w)]));
        }
        else {
            words[curr.length].forEach(w => recurs([...curr, createTokenInstance(w)]));
        }
    }
    if (words.length) {
        recurs([]);
    }
    return {
        tokenTypes: Object.entries(tokenTypes).map(t => t[1]),
        tokens: cmbn
    };
}
exports.scan = scan;
//# sourceMappingURL=lexer.js.map