"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../morphology/token");
const morphAnalyzer_1 = require("../morphology/morphAnalyzer");
const morphTokens_1 = require("./morphTokens");
function scan(text) {
    function createTokenInstance(w) {
        const tokType = morphTokens_1.morphTokens[w.getSignature()];
        if (!tokType) {
            throw new Error(`Unknown type signature ${w.getSignature()} of word ${w.word}`);
        }
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
    return cmbn;
}
exports.scan = scan;
;
//# sourceMappingURL=lexer.js.map