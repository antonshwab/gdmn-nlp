"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const morphology_1 = require("./morphology");
const types_1 = require("./types");
const rusPronounsData_1 = require("./rusPronounsData");
class RusPronounLexeme extends morphology_1.PronounLexeme {
    constructor(data) {
        super(data.words[0]);
        this.data = data;
    }
    analyze(word, result) {
        this.data.words.some((d, idx) => {
            if (d === word && (!this.data.noNomn || idx !== types_1.RusCase.Nomn)) {
                result(new RusPronoun(word, this, idx));
                return true;
            }
            else {
                return false;
            }
        });
    }
    getWordForm(c) {
        return new RusPronoun(this.data.words[c], this, c);
    }
    getWordForms() {
        return this.data.words.map((d, idx) => new RusPronoun(d, this, idx));
    }
}
exports.RusPronounLexeme = RusPronounLexeme;
exports.RusPronounLexemes = rusPronounsData_1.rusPronouns.map(p => new RusPronounLexeme(p));
class RusPronoun extends morphology_1.Pronoun {
    constructor(word, lexeme, grammCase) {
        super(word, lexeme);
        this.grammCase = grammCase;
    }
    getDisplayText() {
        return this.word + '; ' + types_1.RusPronounTypeNames[this.lexeme.data.pronounType] +
            ' местоимение; ' + types_1.RusCaseNames[this.grammCase];
    }
    getSignature() {
        return 'NPRO' + types_1.ShortPronounTypeNames[this.lexeme.data.pronounType] +
            types_1.ShortCaseNames[this.grammCase];
    }
}
exports.RusPronoun = RusPronoun;
//# sourceMappingURL=rusPronoun.js.map