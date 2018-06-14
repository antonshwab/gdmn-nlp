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
var rusNounEndings_1 = require("./rusNounEndings");
var morphology_1 = require("./morphology");
var rusNounsData_1 = require("./rusNounsData");
var rusNounSemCategory_1 = require("../semantics/rusNounSemCategory");
var RusNounLexeme = /** @class */ (function (_super) {
    __extends(RusNounLexeme, _super);
    function RusNounLexeme(stem, stem1, stem2, semCategories, animacy, gender, declension, declensionZ) {
        var _this = _super.call(this, stem, stem1, stem2, semCategories) || this;
        _this.animate = animacy;
        _this.gender = gender;
        _this.declension = declension;
        _this.declensionZ = declensionZ;
        return _this;
    }
    RusNounLexeme.prototype.getWordForm = function (morphSigns) {
        var _this = this;
        var c = morphSigns.c, singular = morphSigns.singular;
        var ending = rusNounEndings_1.RusDeclensionZEndings.find(function (e) { return e.declensionZ === _this.declensionZ &&
            e.gender === _this.gender && e.animate === _this.animate; });
        if (singular && ending && ending.singular.length > 0) {
            if (this.gender === types_1.RusGender.Masc) {
                if (this.stem1 && !this.stem.endsWith('ин')) {
                    if (c === types_1.RusCase.Nomn || (c === types_1.RusCase.Accs && !this.animate)) {
                        return (new RusNoun(this.stem + ending.singular[c], this, c, true));
                    }
                    else {
                        return (new RusNoun(this.stem1 + ending.singular[c], this, c, true));
                    }
                }
                else {
                    return (new RusNoun(this.stem + ending.singular[c], this, c, true));
                }
            }
            else if (this.gender === types_1.RusGender.Femn) {
                if (((this.declensionZ === '8*b\'')
                    &&
                        (c === types_1.RusCase.Nomn || c === types_1.RusCase.Accs || c === types_1.RusCase.Ablt)) ||
                    this.declensionZ === '8*b\'ш' ||
                    this.declensionZ === '5*a' ||
                    this.declensionZ === '3*f\'' ||
                    this.declensionZ === '3*f' ||
                    this.declensionZ === '3*d' ||
                    this.declensionZ === '3*b' ||
                    this.declensionZ === '3*a' ||
                    this.declensionZ === '2*a-ня' ||
                    this.declensionZ === '2*a' ||
                    this.declensionZ === '2*b' ||
                    this.declensionZ === '2*d' ||
                    this.declensionZ === '1*a' ||
                    this.declensionZ === '1*b' ||
                    this.declensionZ === '1*d' ||
                    this.declensionZ === '1*f') {
                    return (new RusNoun(this.stem + ending.singular[c], this, c, true));
                }
                else if (this.stem1) {
                    return (new RusNoun(this.stem1 + ending.singular[c], this, c, true));
                }
                else {
                    return (new RusNoun(this.stem + ending.singular[c], this, c, true));
                }
            }
            else {
                return (new RusNoun(this.stem + ending.singular[c], this, c, true));
            }
        }
        else if (!singular && ending && ending.plural.length) {
            if (this.gender === types_1.RusGender.Masc) {
                if (c === types_1.RusCase.Gent
                    &&
                        !this.animate
                    &&
                        (this.stem.endsWith('ок') || this.stem.endsWith('ек'))
                    && !ending.plural[c]) {
                    return (new RusNoun(this.stem, this, c, false));
                }
                else if (this.stem2) {
                    return (new RusNoun(this.stem2 + ending.plural[c], this, c, false));
                }
                else if (this.stem1) {
                    return (new RusNoun(this.stem1 + ending.plural[c], this, c, false));
                }
                else {
                    return (new RusNoun(this.stem + ending.plural[c], this, c, false));
                }
            }
            else if (this.gender === types_1.RusGender.Femn) {
                if (this.stem1) {
                    if (((this.declensionZ === '5*a' ||
                        this.declensionZ === '3*f\'' ||
                        this.declensionZ === '3*f' ||
                        this.declensionZ === '3*d' ||
                        this.declensionZ === '2*b' ||
                        this.declensionZ === '2*d' ||
                        this.declensionZ === '1*d' ||
                        this.declensionZ === '1*f') && c !== types_1.RusCase.Gent)
                        ||
                            ((this.declensionZ === '1*a' ||
                                this.declensionZ === '1*b' ||
                                this.declensionZ === '2*a' ||
                                this.declensionZ === '2*a-ня' ||
                                this.declensionZ === '3*b' ||
                                this.declensionZ === '3*a') && c !== types_1.RusCase.Gent && (c !== types_1.RusCase.Accs || !this.animate))) {
                        return (new RusNoun(this.stem + ending.plural[c], this, c, false));
                    }
                    else {
                        return (new RusNoun(this.stem1 + ending.plural[c], this, c, false));
                    }
                }
                else {
                    return (new RusNoun(this.stem + ending.plural[c], this, c, false));
                }
            }
            else {
                if ((c === types_1.RusCase.Gent || this.declensionZ === '3e^') && this.stem1) {
                    return (new RusNoun(this.stem1 + ending.plural[c], this, c, false));
                }
                else {
                    return (new RusNoun(this.stem + ending.plural[c], this, c, false));
                }
            }
        }
        else {
            throw 'No data for noun endings found';
        }
    };
    RusNounLexeme.prototype.hasPlural = function () {
        var _this = this;
        var ending = rusNounEndings_1.RusDeclensionZEndings.find(function (e) { return e.declensionZ === _this.declensionZ &&
            e.gender === _this.gender && e.animate === _this.animate; });
        return typeof ending !== 'undefined' && ending.plural.length > 0;
    };
    RusNounLexeme.prototype.getWordForms = function () {
        var wordForms = [];
        for (var c = types_1.RusCase.Nomn; c <= types_1.RusCase.Loct; c++) {
            wordForms.push(this.getWordForm({ c: c, singular: true }));
        }
        if (this.hasPlural()) {
            for (var c = types_1.RusCase.Nomn; c <= types_1.RusCase.Loct; c++) {
                wordForms.push(this.getWordForm({ c: c, singular: false }));
            }
        }
        return wordForms;
    };
    return RusNounLexeme;
}(morphology_1.NounLexeme));
exports.RusNounLexeme = RusNounLexeme;
exports.RusNounLexemes = rusNounsData_1.rusNouns.map(function (n) {
    var sc = rusNounSemCategory_1.RusNounSemCategory[n.stem];
    return new RusNounLexeme(n.stem, n.stem1, n.stem2, sc ? sc : [], n.animate, n.gender, n.declension, n.declensionZ);
});
var RusNoun = /** @class */ (function (_super) {
    __extends(RusNoun, _super);
    function RusNoun(word, lexeme, grammCase, singular) {
        var _this = _super.call(this, word, lexeme) || this;
        _this.grammCase = grammCase;
        _this.singular = singular;
        return _this;
    }
    RusNoun.prototype.getDisplayText = function () {
        var lexeme = this.lexeme;
        var stem = this.word.startsWith(lexeme.stem) ? lexeme.stem :
            (this.word.startsWith(lexeme.stem1) ? lexeme.stem1 :
                (this.word.startsWith(lexeme.stem2) ? lexeme.stem2 : ''));
        var divided = stem + (this.word === stem ? '' : '-' + this.word.slice(stem.length - this.word.length));
        var decl = lexeme.declension === 1 ? '1-е скл.' :
            (lexeme.declension === 2 ? '2-е скл.' : '3-е скл.');
        var num = this.singular ? 'ед.ч.' : 'мн.ч.';
        var cs = types_1.RusCaseNames[this.grammCase];
        return this.word + '; ' + (divided !== this.word ? divided + '; ' : '') +
            'сущ; ' + (lexeme.animate ? 'од; ' : 'неод; ') +
            types_1.RusGenderNames[lexeme.gender] + ' род; ' +
            decl + ' (' + lexeme.declensionZ + '); ' +
            num + '; ' + cs;
    };
    RusNoun.getSignature = function (animate, gender, singular, grammCase) {
        var an = animate ? 'Anim' : 'Inan';
        var gd = types_1.ShortGenderNames[gender];
        var num = singular ? 'Sing' : 'Plur';
        var cs = types_1.ShortCaseNames[grammCase];
        return 'NOUN' + an + gd + num + cs;
    };
    RusNoun.prototype.getSignature = function () {
        var lexeme = this.lexeme;
        return RusNoun.getSignature(lexeme.animate, lexeme.gender, this.singular, this.grammCase);
    };
    return RusNoun;
}(morphology_1.Noun));
exports.RusNoun = RusNoun;
//# sourceMappingURL=rusNoun.js.map