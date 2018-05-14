"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const morphology_1 = require("./morphology");
const rusAdjectiveEndings_1 = require("./rusAdjectiveEndings");
const rusAdjectivesData_1 = require("./rusAdjectivesData");
class RusAdjectiveLexeme extends morphology_1.AdjectiveLexeme {
    constructor(stem, stem1, stem2, category, declensionZ) {
        super(stem, stem1, stem2);
        this.category = category;
        this.declensionZ = declensionZ;
    }
    hasShortForm() {
        if (this.category !== types_1.RusAdjectiveCategory.Qual
            || this.declensionZ === '4a'
            || this.declensionZ === '6a'
            || this.declensionZ.slice(-2) === 'ся') {
            return false;
        }
        else {
            return true;
        }
    }
    getWordForm(morphSigns) {
        const declZEnding = rusAdjectiveEndings_1.RusDeclensionAdjectiveZEndings.find((e) => e.declensionZ === this.declensionZ);
        if (!declZEnding) {
            throw 'Unknown declensionZ ending';
        }
        if (morphSigns.short) {
            if (!this.hasShortForm()) {
                throw 'No short form';
            }
            let shortEnding = '';
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
            const ending = declZEnding.endings.find(e => e.c === morphSigns.c
                && e.gender === morphSigns.gender
                && e.singular === morphSigns.singular
                && e.animate === morphSigns.animate);
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
    }
    getWordForms() {
        const wordForms = [];
        for (let c = types_1.RusCase.Nomn; c <= types_1.RusCase.Loct; c++) {
            if (c === types_1.RusCase.Accs) {
                wordForms.push(this.getWordForm({ c, singular: true, gender: types_1.RusGender.Masc, animate: true }));
                wordForms.push(this.getWordForm({ c, singular: true, gender: types_1.RusGender.Masc, animate: false }));
                wordForms.push(this.getWordForm({ c, singular: true, gender: types_1.RusGender.Femn }));
                wordForms.push(this.getWordForm({ c, singular: true, gender: types_1.RusGender.Neut }));
                wordForms.push(this.getWordForm({ c, singular: false, animate: true }));
                wordForms.push(this.getWordForm({ c, singular: false, animate: false }));
            }
            else {
                wordForms.push(this.getWordForm({ c, singular: true, gender: types_1.RusGender.Masc }));
                wordForms.push(this.getWordForm({ c, singular: true, gender: types_1.RusGender.Femn }));
                wordForms.push(this.getWordForm({ c, singular: true, gender: types_1.RusGender.Neut }));
                wordForms.push(this.getWordForm({ c, singular: false }));
            }
        }
        if (this.hasShortForm()) {
            wordForms.push(this.getWordForm({ singular: true, gender: types_1.RusGender.Masc, short: true }));
            wordForms.push(this.getWordForm({ singular: true, gender: types_1.RusGender.Femn, short: true }));
            wordForms.push(this.getWordForm({ singular: true, gender: types_1.RusGender.Neut, short: true }));
            wordForms.push(this.getWordForm({ singular: false, short: true }));
        }
        return wordForms;
    }
}
exports.RusAdjectiveLexeme = RusAdjectiveLexeme;
exports.RusAdjectiveLexemes = rusAdjectivesData_1.rusAdjectives.map((v) => new RusAdjectiveLexeme(v.stem, v.stem1, v.stem2, v.category, v.declensionZ));
class RusAdjective extends morphology_1.Adjective {
    constructor(word, lexeme, morphSigns) {
        super(word, lexeme);
        this.singular = morphSigns.singular;
        this.gender = morphSigns.gender;
        this.grammCase = morphSigns.c;
        this.animate = morphSigns.animate;
        this.short = morphSigns.short;
    }
    getDisplayText() {
        const lexeme = this.lexeme;
        const stem = this.word.startsWith(lexeme.stem) ? lexeme.stem :
            (this.word.startsWith(lexeme.stem1) ? lexeme.stem1 :
                (this.word.startsWith(lexeme.stem2) ? lexeme.stem2 : ''));
        const divided = stem + (this.word === stem ? '' : '-' + this.word.slice(stem.length - this.word.length));
        const num = this.singular ? 'ед.ч.' : 'мн.ч.';
        const cs = typeof this.grammCase !== 'undefined' ? types_1.RusCaseNames[this.grammCase] : '';
        const anim = typeof this.animate === 'undefined' ? '' : (this.animate ? 'од; ' : 'неод; ');
        const gender = typeof this.gender === 'undefined' ? '' : types_1.RusGenderNames[this.gender] + ' род; ';
        const short = this.short ? 'кратк; ' : '';
        return this.word + '; ' + (divided !== this.word ? divided + '; ' : '') +
            types_1.RusAdjectiveCategoryNames[lexeme.category] + ' прил; ' + anim + short +
            gender +
            ' скл. ' + lexeme.declensionZ + '; ' +
            num + '; ' + cs;
    }
    static getSignature(short, category, gender, singular, grammCase) {
        const sh = short ? 'ADJS' : 'ADJF';
        const ct = types_1.ShortAdjectiveCategoryNames[category];
        const gd = typeof gender === 'undefined' ? '' : types_1.ShortGenderNames[gender];
        const num = singular ? 'Sing' : 'Plur';
        const cs = typeof grammCase !== 'undefined' ? types_1.ShortCaseNames[grammCase] : '';
        return sh + ct + gd + num + cs;
    }
    getSignature() {
        const lexeme = this.lexeme;
        return RusAdjective.getSignature(this.short, lexeme.category, this.gender, this.singular, this.grammCase);
    }
}
exports.RusAdjective = RusAdjective;
//# sourceMappingURL=rusAdjective.js.map