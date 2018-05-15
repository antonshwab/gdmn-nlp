"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tokenizer_1 = require("../syntax/tokenizer");
var morphAnalyzer_1 = require("../morphology/morphAnalyzer");
var rusMorphTokens_1 = require("./rusMorphTokens");
function scan(text) {
    function createTokenInstance(w) {
        var tokType = rusMorphTokens_1.morphTokens[w.getSignature()];
        if (!tokType) {
            throw new Error("Unknown type signature " + w.getSignature() + " of word " + w.word);
        }
        return {
            word: w,
            image: w.word,
            startOffset: 1,
            tokenTypeIdx: tokType.tokenTypeIdx,
            tokenType: tokType
        };
    }
    var words = tokenizer_1.tokenize(text).reduce(function (p, t) {
        if (t.tokenType === tokenizer_1.RusWord) {
            p.push(morphAnalyzer_1.morphAnalyzer(t.image));
        }
        return p;
    }, []);
    var cmbn = [];
    function recurs(curr) {
        if (curr.length >= words.length - 1) {
            words[words.length - 1].forEach(function (w) { return cmbn.push(curr.concat([createTokenInstance(w)])); });
        }
        else {
            words[curr.length].forEach(function (w) { return recurs(curr.concat([createTokenInstance(w)])); });
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