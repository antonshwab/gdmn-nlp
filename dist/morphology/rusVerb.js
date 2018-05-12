"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const morphology_1 = require("./morphology");
const rusVerbsData_1 = require("./rusVerbsData");
const rusVerbEndings_1 = require("./rusVerbEndings");
const utility_1 = require("./utility");
class RusVerbLexeme extends morphology_1.VerbLexeme {
    constructor(stem, stem1, stem2, aspect, transitivity, conjZ) {
        super(stem, stem1, stem2);
        this.aspect = aspect;
        this.transitivity = transitivity;
        this.conjZ = conjZ;
        this.conjZEnding = rusVerbEndings_1.RusConjugationZEndings.find((c) => c.conjZ === this.conjZ && c.aspect === this.aspect && c.transitivity === this.transitivity);
    }
    hasImprMood() {
        if (!this.conjZEnding) {
            throw 'Conjugation \'' + this.conjZ + '\' not found';
        }
        return (typeof this.conjZEnding.endings.find(e => e.mood === types_1.RusMood.Impr) !== 'undefined');
    }
    getWordForm(morphSigns) {
        if (morphSigns.infn) {
            if (!this.conjZEnding) {
                throw 'Conjugation \'' + this.conjZ + '\' not found';
            }
            let wrd;
            if (this.conjZ.indexOf('-ся') !== -1) {
                wrd = this.stem + this.conjZEnding.suffix + 'ся';
            }
            else {
                wrd = this.stem + this.conjZEnding.suffix;
            }
            return new RusVerb(wrd, this, { infn: true });
        }
        if (this.conjZEnding) {
            const ending = this.conjZEnding.endings.find(e => e.tense === morphSigns.tense
                && e.person === morphSigns.person
                && e.gender === morphSigns.gender
                && e.singular === morphSigns.singular
                && e.mood === morphSigns.mood
                && e.involvement === morphSigns.involvement);
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
    }
    getWordForms() {
        const wordForms = [];
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
    }
}
exports.RusVerbLexeme = RusVerbLexeme;
exports.RusVerbLexemes = rusVerbsData_1.rusVerbs.map((v) => new RusVerbLexeme(v.stem, v.stem1, v.stem2, v.aspect, v.transitivity, v.conjZ));
class RusVerb extends morphology_1.Verb {
    constructor(word, lexeme, morphSigns) {
        super(word, lexeme);
        this.infn = morphSigns.infn ? true : false;
        this.tense = morphSigns.tense;
        this.singular = morphSigns.singular;
        this.gender = morphSigns.gender;
        this.person = morphSigns.person;
        this.mood = morphSigns.mood;
        this.involvement = morphSigns.involvement;
    }
    getDisplayText() {
        const lexeme = this.lexeme;
        const stem = this.word.startsWith(lexeme.stem) ? lexeme.stem :
            (this.word.startsWith(lexeme.stem1) ? lexeme.stem1 :
                (this.word.startsWith(lexeme.stem2) ? lexeme.stem2 : ''));
        const divided = stem + (this.word === stem ? '' : '-' + this.word.slice(stem.length - this.word.length));
        const tran = lexeme.transitivity === types_1.Transitivity.Tran ? 'перех' : 'неперех';
        const aspect = lexeme.aspect === types_1.RusAspect.Perf ? 'сов' : 'несов';
        const basic = (divided !== this.word ? divided + '; ' : '') + 'гл; ' + tran + '; ' +
            aspect + '; спр: ' + lexeme.conjZ + '; ';
        if (this.infn) {
            return basic + 'инфн';
        }
        else {
            const num = this.singular ? 'ед.ч.; ' : 'мн.ч.; ';
            let tense = '';
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
            let gender = '';
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
            let person = '';
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
            let mood = '';
            switch (this.mood) {
                case types_1.RusMood.Impr:
                    mood = 'повелит.';
                    break;
                default:
            }
            return basic + tense + num + gender + person + mood;
        }
    }
    getSignature() {
        const lexeme = this.lexeme;
        const tran = lexeme.transitivity === types_1.Transitivity.Tran ? 'Tran' : 'Intr';
        const aspect = lexeme.aspect === types_1.RusAspect.Perf ? 'Perf' : 'Impf';
        if (this.infn) {
            return 'INFN' + tran + aspect;
        }
        else {
            const num = this.singular ? 'Sing' : 'Plur';
            const tense = typeof this.tense === 'undefined' ? '' : types_1.ShortTenseNames[this.tense];
            const gender = typeof this.gender === 'undefined' ? '' : types_1.ShortGenderNames[this.gender];
            const person = typeof this.person === 'undefined' ? '' : this.person + 'per';
            const mood = typeof this.mood === 'undefined' ? '' : types_1.ShortMoodNames[this.mood];
            return 'VERB' + tran + aspect + tense + num + gender + person + mood;
        }
    }
}
exports.RusVerb = RusVerb;
//# sourceMappingURL=rusVerb.js.map