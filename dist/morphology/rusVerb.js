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
var rusVerbsData_1 = require("./rusVerbsData");
var rusVerbEndings_1 = require("./rusVerbEndings");
var utility_1 = require("./utility");
var RusVerbLexeme = /** @class */ (function (_super) {
    __extends(RusVerbLexeme, _super);
    function RusVerbLexeme(stem, stem1, stem2, aspect, transitivity, conjZ) {
        var _this = _super.call(this, stem, stem1, stem2) || this;
        _this.aspect = aspect;
        _this.transitivity = transitivity;
        _this.conjZ = conjZ;
        _this.conjZEnding = rusVerbEndings_1.RusConjugationZEndings.find(function (c) { return c.conjZ === _this.conjZ && c.aspect === _this.aspect && c.transitivity === _this.transitivity; });
        return _this;
    }
    RusVerbLexeme.prototype.hasImprMood = function () {
        if (!this.conjZEnding) {
            throw 'Conjugation \'' + this.conjZ + '\' not found';
        }
        return (typeof this.conjZEnding.endings.find(function (e) { return e.mood === types_1.RusMood.Impr; }) !== 'undefined');
    };
    RusVerbLexeme.prototype.getWordForm = function (morphSigns) {
        if (morphSigns.infn) {
            if (!this.conjZEnding) {
                throw 'Conjugation \'' + this.conjZ + '\' not found';
            }
            var wrd = void 0;
            if (this.conjZ.indexOf('-ся') !== -1) {
                wrd = this.stem + this.conjZEnding.suffix + 'ся';
            }
            else {
                wrd = this.stem + this.conjZEnding.suffix;
            }
            return new RusVerb(wrd, this, { infn: true });
        }
        if (this.conjZEnding) {
            var ending = this.conjZEnding.endings.find(function (e) { return e.tense === morphSigns.tense
                && e.person === morphSigns.person
                && e.gender === morphSigns.gender
                && e.singular === morphSigns.singular
                && e.mood === morphSigns.mood
                && e.involvement === morphSigns.involvement; });
            if (ending) {
                if (this.conjZ === '^b/b(9)' || this.conjZ === '^b/b(9)СВ') { // идти
                    if (morphSigns.tense === types_1.RusTense.Past) {
                        return new RusVerb(this.stem1 + ending.ending, this, morphSigns);
                    }
                    return new RusVerb(this.stem + ending.ending, this, morphSigns);
                }
                if (this.stem2) {
                    if (morphSigns.mood === types_1.RusMood.Indc
                        &&
                            morphSigns.tense === types_1.RusTense.Futr
                        &&
                            this.conjZ === '14cСВ' // снять
                    ) {
                        if (ending.ending && ending.ending !== 'undefined') {
                            return new RusVerb(this.stem2 + ending.ending, this, morphSigns);
                        }
                    }
                    if (morphSigns.tense === types_1.RusTense.Past && this.conjZ === '14c(1)СВ') { // принять
                        if (ending.ending && ending.ending !== 'undefined') {
                            return new RusVerb(this.stem2 + ending.ending, this, morphSigns);
                        }
                    }
                    if (morphSigns.mood === types_1.RusMood.Impr && this.conjZ !== '4c-тСВ' && this.conjZ !== '14c(1)СВ') {
                        if (ending.ending && ending.ending !== 'undefined') {
                            return new RusVerb(this.stem2 + ending.ending, this, morphSigns);
                        }
                        if (morphSigns.singular) {
                            return new RusVerb(this.stem2, this, morphSigns);
                        }
                        else {
                            return new RusVerb(this.stem2 + 'те', this, morphSigns);
                        }
                    }
                }
                if (this.stem1
                    && ending.ending
                    &&
                        (this.conjZ === '14b/cСВ' // донять
                            ||
                                !(utility_1.isRusConsonant(ending.ending, 'first') && utility_1.isRusConsonant(this.stem1, 'last')) // они тянут
                        )
                    &&
                        ((this.conjZ !== '4a-т' // тратить
                            &&
                                this.conjZ !== '4a-тСВ' // выразить
                            &&
                                this.conjZ !== '4a-тX' // шкодить
                            &&
                                this.conjZ !== '4a((3))-тСВ' // выкрасить
                            &&
                                this.conjZ !== '4b-т' // щадить
                            &&
                                this.conjZ !== '4c-т-ся' // катиться
                            &&
                                this.conjZ !== '4c-тСВ' // засветить
                            &&
                                this.conjZ !== '5a-д-ся' // видеться
                            &&
                                this.conjZ !== '5a-т' // видеть
                            &&
                                this.conjZ !== '5b-т' // пыхтеть
                            &&
                                this.conjZ !== '5b-т-ся' // глядеться
                            &&
                                this.conjZ !== '5b-т-сяСВ' // вглядеться
                            &&
                                this.conjZ !== '5b-тСВ' // просвистеть
                            &&
                                this.conjZ !== '5b/c' // спать
                            &&
                                this.conjZ !== '5c-т' // вертеть
                            &&
                                this.conjZ !== '6a^' // сыпать
                            &&
                                (this.conjZ !== '5b-ж' // бежать
                                    ||
                                        (this.conjZ === '5b-ж'
                                            &&
                                                (morphSigns.mood === types_1.RusMood.Impr
                                                    ||
                                                        (morphSigns.person === 3 && !morphSigns.singular))))
                            &&
                                (this.conjZ !== '12a' // рыть
                                    ||
                                        (this.conjZ === '12a'
                                            &&
                                                morphSigns.tense !== types_1.RusTense.Past))
                            &&
                                (this.conjZ !== '11*b/c"-сяСВ'
                                    ||
                                        (this.conjZ === '11*b/c"-сяСВ' // спиться
                                            &&
                                                morphSigns.mood !== types_1.RusMood.Impr)))
                            ||
                                (morphSigns.person === 1
                                    &&
                                        morphSigns.singular))
                    &&
                        (morphSigns.tense === types_1.RusTense.Pres
                            ||
                                morphSigns.tense === types_1.RusTense.Futr
                            ||
                                morphSigns.tense === undefined)) {
                    return new RusVerb(this.stem1 + ending.ending, this, morphSigns);
                }
                return new RusVerb(this.stem + ending.ending, this, morphSigns);
            }
        }
        throw 'Conjugation \'' + this.conjZ + '\' ending not found';
    };
    RusVerbLexeme.prototype.getWordForms = function () {
        var wordForms = [];
        wordForms.push(this.getWordForm({ infn: true }));
        wordForms.push(this.getWordForm({ tense: types_1.RusTense.Past, singular: true, gender: types_1.RusGender.Masc, mood: types_1.RusMood.Indc }));
        wordForms.push(this.getWordForm({ tense: types_1.RusTense.Past, singular: true, gender: types_1.RusGender.Femn, mood: types_1.RusMood.Indc }));
        if (this.hasImprMood()) {
            wordForms.push(this.getWordForm({ singular: true, mood: types_1.RusMood.Impr, involvement: types_1.Involvement.Excl }));
        }
        wordForms.push(this.getWordForm({ tense: types_1.RusTense.Past, singular: true, gender: types_1.RusGender.Neut, mood: types_1.RusMood.Indc }));
        wordForms.push(this.getWordForm({ tense: types_1.RusTense.Past, singular: false, mood: types_1.RusMood.Indc }));
        if (this.hasImprMood()) {
            wordForms.push(this.getWordForm({ singular: false, mood: types_1.RusMood.Impr, involvement: types_1.Involvement.Excl }));
        }
        if (this.aspect === types_1.RusAspect.Perf) {
            wordForms.push(this.getWordForm({ tense: types_1.RusTense.Futr, singular: true, person: 1, mood: types_1.RusMood.Indc }));
            wordForms.push(this.getWordForm({ tense: types_1.RusTense.Futr, singular: true, person: 2, mood: types_1.RusMood.Indc }));
            wordForms.push(this.getWordForm({ tense: types_1.RusTense.Futr, singular: true, person: 3, mood: types_1.RusMood.Indc }));
            wordForms.push(this.getWordForm({ tense: types_1.RusTense.Futr, singular: false, person: 1, mood: types_1.RusMood.Indc }));
            wordForms.push(this.getWordForm({ tense: types_1.RusTense.Futr, singular: false, person: 2, mood: types_1.RusMood.Indc }));
            wordForms.push(this.getWordForm({ tense: types_1.RusTense.Futr, singular: false, person: 3, mood: types_1.RusMood.Indc }));
        }
        else {
            wordForms.push(this.getWordForm({ tense: types_1.RusTense.Pres, singular: true, person: 1, mood: types_1.RusMood.Indc }));
            wordForms.push(this.getWordForm({ tense: types_1.RusTense.Pres, singular: true, person: 2, mood: types_1.RusMood.Indc }));
            wordForms.push(this.getWordForm({ tense: types_1.RusTense.Pres, singular: true, person: 3, mood: types_1.RusMood.Indc }));
            wordForms.push(this.getWordForm({ tense: types_1.RusTense.Pres, singular: false, person: 1, mood: types_1.RusMood.Indc }));
            wordForms.push(this.getWordForm({ tense: types_1.RusTense.Pres, singular: false, person: 2, mood: types_1.RusMood.Indc }));
            wordForms.push(this.getWordForm({ tense: types_1.RusTense.Pres, singular: false, person: 3, mood: types_1.RusMood.Indc }));
        }
        return wordForms;
    };
    return RusVerbLexeme;
}(morphology_1.VerbLexeme));
exports.RusVerbLexeme = RusVerbLexeme;
exports.RusVerbLexemes = rusVerbsData_1.rusVerbs.map(function (v) { return new RusVerbLexeme(v.stem, v.stem1, v.stem2, v.aspect, v.transitivity, v.conjZ); });
var RusVerb = /** @class */ (function (_super) {
    __extends(RusVerb, _super);
    function RusVerb(word, lexeme, morphSigns) {
        var _this = _super.call(this, word, lexeme) || this;
        _this.infn = morphSigns.infn ? true : false;
        _this.tense = morphSigns.tense;
        _this.singular = morphSigns.singular;
        _this.gender = morphSigns.gender;
        _this.person = morphSigns.person;
        _this.mood = morphSigns.mood;
        _this.involvement = morphSigns.involvement;
        return _this;
    }
    RusVerb.prototype.getDisplayText = function () {
        var lexeme = this.lexeme;
        var stem = this.word.startsWith(lexeme.stem) ? lexeme.stem :
            (this.word.startsWith(lexeme.stem1) ? lexeme.stem1 :
                (this.word.startsWith(lexeme.stem2) ? lexeme.stem2 : ''));
        var divided = stem + (this.word === stem ? '' : '-' + this.word.slice(stem.length - this.word.length));
        var tran = lexeme.transitivity === types_1.Transitivity.Tran ? 'перех' : 'неперех';
        var aspect = lexeme.aspect === types_1.RusAspect.Perf ? 'сов' : 'несов';
        var basic = (divided !== this.word ? divided + '; ' : '') + 'гл; ' + tran + '; ' +
            aspect + '; спр: ' + lexeme.conjZ + '; ';
        if (this.infn) {
            return basic + 'инфн';
        }
        else {
            var num = this.singular ? 'ед.ч.; ' : 'мн.ч.; ';
            var tense = '';
            switch (this.tense) {
                case types_1.RusTense.Past:
                    tense = 'прош. вр.; ';
                    break;
                case types_1.RusTense.Pres:
                    tense = 'наст. вр.; ';
                    break;
                case types_1.RusTense.Futr:
                    tense = 'будущ. вр.; ';
                    break;
                default:
            }
            var gender = '';
            switch (this.gender) {
                case types_1.RusGender.Masc:
                    gender = 'м.р.; ';
                    break;
                case types_1.RusGender.Femn:
                    gender = 'ж.р.; ';
                    break;
                case types_1.RusGender.Neut:
                    gender = 'н.р.; ';
                    break;
                default:
            }
            var person = '';
            switch (this.person) {
                case 1:
                    person = '1-е л.; ';
                    break;
                case 2:
                    person = '2-е л.; ';
                    break;
                case 3:
                    person = '3-е л.; ';
                    break;
                default:
            }
            var mood = '';
            switch (this.mood) {
                case types_1.RusMood.Impr:
                    mood = 'повелит.';
                    break;
                default:
            }
            return basic + tense + num + gender + person + mood;
        }
    };
    RusVerb.prototype.getSignature = function () {
        var lexeme = this.lexeme;
        var tran = lexeme.transitivity === types_1.Transitivity.Tran ? 'Tran' : 'Intr';
        var aspect = lexeme.aspect === types_1.RusAspect.Perf ? 'Perf' : 'Impf';
        if (this.infn) {
            return 'INFN' + tran + aspect;
        }
        else {
            var num = this.singular ? 'Sing' : 'Plur';
            var tense = typeof this.tense === 'undefined' ? '' : types_1.ShortTenseNames[this.tense];
            var gender = typeof this.gender === 'undefined' ? '' : types_1.ShortGenderNames[this.gender];
            var person = typeof this.person === 'undefined' ? '' : this.person + 'per';
            var mood = typeof this.mood === 'undefined' ? '' : types_1.ShortMoodNames[this.mood];
            return 'VERB' + tran + aspect + tense + num + gender + person + mood;
        }
    };
    return RusVerb;
}(morphology_1.Verb));
exports.RusVerb = RusVerb;
//# sourceMappingURL=rusVerb.js.map