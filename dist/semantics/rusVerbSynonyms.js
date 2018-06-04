"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var __1 = require("..");
function v(word) {
    var found = __1.RusVerbLexemes.find(function (l) { return l.matchStems(word); });
    if (found) {
        return found;
    }
    else {
        throw new Error("Unknown word " + word);
    }
}
;
var rusVerbSynonyms = [
    {
        semContext: types_1.SemContext.QueryDB,
        chains: [
            ['показать', 'вывести', 'продемонстрировать'].map(function (w) { return v(w); })
        ]
    }
];
function hasMeaning(semContext, meaning, word) {
    var meaningLexeme = v(meaning);
    if (!meaningLexeme) {
        throw new Error("Unknown word " + meaning);
    }
    if (meaningLexeme === word.lexeme) {
        return true;
    }
    var synonyms = rusVerbSynonyms.find(function (s) { return s.semContext === semContext; });
    return !!synonyms && !!synonyms.chains.find(function (chain) {
        return !!chain.find(function (l) { return l === meaningLexeme; })
            && !!chain.find(function (l) { return l === word.lexeme; });
    });
}
exports.hasMeaning = hasMeaning;
//# sourceMappingURL=rusVerbSynonyms.js.map