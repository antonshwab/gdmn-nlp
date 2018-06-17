"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rusNoun_1 = require("./rusNoun");
var rusVerb_1 = require("./rusVerb");
var rusAdjective_1 = require("./rusAdjective");
var rusPreposition_1 = require("./rusPreposition");
var rusPronoun_1 = require("./rusPronoun");
var rusConjunction_1 = require("./rusConjunction");
function morphAnalyzer(word) {
    var res = [];
    var resFunc = function (w) { res.push(w); };
    var lw = word.toLowerCase();
    var pos = [rusNoun_1.RusNounLexemes, rusVerb_1.RusVerbLexemes, rusAdjective_1.RusAdjectiveLexemes,
        rusPronoun_1.RusPronounLexemes, rusConjunction_1.RusConjunctionLexemes, rusPreposition_1.RusPrepositionLexemes];
    pos.forEach(function (lexemes) { return lexemes.forEach(function (l) { return l.analyze(lw, resFunc); }); });
    return res;
}
exports.morphAnalyzer = morphAnalyzer;
//# sourceMappingURL=morphAnalyzer.js.map