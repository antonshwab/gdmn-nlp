"use strict";
/** Parse word from open corpora dictionary and returns morphological signs */
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function parseWord(line) {
    const arr = line.replace(/\s/g, ',').replace(/,,/g, ',').split(',');
    var pos;
    let aspect;
    let transitivity;
    let tense;
    let singular;
    let gender;
    let person;
    let mood;
    let involvement;
    for (let i = 2; i < arr.length; i++) {
        switch (arr[i]) {
            case 'VERB':
                pos = 'VERB';
                break;
            case 'perf':
                aspect = types_1.RusAspect.Perf;
                break;
            case 'impf':
                aspect = types_1.RusAspect.Impf;
                break;
            case 'tran':
                transitivity = types_1.Transitivity.Tran;
                break;
            case 'intr':
                transitivity = types_1.Transitivity.Intr;
                break;
            case 'past':
                tense = types_1.RusTense.Past;
                break;
            case 'pres':
                tense = types_1.RusTense.Pres;
                break;
            case 'futr':
                tense = types_1.RusTense.Futr;
                break;
            case 'sing':
                singular = true;
                break;
            case 'plur':
                singular = false;
                break;
            case 'masc':
                gender = types_1.RusGender.Masc;
                break;
            case 'femn':
                gender = types_1.RusGender.Femn;
                break;
            case 'neut':
                gender = types_1.RusGender.Neut;
                break;
            case 'indc':
                mood = types_1.RusMood.Indc;
                break;
            case 'impr':
                mood = types_1.RusMood.Impr;
                break;
            case 'excl':
                involvement = types_1.Involvement.Excl;
                break;
            case '1per':
                person = 1;
                break;
            case '2per':
                person = 2;
                break;
            case '3per':
                person = 3;
                break;
            default:
                throw 'Unknown morphology sign';
        }
    }
    return ({
        word: arr[0],
        pos,
        aspect,
        transitivity,
        tense,
        singular,
        gender,
        person,
        mood,
        involvement
    });
}
exports.parseWord = parseWord;
//# sourceMappingURL=parseOpCorpora.js.map