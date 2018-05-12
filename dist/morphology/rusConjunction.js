"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const morphology_1 = require("./morphology");
class RusConjunctionLexeme extends morphology_1.ConjunctionLexeme {
    analyze(word, result) {
        if (this.stem === word) {
            result(new RusConjunction(word, this));
        }
    }
    getWordForm() {
        return new RusConjunction(this.stem, this);
    }
    getWordForms() {
        return [new RusConjunction(this.stem, this)];
    }
}
exports.RusConjunctionLexeme = RusConjunctionLexeme;
const rusConjunctions = ['и', 'или'];
exports.RusConjunctionLexemes = rusConjunctions.map(p => new RusConjunctionLexeme(p));
class RusConjunction extends morphology_1.Conjunction {
    getDisplayText() {
        return this.word + '; союз';
    }
    getSignature() {
        return 'CONJ';
    }
}
exports.RusConjunction = RusConjunction;
//# sourceMappingURL=rusConjunction.js.map