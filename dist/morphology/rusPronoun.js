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
var rusPronounsData_1 = require("./rusPronounsData");
var RusPronounLexeme = /** @class */ (function (_super) {
    __extends(RusPronounLexeme, _super);
    function RusPronounLexeme(data) {
        var _this = _super.call(this, data.words[0]) || this;
        _this.data = data;
        return _this;
    }
    RusPronounLexeme.prototype.analyze = function (word, result) {
        var _this = this;
        this.data.words.some(function (d, idx) {
            if (d === word && (!_this.data.noNomn || idx !== types_1.RusCase.Nomn)) {
                result(new RusPronoun(word, _this, idx));
                return true;
            }
            else {
                return false;
            }
        });
    };
    RusPronounLexeme.prototype.getWordForm = function (c) {
        return new RusPronoun(this.data.words[c], this, c);
    };
    RusPronounLexeme.prototype.getWordForms = function () {
        var _this = this;
        return this.data.words.map(function (d, idx) { return new RusPronoun(d, _this, idx); });
    };
    return RusPronounLexeme;
}(morphology_1.PronounLexeme));
exports.RusPronounLexeme = RusPronounLexeme;
exports.RusPronounLexemes = rusPronounsData_1.rusPronouns.map(function (p) { return new RusPronounLexeme(p); });
var RusPronoun = /** @class */ (function (_super) {
    __extends(RusPronoun, _super);
    function RusPronoun(word, lexeme, grammCase) {
        var _this = _super.call(this, word, lexeme) || this;
        _this.grammCase = grammCase;
        return _this;
    }
    RusPronoun.prototype.getDisplayText = function () {
        return this.word + '; ' + types_1.RusPronounTypeNames[this.lexeme.data.pronounType] +
            ' местоимение; ' + types_1.RusCaseNames[this.grammCase];
    };
    RusPronoun.prototype.getSignature = function () {
        return 'NPRO' + types_1.ShortPronounTypeNames[this.lexeme.data.pronounType] +
            types_1.ShortCaseNames[this.grammCase];
    };
    return RusPronoun;
}(morphology_1.Pronoun));
exports.RusPronoun = RusPronoun;
//# sourceMappingURL=rusPronoun.js.map