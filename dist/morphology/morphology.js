"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const idGenerator_1 = require("../utils/idGenerator");
class Lexeme {
    constructor(stem = '', stem1 = '', stem2 = '') {
        this.stem = stem;
        this.stem1 = stem1;
        this.stem2 = stem2;
    }
    analyze(word, result) {
        if (word.startsWith(this.stem)
            || (this.stem1 && word.startsWith(this.stem1))
            || (this.stem2 && word.startsWith(this.stem2))) {
            this.getWordForms().filter(f => f.word === word).forEach(f => result(f));
        }
    }
    getWordForms() {
        return [];
    }
}
exports.Lexeme = Lexeme;
class ConjunctionLexeme extends Lexeme {
}
exports.ConjunctionLexeme = ConjunctionLexeme;
class NounLexeme extends Lexeme {
}
exports.NounLexeme = NounLexeme;
class VerbLexeme extends Lexeme {
}
exports.VerbLexeme = VerbLexeme;
class AdjectiveLexeme extends Lexeme {
}
exports.AdjectiveLexeme = AdjectiveLexeme;
class PrepositionLexeme extends Lexeme {
}
exports.PrepositionLexeme = PrepositionLexeme;
class PronounLexeme extends Lexeme {
}
exports.PronounLexeme = PronounLexeme;
class Word {
    constructor(word, lexeme) {
        this.word = word;
        this.lexeme = lexeme;
        this.id = idGenerator_1.getNextID();
    }
    getText() { return this.word; }
    getDisplayText() { return this.getText(); }
    getSignature() { return ''; }
}
exports.Word = Word;
class Conjunction extends Word {
}
exports.Conjunction = Conjunction;
class Noun extends Word {
}
exports.Noun = Noun;
class Verb extends Word {
}
exports.Verb = Verb;
class Adjective extends Word {
}
exports.Adjective = Adjective;
class Preposition extends Word {
}
exports.Preposition = Preposition;
class Pronoun extends Word {
}
exports.Pronoun = Pronoun;
//# sourceMappingURL=morphology.js.map