"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokenizer_1 = require("../syntax/tokenizer");
const morphAnalyzer_1 = require("../morphology/morphAnalyzer");
const rusMorphTokens_1 = require("./rusMorphTokens");
function scan(text) {
    function createTokenInstance(w) {
        const tokType = rusMorphTokens_1.morphTokens[w.getSignature()];
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
    const tokenized = tokenizer_1.tokenizer.tokenize(text);
    if (tokenized.errors.length) {
        throw new Error(`Invalid text ${text}. Errors: ${JSON.stringify(tokenized.errors, undefined, 2)}`);
    }
    const words = tokenized.tokens.reduce((p, t) => {
        if (t.tokenType === tokenizer_1.RusWord) {
            p.push(morphAnalyzer_1.morphAnalyzer(t.image));
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