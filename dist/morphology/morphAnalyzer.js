"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rusNoun_1 = require("./rusNoun");
const rusVerb_1 = require("./rusVerb");
const rusAdjective_1 = require("./rusAdjective");
const rusPreposition_1 = require("./rusPreposition");
const rusPronoun_1 = require("./rusPronoun");
const rusConjunction_1 = require("./rusConjunction");
function morphAnalyzer(word) {
    const res = [];
    const resFunc = function (w) { res.push(w); };
    const lw = word.toLowerCase();
    const pos = [rusNoun_1.RusNounLexemes, rusVerb_1.RusVerbLexemes, rusAdjective_1.RusAdjectiveLexemes,
        rusPronoun_1.RusPronounLexemes, rusConjunction_1.RusConjunctionLexemes, rusPreposition_1.RusPrepositionLexemes];
    pos.forEach(lexemes => lexemes.forEach(l => l.analyze(lw, resFunc)));
    return res;
}
exports.morphAnalyzer = morphAnalyzer;
//# sourceMappingURL=morphAnalyzer.js.map