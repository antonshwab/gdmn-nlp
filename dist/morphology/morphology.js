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
var idGenerator_1 = require("../utils/idGenerator");
var Lexeme = /** @class */ (function () {
    function Lexeme(stem, stem1, stem2) {
        if (stem === void 0) { stem = ''; }
        if (stem1 === void 0) { stem1 = ''; }
        if (stem2 === void 0) { stem2 = ''; }
        this.stem = stem;
        this.stem1 = stem1;
        this.stem2 = stem2;
    }
    Lexeme.prototype.matchStems = function (word) {
        return word.startsWith(this.stem)
            || (!!this.stem1 && word.startsWith(this.stem1))
            || (!!this.stem2 && word.startsWith(this.stem2));
    };
    Lexeme.prototype.analyze = function (word, result) {
        if (this.matchStems(word)) {
            this.getWordForms().filter(function (f) { return f.word === word; }).forEach(function (f) { return result(f); });
        }
    };
    Lexeme.prototype.getWordForms = function () {
        return [];
    };
    return Lexeme;
}());
exports.Lexeme = Lexeme;
var ConjunctionLexeme = /** @class */ (function (_super) {
    __extends(ConjunctionLexeme, _super);
    function ConjunctionLexeme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConjunctionLexeme;
}(Lexeme));
exports.ConjunctionLexeme = ConjunctionLexeme;
var NounLexeme = /** @class */ (function (_super) {
    __extends(NounLexeme, _super);
    function NounLexeme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NounLexeme;
}(Lexeme));
exports.NounLexeme = NounLexeme;
var VerbLexeme = /** @class */ (function (_super) {
    __extends(VerbLexeme, _super);
    function VerbLexeme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VerbLexeme;
}(Lexeme));
exports.VerbLexeme = VerbLexeme;
var AdjectiveLexeme = /** @class */ (function (_super) {
    __extends(AdjectiveLexeme, _super);
    function AdjectiveLexeme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdjectiveLexeme;
}(Lexeme));
exports.AdjectiveLexeme = AdjectiveLexeme;
var PrepositionLexeme = /** @class */ (function (_super) {
    __extends(PrepositionLexeme, _super);
    function PrepositionLexeme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PrepositionLexeme;
}(Lexeme));
exports.PrepositionLexeme = PrepositionLexeme;
var PronounLexeme = /** @class */ (function (_super) {
    __extends(PronounLexeme, _super);
    function PronounLexeme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PronounLexeme;
}(Lexeme));
exports.PronounLexeme = PronounLexeme;
var Word = /** @class */ (function () {
    function Word(word, lexeme) {
        this.word = word;
        this.lexeme = lexeme;
        this.id = idGenerator_1.getNextID();
    }
    Word.prototype.getText = function () { return this.word; };
    Word.prototype.getDisplayText = function () { return this.getText(); };
    Word.prototype.getSignature = function () { return ''; };
    return Word;
}());
exports.Word = Word;
var Conjunction = /** @class */ (function (_super) {
    __extends(Conjunction, _super);
    function Conjunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Conjunction;
}(Word));
exports.Conjunction = Conjunction;
var Noun = /** @class */ (function (_super) {
    __extends(Noun, _super);
    function Noun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Noun;
}(Word));
exports.Noun = Noun;
var Verb = /** @class */ (function (_super) {
    __extends(Verb, _super);
    function Verb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Verb;
}(Word));
exports.Verb = Verb;
var Adjective = /** @class */ (function (_super) {
    __extends(Adjective, _super);
    function Adjective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Adjective;
}(Word));
exports.Adjective = Adjective;
var Preposition = /** @class */ (function (_super) {
    __extends(Preposition, _super);
    function Preposition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Preposition;
}(Word));
exports.Preposition = Preposition;
var Pronoun = /** @class */ (function (_super) {
    __extends(Pronoun, _super);
    function Pronoun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Pronoun;
}(Word));
exports.Pronoun = Pronoun;
//# sourceMappingURL=morphology.js.map