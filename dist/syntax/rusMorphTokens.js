"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chevrotain_1 = require("chevrotain");
var types_1 = require("../morphology/types");
var __1 = require("..");
;
;
var signatures = [
    'VERBTranPerfSingImpr',
    'PREPPlce',
    'CONJ'
];
exports.morphTokens = (function () {
    [true, false].forEach(function (an) {
        return [types_1.RusGender.Masc, types_1.RusGender.Femn, types_1.RusGender.Neut].forEach(function (gender) {
            return [true, false].forEach(function (singular) {
                return [types_1.RusCase.Nomn, types_1.RusCase.Gent, types_1.RusCase.Datv, types_1.RusCase.Accs, types_1.RusCase.Ablt, types_1.RusCase.Loct].forEach(function (grammCase) {
                    return signatures.push(__1.RusNoun.getSignature(an, gender, singular, grammCase));
                });
            });
        });
    });
    /**
     * Прилагательные, единственное число.
     */
    [types_1.RusAdjectiveCategory.Qual, types_1.RusAdjectiveCategory.Pron].forEach(function (category) {
        return [types_1.RusGender.Masc, types_1.RusGender.Femn, types_1.RusGender.Neut].forEach(function (gender) {
            return [types_1.RusCase.Nomn, types_1.RusCase.Gent, types_1.RusCase.Datv, types_1.RusCase.Accs, types_1.RusCase.Ablt, types_1.RusCase.Loct].forEach(function (grammCase) {
                signatures.push(__1.RusAdjective.getSignature(false, category, gender, true, grammCase));
            });
        });
    });
    /**
     * Прилагательные, множественное число.
     */
    [types_1.RusAdjectiveCategory.Qual, types_1.RusAdjectiveCategory.Pron, types_1.RusAdjectiveCategory.Rel].forEach(function (category) {
        return [types_1.RusCase.Nomn, types_1.RusCase.Gent, types_1.RusCase.Datv, types_1.RusCase.Accs, types_1.RusCase.Ablt, types_1.RusCase.Loct].forEach(function (grammCase) {
            signatures.push(__1.RusAdjective.getSignature(false, category, undefined, false, grammCase));
        });
    });
    return signatures.reduce(function (p, s) {
        p[s] = chevrotain_1.createToken({ name: s, pattern: chevrotain_1.Lexer.NA });
        return p;
    }, {});
})();
//# sourceMappingURL=rusMorphTokens.js.map