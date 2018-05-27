"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tokenizer_1 = require("../syntax/tokenizer");
var morphAnalyzer_1 = require("../morphology/morphAnalyzer");
var rusMorphTokens_1 = require("./rusMorphTokens");
/**
 * Функция определяет возможные словоформы для каждого
 * из переданных слов. Например, для слова "дом" это будут
 * две возможные словормы: ед. ч., м. род, им п. и ед. ч., м.род,
 * вин. п.
 *
 * Затем, комбинаторно строятся все возможные варианты сочетаний
 * словоформ.
 *
 * Функция вовращает массив из массивов словоформ.
 *
 * @param text слово, словосочетание или предложение.
 */
function combinatorialMorph(text) {
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
exports.combinatorialMorph = combinatorialMorph;
;
//# sourceMappingURL=lexer.js.map