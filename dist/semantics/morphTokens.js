"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chevrotain_1 = require("chevrotain");
const types_1 = require("../morphology/types");
const __1 = require("..");
;
;
const signatures = [
    'VERBTranPerfSingImpr',
    'ADJFAProPlurAccs',
    'ADJFQualPlurAccs',
    'ADJFQualNeutSingNomn',
    'PREPPlce',
    'CONJ'
];
exports.morphTokens = (() => {
    [true, false].forEach(an => [types_1.RusGender.Masc, types_1.RusGender.Femn, types_1.RusGender.Neut].forEach(gender => [true, false].forEach(singular => [types_1.RusCase.Nomn, types_1.RusCase.Gent, types_1.RusCase.Datv, types_1.RusCase.Accs, types_1.RusCase.Ablt, types_1.RusCase.Loct].forEach(grammCase => signatures.push(__1.RusNoun.getSignature(an, gender, singular, grammCase))))));
    [types_1.RusGender.Masc, types_1.RusGender.Femn, types_1.RusGender.Neut].forEach(gender => [true, false].forEach(singular => [types_1.RusCase.Nomn, types_1.RusCase.Gent, types_1.RusCase.Datv, types_1.RusCase.Accs, types_1.RusCase.Ablt, types_1.RusCase.Loct].forEach(grammCase => signatures.push(__1.RusAdjective.getSignature(false, types_1.RusAdjectiveCategory.Qual, gender, singular, grammCase)))));
    return signatures.reduce((p, s) => {
        p[s] = chevrotain_1.createToken({ name: s, pattern: chevrotain_1.Lexer.NA });
        return p;
    }, {});
})();
//# sourceMappingURL=morphTokens.js.map