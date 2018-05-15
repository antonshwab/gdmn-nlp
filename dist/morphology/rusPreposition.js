"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var morphology_1 = require("./morphology");
var types_1 = require("./types");
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
var RusPrepositionLexeme = /** @class */ (function (_super) {
    __extends(RusPrepositionLexeme, _super);
    function RusPrepositionLexeme(preposition, prepositionType) {
        var _this = _super.call(this, preposition) || this;
        _this.prepositionType = prepositionType;
        return _this;
    }
    RusPrepositionLexeme.prototype.analyze = function (word, result) {
        if (this.stem === word) {
            result(new RusPreposition(word, this));
        }
    };
    RusPrepositionLexeme.prototype.getWordForm = function () {
        return new RusPreposition(this.stem, this);
    };
    RusPrepositionLexeme.prototype.getWordForms = function () {
        return [new RusPreposition(this.stem, this)];
    };
    return RusPrepositionLexeme;
}(morphology_1.PrepositionLexeme));
exports.RusPrepositionLexeme = RusPrepositionLexeme;
exports.RusPrepositionLexemes = exports.rusPrepositions.reduce(function (prev, p) {
    p.words.forEach(function (w) { return prev.push(new RusPrepositionLexeme(w, p.prepositionType)); });
    return prev;
}, []);
var RusPreposition = /** @class */ (function (_super) {
    __extends(RusPreposition, _super);
    function RusPreposition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RusPreposition.prototype.getDisplayText = function () {
        return this.word + '; предлог; ' +
            types_1.RusPrepositionTypeNames[this.lexeme.prepositionType];
    };
    RusPreposition.prototype.getSignature = function () {
        return 'PREP' +
            types_1.ShortPrepositionTypeNames[this.lexeme.prepositionType];
    };
    return RusPreposition;
}(morphology_1.Preposition));
exports.RusPreposition = RusPreposition;
//# sourceMappingURL=rusPreposition.js.map