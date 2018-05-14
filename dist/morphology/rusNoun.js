"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const rusNounEndings_1 = require("./rusNounEndings");
const morphology_1 = require("./morphology");
const rusNounsData_1 = require("./rusNounsData");
class RusNounLexeme extends morphology_1.NounLexeme {
    constructor(stem, stem1, stem2, animacy, gender, declension, declensionZ) {
        super(stem, stem1, stem2);
        this.animate = animacy;
        this.gender = gender;
        this.declension = declension;
        this.declensionZ = declensionZ;
    }
    getWordForm(morphSigns) {
        const { c, singular } = morphSigns;
        const ending = rusNounEndings_1.RusDeclensionZEndings.find((e) => e.declensionZ === this.declensionZ &&
            e.gender === this.gender && e.animate === this.animate);
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
    }
    hasPlural() {
        const ending = rusNounEndings_1.RusDeclensionZEndings.find((e) => e.declensionZ === this.declensionZ &&
            e.gender === this.gender && e.animate === this.animate);
        return typeof ending !== 'undefined' && ending.plural.length > 0;
    }
    getWordForms() {
        const wordForms = [];
        for (let c = types_1.RusCase.Nomn; c <= types_1.RusCase.Loct; c++) {
            wordForms.push(this.getWordForm({ c, singular: true }));
        }
        if (this.hasPlural()) {
            for (let c = types_1.RusCase.Nomn; c <= types_1.RusCase.Loct; c++) {
                wordForms.push(this.getWordForm({ c, singular: false }));
            }
        }
        return wordForms;
    }
}
exports.RusNounLexeme = RusNounLexeme;
exports.RusNounLexemes = rusNounsData_1.rusNouns.map((n) => new RusNounLexeme(n.stem, n.stem1, n.stem2, n.animate, n.gender, n.declension, n.declensionZ));
class RusNoun extends morphology_1.Noun {
    constructor(word, lexeme, grammCase, singular) {
        super(word, lexeme);
        this.grammCase = grammCase;
        this.singular = singular;
    }
    getDisplayText() {
        const lexeme = this.lexeme;
        const stem = this.word.startsWith(lexeme.stem) ? lexeme.stem :
            (this.word.startsWith(lexeme.stem1) ? lexeme.stem1 :
                (this.word.startsWith(lexeme.stem2) ? lexeme.stem2 : ''));
        const divided = stem + (this.word === stem ? '' : '-' + this.word.slice(stem.length - this.word.length));
        const decl = lexeme.declension === 1 ? '1-е скл.' :
            (lexeme.declension === 2 ? '2-е скл.' : '3-е скл.');
        const num = this.singular ? 'ед.ч.' : 'мн.ч.';
        const cs = types_1.RusCaseNames[this.grammCase];
        return this.word + '; ' + (divided !== this.word ? divided + '; ' : '') +
            'сущ; ' + (lexeme.animate ? 'од; ' : 'неод; ') +
            types_1.RusGenderNames[lexeme.gender] + ' род; ' +
            decl + ' (' + lexeme.declensionZ + '); ' +
            num + '; ' + cs;
    }
    static getSignature(animate, gender, singular, grammCase) {
        const an = animate ? 'Anim' : 'Inan';
        const gd = types_1.ShortGenderNames[gender];
        const num = singular ? 'Sing' : 'Plur';
        const cs = types_1.ShortCaseNames[grammCase];
        return 'NOUN' + an + gd + num + cs;
    }
    getSignature() {
        const lexeme = this.lexeme;
        return RusNoun.getSignature(lexeme.animate, lexeme.gender, this.singular, this.grammCase);
    }
}
exports.RusNoun = RusNoun;
//# sourceMappingURL=rusNoun.js.map