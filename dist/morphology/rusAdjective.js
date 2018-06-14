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
var types_1 = require("./types");
var morphology_1 = require("./morphology");
var rusAdjectiveEndings_1 = require("./rusAdjectiveEndings");
var rusAdjectivesData_1 = require("./rusAdjectivesData");
var rusNoun_1 = require("./rusNoun");
var RusAdjectiveLexeme = /** @class */ (function (_super) {
    __extends(RusAdjectiveLexeme, _super);
    function RusAdjectiveLexeme(stem, stem1, stem2, category, declensionZ) {
        var _this = _super.call(this, stem, stem1, stem2) || this;
        _this.category = category;
        _this.declensionZ = declensionZ;
        return _this;
    }
    RusAdjectiveLexeme.prototype.hasShortForm = function () {
        if (this.category !== types_1.RusAdjectiveCategory.Qual
            || this.declensionZ === '4a'
            || this.declensionZ === '6a'
            || this.declensionZ.slice(-2) === 'ся') {
            return false;
        }
        else {
            return true;
        }
    };
    RusAdjectiveLexeme.prototype.getWordForm = function (morphSigns) {
        var _this = this;
        var declZEnding = rusAdjectiveEndings_1.RusDeclensionAdjectiveZEndings.find(function (e) { return e.declensionZ === _this.declensionZ; });
        if (!declZEnding) {
            throw 'Unknown declensionZ ending';
        }
        if (morphSigns.short) {
            if (!this.hasShortForm()) {
                throw 'No short form';
            }
            var shortEnding = '';
            if (!morphSigns.singular) {
                if (this.declensionZ === '3a'
                    || this.declensionZ === '3*a'
                    || this.declensionZ === '3a/c'
                    || this.declensionZ === '3a/c"^'
                    || this.declensionZ === '3*a\''
                    || this.declensionZ === '3*a/c'
                    || this.declensionZ === '3*a/c\''
                    || this.declensionZ === '4a'
                    || this.declensionZ === '2a/c') {
                    shortEnding = 'и';
                }
                else {
                    shortEnding = 'ы';
                }
            }
            else {
                if (morphSigns.gender === types_1.RusGender.Femn) {
                    if (this.declensionZ === '2a/c') {
                        shortEnding = 'я';
                    }
                    else {
                        shortEnding = 'а';
                    }
                }
                else if (morphSigns.gender === types_1.RusGender.Neut) {
                    if (this.declensionZ === '4a' || this.declensionZ === '5a' || this.declensionZ === '2a/c') {
                        shortEnding = 'е';
                    }
                    else {
                        shortEnding = 'о';
                    }
                }
            }
            if (shortEnding) {
                return new RusAdjective(this.stem + shortEnding, this, morphSigns);
            }
            else {
                return new RusAdjective(this.stem1 ? this.stem1 : this.stem, this, morphSigns);
            }
        }
        else {
            var ending = declZEnding.endings.find(function (e) { return e.c === morphSigns.c
                && e.gender === morphSigns.gender
                && e.singular === morphSigns.singular
                && e.animate === morphSigns.animate; });
            if (!ending) {
                throw 'Adjective ending not found ' + JSON.stringify(morphSigns);
            }
            if (this.stem1 && this.declensionZ === '2*b') {
                if (morphSigns.gender === types_1.RusGender.Masc
                    && (morphSigns.c === types_1.RusCase.Nomn
                        || (morphSigns.c === types_1.RusCase.Accs && !morphSigns.animate))) {
                    return new RusAdjective(this.stem + ending.ending, this, morphSigns);
                }
                else {
                    return new RusAdjective(this.stem1 + ending.ending, this, morphSigns);
                }
            }
            else {
                return new RusAdjective(this.stem + ending.ending, this, morphSigns);
            }
        }
    };
    RusAdjectiveLexeme.prototype.getWordForms = function () {
        var wordForms = [];
        for (var c = types_1.RusCase.Nomn; c <= types_1.RusCase.Loct; c++) {
            if (c === types_1.RusCase.Accs) {
                wordForms.push(this.getWordForm({ c: c, singular: true, gender: types_1.RusGender.Masc, animate: true }));
                wordForms.push(this.getWordForm({ c: c, singular: true, gender: types_1.RusGender.Masc, animate: false }));
                wordForms.push(this.getWordForm({ c: c, singular: true, gender: types_1.RusGender.Femn }));
                wordForms.push(this.getWordForm({ c: c, singular: true, gender: types_1.RusGender.Neut }));
                wordForms.push(this.getWordForm({ c: c, singular: false, animate: true }));
                wordForms.push(this.getWordForm({ c: c, singular: false, animate: false }));
            }
            else {
                wordForms.push(this.getWordForm({ c: c, singular: true, gender: types_1.RusGender.Masc }));
                wordForms.push(this.getWordForm({ c: c, singular: true, gender: types_1.RusGender.Femn }));
                wordForms.push(this.getWordForm({ c: c, singular: true, gender: types_1.RusGender.Neut }));
                wordForms.push(this.getWordForm({ c: c, singular: false }));
            }
        }
        if (this.hasShortForm()) {
            wordForms.push(this.getWordForm({ singular: true, gender: types_1.RusGender.Masc, short: true }));
            wordForms.push(this.getWordForm({ singular: true, gender: types_1.RusGender.Femn, short: true }));
            wordForms.push(this.getWordForm({ singular: true, gender: types_1.RusGender.Neut, short: true }));
            wordForms.push(this.getWordForm({ singular: false, short: true }));
        }
        return wordForms;
    };
    RusAdjectiveLexeme.prototype.getNounLexeme = function () {
        var _this = this;
        if (this.category !== types_1.RusAdjectiveCategory.Rel) {
            throw new Error("Only elative adjectives are made from nouns");
        }
        return rusNoun_1.RusNounLexemes.find(function (l) { return l.stem === _this.stem; });
    };
    return RusAdjectiveLexeme;
}(morphology_1.AdjectiveLexeme));
exports.RusAdjectiveLexeme = RusAdjectiveLexeme;
exports.RusAdjectiveLexemes = rusAdjectivesData_1.rusAdjectives.map(function (v) { return new RusAdjectiveLexeme(v.stem, v.stem1, v.stem2, v.category, v.declensionZ); });
var RusAdjective = /** @class */ (function (_super) {
    __extends(RusAdjective, _super);
    function RusAdjective(word, lexeme, morphSigns) {
        var _this = _super.call(this, word, lexeme) || this;
        _this.singular = morphSigns.singular;
        _this.gender = morphSigns.gender;
        _this.grammCase = morphSigns.c;
        _this.animate = morphSigns.animate;
        _this.short = morphSigns.short;
        return _this;
    }
    RusAdjective.prototype.getDisplayText = function () {
        var lexeme = this.lexeme;
        var stem = this.word.startsWith(lexeme.stem) ? lexeme.stem :
            (this.word.startsWith(lexeme.stem1) ? lexeme.stem1 :
                (this.word.startsWith(lexeme.stem2) ? lexeme.stem2 : ''));
        var divided = stem + (this.word === stem ? '' : '-' + this.word.slice(stem.length - this.word.length));
        var num = this.singular ? 'ед.ч.' : 'мн.ч.';
        var cs = typeof this.grammCase !== 'undefined' ? types_1.RusCaseNames[this.grammCase] : '';
        var anim = typeof this.animate === 'undefined' ? '' : (this.animate ? 'од; ' : 'неод; ');
        var gender = typeof this.gender === 'undefined' ? '' : types_1.RusGenderNames[this.gender] + ' род; ';
        var short = this.short ? 'кратк; ' : '';
        return this.word + '; ' + (divided !== this.word ? divided + '; ' : '') +
            types_1.RusAdjectiveCategoryNames[lexeme.category] + ' прил; ' + anim + short +
            gender +
            ' скл. ' + lexeme.declensionZ + '; ' +
            num + '; ' + cs;
    };
    RusAdjective.getSignature = function (short, category, gender, singular, grammCase) {
        var sh = short ? 'ADJS' : 'ADJF';
        var ct = types_1.ShortAdjectiveCategoryNames[category];
        var gd = typeof gender === 'undefined' ? '' : types_1.ShortGenderNames[gender];
        var num = singular ? 'Sing' : 'Plur';
        var cs = typeof grammCase !== 'undefined' ? types_1.ShortCaseNames[grammCase] : '';
        return sh + ct + gd + num + cs;
    };
    RusAdjective.prototype.getSignature = function () {
        var lexeme = this.lexeme;
        return RusAdjective.getSignature(this.short, lexeme.category, this.gender, this.singular, this.grammCase);
    };
    return RusAdjective;
}(morphology_1.Adjective));
exports.RusAdjective = RusAdjective;
//# sourceMappingURL=rusAdjective.js.map