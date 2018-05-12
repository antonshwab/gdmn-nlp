"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const morphology_1 = require("./morphology");
const types_1 = require("./types");
exports.rusPrepositions = [
    {
        prepositionType: types_1.PrepositionType.Place,
        words: ['от', 'до', 'из', 'на', 'около', 'вблизи', 'за', 'из-под']
    },
    {
        prepositionType: types_1.PrepositionType.Time,
        words: ['с', 'от', 'до', 'в'] // в течение, в продолжение
    },
    {
        prepositionType: types_1.PrepositionType.Reason,
        words: ['из-за', 'по', 'от', 'вследствие', 'ввиду']
    },
    {
        prepositionType: types_1.PrepositionType.Goal,
        words: ['для', 'ради'] // в целях, во имя
    },
    {
        prepositionType: types_1.PrepositionType.Comparative,
        words: ['с', 'вроде', 'наподобие']
    },
    {
        prepositionType: types_1.PrepositionType.Object,
        words: ['о', 'по', 'про', 'за', 'в', 'на', 'с', 'насчет']
    }
];
class RusPrepositionLexeme extends morphology_1.PrepositionLexeme {
    constructor(preposition, prepositionType) {
        super(preposition);
        this.prepositionType = prepositionType;
    }
    analyze(word, result) {
        if (this.stem === word) {
            result(new RusPreposition(word, this));
        }
    }
    getWordForm() {
        return new RusPreposition(this.stem, this);
    }
    getWordForms() {
        return [new RusPreposition(this.stem, this)];
    }
}
exports.RusPrepositionLexeme = RusPrepositionLexeme;
exports.RusPrepositionLexemes = exports.rusPrepositions.reduce((prev, p) => {
    p.words.forEach(w => prev.push(new RusPrepositionLexeme(w, p.prepositionType)));
    return prev;
}, []);
class RusPreposition extends morphology_1.Preposition {
    getDisplayText() {
        return this.word + '; предлог; ' +
            types_1.RusPrepositionTypeNames[this.lexeme.prepositionType];
    }
    getSignature() {
        return 'PREP' +
            types_1.ShortPrepositionTypeNames[this.lexeme.prepositionType];
    }
}
exports.RusPreposition = RusPreposition;
//# sourceMappingURL=rusPreposition.js.map