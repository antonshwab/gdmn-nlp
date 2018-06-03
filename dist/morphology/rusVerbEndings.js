"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
exports.RusConjugationZEndings = [
    // делать (дела)
    {
        conjZ: '1a',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ть',
        endings: [
            // делаю
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // делаем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // делаешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // делаете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // делает
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // делают
            {
                ending: 'ют',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // делал
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // делала
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // делало
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // делали
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // делай
            {
                ending: 'й',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // делайте
            {
                ending: 'йте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // стачать (стача)
    {
        conjZ: '1aСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ть',
        endings: [
            // стачал
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // стачала
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // стачало
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // стачали
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // стачаю
            {
                ending: 'ю',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // стачаем
            {
                ending: 'ем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // стачаешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // стачаете
            {
                ending: 'ете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // стачает
            {
                ending: 'ет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // стачают
            {
                ending: 'ют',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // стачаем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // стачаемте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // стачай
            {
                ending: 'й',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // стачайте
            {
                ending: 'йте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // делаться (дела)
    {
        conjZ: '1a-ся',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ть',
        endings: [
            // делаюсь
            {
                ending: 'юсь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // делаемся
            {
                ending: 'емся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // делаешься
            {
                ending: 'ешься',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // делаетесь
            {
                ending: 'етесь',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // делается
            {
                ending: 'ется',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // делаются
            {
                ending: 'ются',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // делался
            {
                ending: 'лся',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // делалась
            {
                ending: 'лась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // делалось
            {
                ending: 'лось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // делались
            {
                ending: 'лись',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // делайся
            {
                ending: 'йся',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // делайтесь
            {
                ending: 'йтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // примелькаться (примелька)
    {
        conjZ: '1a-сяСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ть',
        endings: [
            // примелькался
            {
                ending: 'лся',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // примелькалась
            {
                ending: 'лась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // примелькалось
            {
                ending: 'лось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // примелькались
            {
                ending: 'лись',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // примелькаюсь
            {
                ending: 'юсь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // примелькаемся
            {
                ending: 'емся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // примелькаешься
            {
                ending: 'ешься',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // примелькаетесь
            {
                ending: 'етесь',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // примелькается
            {
                ending: 'ется',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // примелькаются
            {
                ending: 'ются',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // примелькаемся
            {
                ending: 'емся',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // примелькаемтесь
            {
                ending: 'емтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // примелькайся
            {
                ending: 'йся',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // примелькайтесь
            {
                ending: 'йтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // продемонстрировать (продемонстрирова,продемонстриру)
    {
        conjZ: '2a',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ть',
        endings: [
            // продемонстрировал
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // продемонстрировала
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // продемонстрировало
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // продемонстрировали
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // продемонстрирую
            {
                ending: 'ю',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // продемонстрируем
            {
                ending: 'ем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // продемонстрируешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // продемонстрируете
            {
                ending: 'ете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // продемонстрирует
            {
                ending: 'ет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // продемонстрируют
            {
                ending: 'ют',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // продемонстрируем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // продемонстрируемте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // продемонстрируй
            {
                ending: 'й',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // продемонстрируйте
            {
                ending: 'йте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // требовать (требова,требу)
    {
        conjZ: '2a',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ть',
        endings: [
            // требую
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // требуем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // требуешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // требуете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // требует
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // требуют
            {
                ending: 'ют',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // требовал
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // требовала
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // требовало
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // требовали
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // требуй
            {
                ending: 'й',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // требуйте
            {
                ending: 'йте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // жевать (жев,жу)
    {
        conjZ: '2b',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ать',
        endings: [
            // жую
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // жуем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // жуешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // жуете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // жует
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // жуют
            {
                ending: 'ют',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // жевал
            {
                ending: 'ал',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // жевала
            {
                ending: 'ала',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // жевало
            {
                ending: 'ало',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // жевали
            {
                ending: 'али',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // жуй
            {
                ending: 'й',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // жуйте
            {
                ending: 'йте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // придвинуть (придвин)
    {
        conjZ: '3a(2)СВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'уть',
        endings: [
            // придвинул
            {
                ending: 'ул',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // придвинула
            {
                ending: 'ула',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // придвинуло
            {
                ending: 'уло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // придвинули
            {
                ending: 'ули',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // придвину
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // придвинем
            {
                ending: 'ем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // придвинешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // придвинете
            {
                ending: 'ете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // придвинет
            {
                ending: 'ет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // придвинут
            {
                ending: 'ут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // придвинем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // придвинемте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // придвинь
            {
                ending: 'ь',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // придвиньте
            {
                ending: 'ьте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // глянуть (глян)
    {
        conjZ: '3a-гСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'уть',
        endings: [
            // глянул
            {
                ending: 'ул',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // глянула
            {
                ending: 'ула',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // глянуло
            {
                ending: 'уло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // глянули
            {
                ending: 'ули',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // гляну
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // глянем
            {
                ending: 'ем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // глянешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // глянете
            {
                ending: 'ете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // глянет
            {
                ending: 'ет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // глянут
            {
                ending: 'ут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // глянем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // глянемте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // глянь
            {
                ending: 'ь',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // гляньте
            {
                ending: 'ьте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // гнуть (гн)
    {
        conjZ: '3b',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'уть',
        endings: [
            // гну
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // гнем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // гнешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // гнете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // гнет
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // гнут
            {
                ending: 'ут',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // гнул
            {
                ending: 'ул',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // гнула
            {
                ending: 'ула',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // гнуло
            {
                ending: 'уло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // гнули
            {
                ending: 'ули',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // гни
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // гните
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // улепетнуть (улепетн)
    {
        conjZ: '3bСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'уть',
        endings: [
            // улепетнул
            {
                ending: 'ул',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // улепетнула
            {
                ending: 'ула',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // улепетнуло
            {
                ending: 'уло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // улепетнули
            {
                ending: 'ули',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // улепетну
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // улепетнем
            {
                ending: 'ем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // улепетнешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // улепетнете
            {
                ending: 'ете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // улепетнет
            {
                ending: 'ет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // улепетнут
            {
                ending: 'ут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // улепетнем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // улепетнемте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // улепетни
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // улепетните
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // отчеркнуть (отчеркн)
    {
        conjZ: '3b-еСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'уть',
        endings: [
            // отчеркнул
            {
                ending: 'ул',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // отчеркнула
            {
                ending: 'ула',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // отчеркнуло
            {
                ending: 'уло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // отчеркнули
            {
                ending: 'ули',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // отчеркну
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // отчеркнем
            {
                ending: 'ем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // отчеркнешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // отчеркнете
            {
                ending: 'ете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // отчеркнет
            {
                ending: 'ет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // отчеркнут
            {
                ending: 'ут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // отчеркнем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // отчеркнемте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // отчеркни
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // отчеркните
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // нагнуться (нагн)
    {
        conjZ: '3b-сяСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'уть',
        endings: [
            // нагнулся
            {
                ending: 'улся',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // нагнулась
            {
                ending: 'улась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // нагнулось
            {
                ending: 'улось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // нагнулись
            {
                ending: 'улись',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // нагнусь
            {
                ending: 'усь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // нагнемся
            {
                ending: 'емся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // нагнешься
            {
                ending: 'ешься',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // нагнетесь
            {
                ending: 'етесь',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // нагнется
            {
                ending: 'ется',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // нагнутся
            {
                ending: 'утся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // нагнемся
            {
                ending: 'емся',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // нагнемтесь
            {
                ending: 'емтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // нагнись
            {
                ending: 'ись',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // нагнитесь
            {
                ending: 'итесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // тянуть (тяну,тян)
    {
        conjZ: '3c',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ть',
        endings: [
            // тяну
            {
                ending: '',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // тянем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // тянешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // тянете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // тянет
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // тянут
            {
                ending: 'т',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // тянул
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // тянула
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // тянуло
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // тянули
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // тяни
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // тяните
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // стянуть (стян)
    {
        conjZ: '3cСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'уть',
        endings: [
            // стянул
            {
                ending: 'ул',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // стянула
            {
                ending: 'ула',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // стянуло
            {
                ending: 'уло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // стянули
            {
                ending: 'ули',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // стяну
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // стянем
            {
                ending: 'ем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // стянешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // стянете
            {
                ending: 'ете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // стянет
            {
                ending: 'ет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // стянут
            {
                ending: 'ут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // стянем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // стянемте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // стяни
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // стяните
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // тянуться (тяну,тян)
    {
        conjZ: '3c-ся',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ть',
        endings: [
            // тянусь
            {
                ending: 'сь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // тянемся
            {
                ending: 'емся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // тянешься
            {
                ending: 'ешься',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // тянетесь
            {
                ending: 'етесь',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // тянется
            {
                ending: 'ется',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // тянутся
            {
                ending: 'тся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // тянулся
            {
                ending: 'лся',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // тянулась
            {
                ending: 'лась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // тянулось
            {
                ending: 'лось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // тянулись
            {
                ending: 'лись',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // тянись
            {
                ending: 'ись',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // тянитесь
            {
                ending: 'итесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // киснуть (кис)
    {
        conjZ: '3°a',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'нуть',
        endings: [
            // кисну
            {
                ending: 'ну',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // киснем
            {
                ending: 'нем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // киснешь
            {
                ending: 'нешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // киснете
            {
                ending: 'нете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // киснет
            {
                ending: 'нет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // киснут
            {
                ending: 'нут',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // кис
            {
                ending: '',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // кисла
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // кисло
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // кисли
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // кисни
            {
                ending: 'ни',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // кисните
            {
                ending: 'ните',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // издохнуть (издох)
    {
        conjZ: '3°aСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'нуть',
        endings: [
            // издох
            {
                ending: '',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // издохла
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // издохло
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // издохли
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // издохну
            {
                ending: 'ну',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // издохнем
            {
                ending: 'нем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // издохнешь
            {
                ending: 'нешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // издохнете
            {
                ending: 'нете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // издохнет
            {
                ending: 'нет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // издохнут
            {
                ending: 'нут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // издохнем
            {
                ending: 'нем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // издохнемте
            {
                ending: 'немте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // издохни
            {
                ending: 'ни',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // издохните
            {
                ending: 'ните',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // стынуть (сты)
    {
        conjZ: '3°a((5)(6))-г',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'нуть',
        endings: [
            // стыну
            {
                ending: 'ну',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // стынем
            {
                ending: 'нем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // стынешь
            {
                ending: 'нешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // стынете
            {
                ending: 'нете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // стынет
            {
                ending: 'нет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // стынут
            {
                ending: 'нут',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // стыл
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // стыла
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // стыло
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // стыли
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // стынь
            {
                ending: 'нь',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // стыньте
            {
                ending: 'ньте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // строить (стро)
    {
        conjZ: '4a',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // строю
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // строим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // строишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // строите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // строит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // строят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // строил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // строила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // строило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // строили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // строй
            {
                ending: 'й',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // стройте
            {
                ending: 'йте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // грабить (граб)
    {
        conjZ: '4a-б',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // граблю
            {
                ending: 'лю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // грабим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // грабишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // грабите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // грабит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // грабят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // грабил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // грабила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // грабило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // грабили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // грабь
            {
                ending: 'ь',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // грабьте
            {
                ending: 'ьте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // молвить (молв)
    {
        conjZ: '4a-б-с',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // молвил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // молвила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // молвило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // молвили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // молвлю
            {
                ending: 'лю',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // молвим
            {
                ending: 'им',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // молвишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // молвите
            {
                ending: 'ите',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // молвит
            {
                ending: 'ит',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // молвят
            {
                ending: 'ят',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // молвим
            {
                ending: 'им',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // молвимте
            {
                ending: 'имте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // молви
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // молвите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // вылепить (вылеп)
    {
        conjZ: '4a-б-сСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // вылепил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // вылепила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // вылепило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // вылепили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // вылеплю
            {
                ending: 'лю',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // вылепим
            {
                ending: 'им',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // вылепишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // вылепите
            {
                ending: 'ите',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // вылепит
            {
                ending: 'ит',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // вылепят
            {
                ending: 'ят',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // вылепим
            {
                ending: 'им',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // вылепимте
            {
                ending: 'имте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // вылепи
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // вылепите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // балаболить (балабол)
    {
        conjZ: '4a-л',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ить',
        endings: [
            // балаболю
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // балаболим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // балаболишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // балаболите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // балаболит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // балаболят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // балаболил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // балаболила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // балаболило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // балаболили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // балаболь
            {
                ending: 'ь',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // балабольте
            {
                ending: 'ьте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // бахвалиться (бахвал)
    {
        conjZ: '4a-л-ся',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ить',
        endings: [
            // бахвалюсь
            {
                ending: 'юсь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // бахвалимся
            {
                ending: 'имся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // бахвалишься
            {
                ending: 'ишься',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // бахвалитесь
            {
                ending: 'итесь',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // бахвалится
            {
                ending: 'ится',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // бахвалятся
            {
                ending: 'ятся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // бахвалился
            {
                ending: 'ился',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // бахвалилась
            {
                ending: 'илась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // бахвалилось
            {
                ending: 'илось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // бахвалились
            {
                ending: 'ились',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // бахвалься
            {
                ending: 'ься',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // бахвальтесь
            {
                ending: 'ьтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // смыслить (смысл)
    {
        conjZ: '4a-cc',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ить',
        endings: [
            // смыслю
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // смыслим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // смыслишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // смыслите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // смыслит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // смыслят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // смыслил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // смыслила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // смыслило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // смыслили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // смысли
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // смыслите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // вылепиться (вылеп)
    {
        conjZ: '4a-с-л-сяСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ить',
        endings: [
            // вылепился
            {
                ending: 'ился',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // вылепилась
            {
                ending: 'илась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // вылепилось
            {
                ending: 'илось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // вылепились
            {
                ending: 'ились',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // вылеплюсь
            {
                ending: 'люсь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // вылепимся
            {
                ending: 'имся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // вылепишься
            {
                ending: 'ишься',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // вылепитесь
            {
                ending: 'итесь',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // вылепится
            {
                ending: 'ится',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // вылепятся
            {
                ending: 'ятся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // вылепимся
            {
                ending: 'имся',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // вылепимтесь
            {
                ending: 'имтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // вылепись
            {
                ending: 'ись',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // вылепитесь
            {
                ending: 'итесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // тратить (трат,трач)
    {
        conjZ: '4a-т',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // трачу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // тратим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // тратишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // тратите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // тратит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // тратят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // тратил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // тратила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // тратило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // тратили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // трать
            {
                ending: 'ь',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // тратьте
            {
                ending: 'ьте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // выразить (выраз,выраж)
    {
        conjZ: '4a-тСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // выразил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // выразила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // выразило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // выразили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // выражу
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // выразим
            {
                ending: 'им',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // выразишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // выразите
            {
                ending: 'ите',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // выразит
            {
                ending: 'ит',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // выразят
            {
                ending: 'ят',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // выразим
            {
                ending: 'им',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // выразимте
            {
                ending: 'имте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // вырази
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // выразите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // шкодить (шкод,шкож)
    {
        conjZ: '4a-тX',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ить',
        endings: [
            // шкожу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // шкодим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // шкодишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // шкодите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // шкодит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // шкодят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // шкодил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // шкодила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // шкодило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // шкодили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // шкодь
            {
                ending: 'ь',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // шкодьте
            {
                ending: 'ьте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // множить (множ)
    {
        conjZ: '4a-ш',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // множу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // множим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // множишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // множите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // множит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // множат
            {
                ending: 'ат',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // множил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // множила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // множило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // множили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // множь
            {
                ending: 'ь',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // множьте
            {
                ending: 'ьте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // брезжить (брезж)
    {
        conjZ: '4a-ш-с',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ить',
        endings: [
            // брезжу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // брезжим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // брезжишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // брезжите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // брезжит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // брезжат
            {
                ending: 'ат',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // брезжил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // брезжила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // брезжило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // брезжили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // брезжи
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // брезжите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // выкрасить (выкрас,выкраш)
    {
        conjZ: '4a((3))-тСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // выкрасил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // выкрасила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // выкрасило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // выкрасили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // выкрашу
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // выкрасим
            {
                ending: 'им',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // выкрасишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // выкрасите
            {
                ending: 'ите',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // выкрасит
            {
                ending: 'ит',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // выкрасят
            {
                ending: 'ят',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // выкрасим
            {
                ending: 'им',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // выкрасимте
            {
                ending: 'имте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // выкрась
            {
                ending: 'ь',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // выкрасьте
            {
                ending: 'ьте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // плющить (плющ)
    {
        conjZ: '4a((3))-ш',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // плющу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // плющим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // плющишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // плющите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // плющит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // плющат
            {
                ending: 'ат',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // плющил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // плющила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // плющило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // плющили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // плющи
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // плющите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // расплющить (расплющ)
    {
        conjZ: '4a((3))-шСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // расплющил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // расплющила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // расплющило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // расплющили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // расплющу
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // расплющим
            {
                ending: 'им',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // расплющишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // расплющите
            {
                ending: 'ите',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // расплющит
            {
                ending: 'ит',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // расплющат
            {
                ending: 'ат',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // расплющим
            {
                ending: 'им',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // расплющимте
            {
                ending: 'имте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // расплющи
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // расплющьте
            {
                ending: 'ьте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // удалить (удал)
    {
        conjZ: '4b',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // удалил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // удалила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // удалило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // удалили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // удалю
            {
                ending: 'ю',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // удалим
            {
                ending: 'им',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // удалишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // удалите
            {
                ending: 'ите',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // удалит
            {
                ending: 'ит',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // удалят
            {
                ending: 'ят',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // удалим
            {
                ending: 'им',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // удалимте
            {
                ending: 'имте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // удали
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // удалите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // смолить (смол)
    {
        conjZ: '4b',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // смолю
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // смолим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // смолишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // смолите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // смолит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // смолят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // смолил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // смолила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // смолило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // смолили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // смоли
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // смолите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // крушить (круш)
    {
        conjZ: '4b-ш',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // крушу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // крушим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // крушишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // крушите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // крушит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // крушат
            {
                ending: 'ат',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // крушил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // крушила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // крушило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // крушили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // круши
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // крушите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // томить (том)
    {
        conjZ: '4b-б',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // томлю
            {
                ending: 'лю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // томим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // томишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // томите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // томит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // томят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // томил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // томила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // томило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // томили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // томи
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // томите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // щадить (щад,щаж)
    {
        conjZ: '4b-т',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // щажу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // щадим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // щадишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // щадите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // щадит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // щадят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // щадил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // щадила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // щадило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // щадили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // щади
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // щадите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // присоединиться (присоедин)
    {
        conjZ: '4b-сяСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ить',
        endings: [
            // присоединился
            {
                ending: 'ился',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // присоединилась
            {
                ending: 'илась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // присоединилось
            {
                ending: 'илось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // присоединились
            {
                ending: 'ились',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // присоединюсь
            {
                ending: 'юсь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // присоединимся
            {
                ending: 'имся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // присоединишься
            {
                ending: 'ишься',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // присоединитесь
            {
                ending: 'итесь',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // присоединится
            {
                ending: 'ится',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // присоединятся
            {
                ending: 'ятся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // присоединимся
            {
                ending: 'имся',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // присоединимтесь
            {
                ending: 'имтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // присоединись
            {
                ending: 'ись',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // присоединитесь
            {
                ending: 'итесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // хоронить (хорон)
    {
        conjZ: '4c',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // хороню
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // хороним
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // хоронишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // хороните
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // хоронит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // хоронят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // хоронил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // хоронила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // хоронило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // хоронили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // хорони
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // хороните
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // валить (вал)
    {
        conjZ: '4c(4)',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // валю
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // валим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // валишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // валите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // валит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // валят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // валил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // валила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // валило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // валили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // вали
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // валите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // любить (люб)
    {
        conjZ: '4c(4)-б',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // люблю
            {
                ending: 'лю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // любим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // любишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // любите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // любит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // любят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // любил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // любила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // любило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // любили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // люби
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // любите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // точить (точ)
    {
        conjZ: '4c-ш',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // точу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // точим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // точишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // точите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // точит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // точат
            {
                ending: 'ат',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // точил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // точила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // точило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // точили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // точи
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // точите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // насторожиться (насторож)
    {
        conjZ: '4c-ш-сяСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ить',
        endings: [
            // насторожился
            {
                ending: 'ился',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // насторожилась
            {
                ending: 'илась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // насторожилось
            {
                ending: 'илось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // насторожились
            {
                ending: 'ились',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // насторожусь
            {
                ending: 'усь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // насторожимся
            {
                ending: 'имся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // насторожишься
            {
                ending: 'ишься',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // насторожитесь
            {
                ending: 'итесь',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // насторожится
            {
                ending: 'ится',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // насторожатся
            {
                ending: 'атся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // насторожимся
            {
                ending: 'имся',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // насторожимтесь
            {
                ending: 'имтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // насторожись
            {
                ending: 'ись',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // насторожитесь
            {
                ending: 'итесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // ловить (лов)
    {
        conjZ: '4c-б',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // ловлю
            {
                ending: 'лю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // ловим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // ловишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // ловите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // ловит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // ловят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // ловил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // ловила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // ловило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // ловили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // лови
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // ловите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // уловить (улов)
    {
        conjZ: '4c-бСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // уловил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // уловила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // уловило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // уловили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // уловлю
            {
                ending: 'лю',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // уловим
            {
                ending: 'им',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // уловишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // уловите
            {
                ending: 'ите',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // уловит
            {
                ending: 'ит',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // уловят
            {
                ending: 'ят',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // уловим
            {
                ending: 'им',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // уловимте
            {
                ending: 'имте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // улови
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // уловите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // просить (прос,проc,прош)
    {
        conjZ: '4c-т',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // прошу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // просим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // просишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // просите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // просит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // просят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // просил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // просила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // просило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // просили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // проси
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // просите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // катиться (кат,кач)
    {
        conjZ: '4c-т-ся',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ить',
        endings: [
            // качусь
            {
                ending: 'усь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // катимся
            {
                ending: 'имся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // катишься
            {
                ending: 'ишься',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // катитесь
            {
                ending: 'итесь',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // катится
            {
                ending: 'ится',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // катятся
            {
                ending: 'ятся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // катился
            {
                ending: 'ился',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // катилась
            {
                ending: 'илась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // катилось
            {
                ending: 'илось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // катились
            {
                ending: 'ились',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // катись
            {
                ending: 'ись',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // катитесь
            {
                ending: 'итесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // засветить (засвече,засвет,засвеч)
    {
        conjZ: '4c-тСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // засветил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // засветила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // засветило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // засветили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // засвечу
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // засветим
            {
                ending: 'им',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // засветишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // засветите
            {
                ending: 'ите',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // засветит
            {
                ending: 'ит',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // засветят
            {
                ending: 'ят',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // засветим
            {
                ending: 'им',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // засветимте
            {
                ending: 'имте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // засвети
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // засветите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // взмолиться (взмол)
    {
        conjZ: '4c-сяСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ить',
        endings: [
            // взмолился
            {
                ending: 'ился',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // взмолилась
            {
                ending: 'илась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // взмолилось
            {
                ending: 'илось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // взмолились
            {
                ending: 'ились',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // взмолюсь
            {
                ending: 'юсь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // взмолимся
            {
                ending: 'имся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // взмолишься
            {
                ending: 'ишься',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // взмолитесь
            {
                ending: 'итесь',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // взмолится
            {
                ending: 'ится',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // взмолятся
            {
                ending: 'ятся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // взмолимся
            {
                ending: 'имся',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // взмолимтесь
            {
                ending: 'имтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // взмолись
            {
                ending: 'ись',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // взмолитесь
            {
                ending: 'итесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // видеться (вид,виж)
    {
        conjZ: '5a-д-ся',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'еть',
        endings: [
            // вижусь
            {
                ending: 'усь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // видимся
            {
                ending: 'имся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // видишься
            {
                ending: 'ишься',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // видитесь
            {
                ending: 'итесь',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // видится
            {
                ending: 'ится',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // видятся
            {
                ending: 'ятся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // виделся
            {
                ending: 'елся',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // виделась
            {
                ending: 'елась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // виделось
            {
                ending: 'елось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // виделись
            {
                ending: 'елись',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // видься
            {
                ending: 'ься',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // видьтесь
            {
                ending: 'ьтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // видеть (вид,виж)
    {
        conjZ: '5a-т',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'еть',
        endings: [
            // вижу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // видим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // видишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // видите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // видит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // видят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // видел
            {
                ending: 'ел',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // видела
            {
                ending: 'ела',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // видело
            {
                ending: 'ело',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // видели
            {
                ending: 'ели',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // видь
            {
                ending: 'ь',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // видьте
            {
                ending: 'ьте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // слышать (слыш)
    {
        conjZ: '5a-ш',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ать',
        endings: [
            // слышу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // слышим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // слышишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // слышите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // слышит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // слышат
            {
                ending: 'ат',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // слышал
            {
                ending: 'ал',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // слышала
            {
                ending: 'ала',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // слышало
            {
                ending: 'ало',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // слышали
            {
                ending: 'али',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // слышь
            {
                ending: 'ь',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // слышьте
            {
                ending: 'ьте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // стоять (сто)
    {
        conjZ: '5b',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ять',
        endings: [
            // стою
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // стоим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // стоишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // стоите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // стоит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // стоят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // стоял
            {
                ending: 'ял',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // стояла
            {
                ending: 'яла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // стояло
            {
                ending: 'яло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // стояли
            {
                ending: 'яли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // стой
            {
                ending: 'й',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // стойте
            {
                ending: 'йте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // кричать (крич)
    {
        conjZ: '5b-ш',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ать',
        endings: [
            // кричу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // кричим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // кричишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // кричите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // кричит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // кричат
            {
                ending: 'ат',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // кричал
            {
                ending: 'ал',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // кричала
            {
                ending: 'ала',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // кричало
            {
                ending: 'ало',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // кричали
            {
                ending: 'али',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // кричи
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // кричите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // мчаться (мч)
    {
        conjZ: '5b-ш-ся',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ать',
        endings: [
            // мчусь
            {
                ending: 'усь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // мчимся
            {
                ending: 'имся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // мчишься
            {
                ending: 'ишься',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // мчитесь
            {
                ending: 'итесь',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // мчится
            {
                ending: 'ится',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // мчатся
            {
                ending: 'атся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // мчался
            {
                ending: 'ался',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // мчалась
            {
                ending: 'алась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // мчалось
            {
                ending: 'алось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // мчались
            {
                ending: 'ались',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // мчись
            {
                ending: 'ись',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // мчитесь
            {
                ending: 'итесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // бежать (беж,бег)
    {
        conjZ: '5b-ж',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ать',
        endings: [
            // бегу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // бежим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // бежишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // бежите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // бежит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // бегут
            {
                ending: 'ут',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // бежал
            {
                ending: 'ал',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // бежала
            {
                ending: 'ала',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // бежало
            {
                ending: 'ало',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // бежали
            {
                ending: 'али',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // бежим
            {
                ending: 'им',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // беги
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // бегите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // пыхтеть (пыхт,пыхч)
    {
        conjZ: '5b-т',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'еть',
        endings: [
            // пыхчу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // пыхтим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // пыхтишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // пыхтите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // пыхтит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // пыхтят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // пыхтел
            {
                ending: 'ел',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // пыхтела
            {
                ending: 'ела',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // пыхтело
            {
                ending: 'ело',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // пыхтели
            {
                ending: 'ели',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // пыхти
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // пыхтите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // глядеться (гляд,гляж)
    {
        conjZ: '5b-т-ся',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'еть',
        endings: [
            // гляжусь
            {
                ending: 'усь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // глядимся
            {
                ending: 'имся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // глядишься
            {
                ending: 'ишься',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // глядитесь
            {
                ending: 'итесь',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // глядится
            {
                ending: 'ится',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // глядятся
            {
                ending: 'ятся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // гляделся
            {
                ending: 'елся',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // гляделась
            {
                ending: 'елась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // гляделось
            {
                ending: 'елось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // гляделись
            {
                ending: 'елись',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // глядись
            {
                ending: 'ись',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // глядитесь
            {
                ending: 'итесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // просвистеть (просвист,просвищ)
    {
        conjZ: '5b-тСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'еть',
        endings: [
            // просвистел
            {
                ending: 'ел',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // просвистела
            {
                ending: 'ела',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // просвистело
            {
                ending: 'ело',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // просвистели
            {
                ending: 'ели',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // просвищу
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // просвистим
            {
                ending: 'им',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // просвистишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // просвистите
            {
                ending: 'ите',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // просвистит
            {
                ending: 'ит',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // просвистят
            {
                ending: 'ят',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // просвисти
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // просвистите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // вглядеться (вгляд,вгляж)
    {
        conjZ: '5b-т-сяСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'еть',
        endings: [
            // вгляделся
            {
                ending: 'елся',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // вгляделась
            {
                ending: 'елась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // вгляделось
            {
                ending: 'елось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // вгляделись
            {
                ending: 'елись',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // вгляжусь
            {
                ending: 'усь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // вглядимся
            {
                ending: 'имся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // вглядишься
            {
                ending: 'ишься',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // вглядитесь
            {
                ending: 'итесь',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // вглядится
            {
                ending: 'ится',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // вглядятся
            {
                ending: 'ятся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // вглядимся
            {
                ending: 'имся',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // вглядимтесь
            {
                ending: 'имтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // вглядись
            {
                ending: 'ись',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // вглядитесь
            {
                ending: 'итесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // бояться (бо)
    {
        conjZ: '5b-ся',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ять',
        endings: [
            // боюсь
            {
                ending: 'юсь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // боимся
            {
                ending: 'имся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // боишься
            {
                ending: 'ишься',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // боитесь
            {
                ending: 'итесь',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // боится
            {
                ending: 'ится',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // боятся
            {
                ending: 'ятся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // боялся
            {
                ending: 'ялся',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // боялась
            {
                ending: 'ялась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // боялось
            {
                ending: 'ялось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // боялись
            {
                ending: 'ялись',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // бойся
            {
                ending: 'йся',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // бойтесь
            {
                ending: 'йтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // спать (спл,сп)
    {
        conjZ: '5b/c',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ать',
        endings: [
            // сплю
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // спим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // спишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // спите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // спит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // спят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // спал
            {
                ending: 'ал',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // спала
            {
                ending: 'ала',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // спало
            {
                ending: 'ало',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // спали
            {
                ending: 'али',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // спи
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // спите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // спаться (сп)
    {
        conjZ: '5b/c"-ся',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ать',
        endings: [
            // спалось
            {
                ending: 'алось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // спится
            {
                ending: 'ится',
                tense: types_1.RusTense.Pres,
                singular: true,
                mood: types_1.RusMood.Indc
            },
        ]
    },
    // держать (держ)
    {
        conjZ: '5c',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ать',
        endings: [
            // держу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // держим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // держишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // держите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // держит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // держат
            {
                ending: 'ат',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // держал
            {
                ending: 'ал',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // держала
            {
                ending: 'ала',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // держало
            {
                ending: 'ало',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // держали
            {
                ending: 'али',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // держи
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // держите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // смотреть (смотр)
    {
        conjZ: '5c-е',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'еть',
        endings: [
            // смотрю
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // смотрим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // смотришь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // смотрите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // смотрит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // смотрят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // смотрел
            {
                ending: 'ел',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // смотрела
            {
                ending: 'ела',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // смотрело
            {
                ending: 'ело',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // смотрели
            {
                ending: 'ели',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // смотри
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // смотрите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // вертеть (верт,верч)
    {
        conjZ: '5c-т',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'еть',
        endings: [
            // верчу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // вертим
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // вертишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // вертите
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // вертит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // вертят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // вертел
            {
                ending: 'ел',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // вертела
            {
                ending: 'ела',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // вертело
            {
                ending: 'ело',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // вертели
            {
                ending: 'ели',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // верти
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // вертите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // гнать (гон,гн)
    {
        conjZ: '5c/c',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ать',
        endings: [
            // гоню
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // гоним
            {
                ending: 'им',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // гонишь
            {
                ending: 'ишь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // гоните
            {
                ending: 'ите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // гонит
            {
                ending: 'ит',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // гонят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // гнал
            {
                ending: 'ал',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // гнала
            {
                ending: 'ала',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // гнало
            {
                ending: 'ало',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // гнали
            {
                ending: 'али',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // гони
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // гоните
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // сеять (се)
    {
        conjZ: '6a',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ять',
        endings: [
            // сею
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // сеем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // сеешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // сеете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // сеет
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // сеют
            {
                ending: 'ют',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // сеял
            {
                ending: 'ял',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // сеяла
            {
                ending: 'яла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // сеяло
            {
                ending: 'яло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // сеяли
            {
                ending: 'яли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // сей
            {
                ending: 'й',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // сейте
            {
                ending: 'йте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // глаголать (глагол)
    {
        conjZ: '6a-н',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ать',
        endings: [
            // глаголю
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // глаголем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // глаголешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // глаголете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // глаголет
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // глаголют
            {
                ending: 'ют',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // глаголал
            {
                ending: 'ал',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // глаголала
            {
                ending: 'ала',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // глаголало
            {
                ending: 'ало',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // глаголали
            {
                ending: 'али',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // глаголь
            {
                ending: 'ь',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // глагольте
            {
                ending: 'ьте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // колебать (колеб)
    {
        conjZ: '6a-б',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ать',
        endings: [
            // колеблю
            {
                ending: 'лю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // колеблем
            {
                ending: 'лем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // колеблешь
            {
                ending: 'лешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // колеблете
            {
                ending: 'лете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // колеблет
            {
                ending: 'лет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // колеблют
            {
                ending: 'лют',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // колебал
            {
                ending: 'ал',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // колебала
            {
                ending: 'ала',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // колебало
            {
                ending: 'ало',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // колебали
            {
                ending: 'али',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // колебли
            {
                ending: 'ли',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // колеблите
            {
                ending: 'лите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // сыпать (сып)
    {
        conjZ: '6a^',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ать',
        endings: [
            // сыплю
            {
                ending: 'лю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // сыпем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // сыпешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // сыпете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // сыпет
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // сыпят
            {
                ending: 'ят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // сыпал
            {
                ending: 'ал',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // сыпала
            {
                ending: 'ала',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // сыпало
            {
                ending: 'ало',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // сыпали
            {
                ending: 'али',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // сыпь
            {
                ending: 'ь',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // сыпьте
            {
                ending: 'ьте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // прятать (прят,пряч)
    {
        conjZ: '6a-т',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ать',
        endings: [
            // прячу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // прячем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // прячешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // прячете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // прячет
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // прячут
            {
                ending: 'ут',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // прятал
            {
                ending: 'ал',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // прятала
            {
                ending: 'ала',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // прятало
            {
                ending: 'ало',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // прятали
            {
                ending: 'али',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // прячь
            {
                ending: 'ь',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // прячьте
            {
                ending: 'ьте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // высказать (высказ,выскаж)
    {
        conjZ: '6a-т-иСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ать',
        endings: [
            // высказал
            {
                ending: 'ал',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // высказала
            {
                ending: 'ала',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // высказало
            {
                ending: 'ало',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // высказали
            {
                ending: 'али',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // выскажу
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // выскажем
            {
                ending: 'ем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // выскажешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // выскажете
            {
                ending: 'ете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // выскажет
            {
                ending: 'ет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // выскажут
            {
                ending: 'ут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // выскажем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // выскажемте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // выскажи
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // выскажите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // вопиять (вопи)
    {
        conjZ: '6b',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ять',
        endings: [
            // вопию
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // вопием
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // вопиешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // вопиете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // вопиет
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // вопиют
            {
                ending: 'ют',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // вопиял
            {
                ending: 'ял',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // вопияла
            {
                ending: 'яла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // вопияло
            {
                ending: 'яло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // вопияли
            {
                ending: 'яли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
        ]
    },
    // смеяться (сме)
    {
        conjZ: '6b-ся',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ять',
        endings: [
            // смеюсь
            {
                ending: 'юсь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // смеемся
            {
                ending: 'емся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // смеешься
            {
                ending: 'ешься',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // смеетесь
            {
                ending: 'етесь',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // смеется
            {
                ending: 'ется',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // смеются
            {
                ending: 'ются',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // смеялся
            {
                ending: 'ялся',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // смеялась
            {
                ending: 'ялась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // смеялось
            {
                ending: 'ялось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // смеялись
            {
                ending: 'ялись',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // смейся
            {
                ending: 'йся',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // смейтесь
            {
                ending: 'йтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // ржать (рж)
    {
        conjZ: '6b-ш',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ать',
        endings: [
            // ржу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // ржем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // ржешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // ржете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // ржет
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // ржут
            {
                ending: 'ут',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // ржал
            {
                ending: 'ал',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // ржала
            {
                ending: 'ала',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // ржало
            {
                ending: 'ало',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // ржали
            {
                ending: 'али',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // ржи
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // ржите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // слать (сл,шл)
    {
        conjZ: '6b^',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ать',
        endings: [
            // шлю
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // шлем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // шлешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // шлете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // шлет
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // шлют
            {
                ending: 'ют',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // слал
            {
                ending: 'ал',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // слала
            {
                ending: 'ала',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // слало
            {
                ending: 'ало',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // слали
            {
                ending: 'али',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // шли
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // шлите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // сосать (сос)
    {
        conjZ: '6°b',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ать',
        endings: [
            // сосу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // сосем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // сосешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // сосете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // сосет
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // сосут
            {
                ending: 'ут',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // сосал
            {
                ending: 'ал',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // сосала
            {
                ending: 'ала',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // сосало
            {
                ending: 'ало',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // сосали
            {
                ending: 'али',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // соси
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // сосите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // казать (каз,каж)
    {
        conjZ: '6c',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ать',
        endings: [
            // кажу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // кажем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // кажешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // кажете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // кажет
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // кажут
            {
                ending: 'ут',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // казал
            {
                ending: 'ал',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // казала
            {
                ending: 'ала',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // казало
            {
                ending: 'ало',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // казали
            {
                ending: 'али',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // кажи
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // кажите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // показать (показ,покаж)
    {
        conjZ: '6c',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ать',
        endings: [
            // показал
            {
                ending: 'ал',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // показала
            {
                ending: 'ала',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // показало
            {
                ending: 'ало',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // показали
            {
                ending: 'али',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // покажу
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // покажем
            {
                ending: 'ем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // покажешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // покажете
            {
                ending: 'ете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // покажет
            {
                ending: 'ет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // покажут
            {
                ending: 'ут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // покажем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // покажемте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // покажи
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // покажите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // оказать (оказ,окаж)
    {
        conjZ: '6cСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ать',
        endings: [
            // оказал
            {
                ending: 'ал',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // оказала
            {
                ending: 'ала',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // оказало
            {
                ending: 'ало',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // оказали
            {
                ending: 'али',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // окажу
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // окажем
            {
                ending: 'ем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // окажешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // окажете
            {
                ending: 'ете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // окажет
            {
                ending: 'ет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // окажут
            {
                ending: 'ут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // окажем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // окажемте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // окажи
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // окажите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // сказаться (сказ,скаж)
    {
        conjZ: '6c-сяСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ать',
        endings: [
            // сказался
            {
                ending: 'ался',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // сказалась
            {
                ending: 'алась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // сказалось
            {
                ending: 'алось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // сказались
            {
                ending: 'ались',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // скажусь
            {
                ending: 'усь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // скажемся
            {
                ending: 'емся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // скажешься
            {
                ending: 'ешься',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // скажетесь
            {
                ending: 'етесь',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // скажется
            {
                ending: 'ется',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // скажутся
            {
                ending: 'утся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // скажемся
            {
                ending: 'емся',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // скажемтесь
            {
                ending: 'емтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // скажись
            {
                ending: 'ись',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // скажитесь
            {
                ending: 'итесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // лепетать (лепет,лепеч)
    {
        conjZ: '6cX',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ать',
        endings: [
            // лепечу
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // лепечем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // лепечешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // лепечете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // лепечет
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // лепечут
            {
                ending: 'ут',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // лепетал
            {
                ending: 'ал',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // лепетала
            {
                ending: 'ала',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // лепетало
            {
                ending: 'ало',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // лепетали
            {
                ending: 'али',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // лепечи
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // лепечите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // вытереть (вытер,вытр)
    {
        conjZ: '9aСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'еть',
        endings: [
            // вытер
            {
                ending: '',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // вытерла
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // вытерло
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // вытерли
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // вытру
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // вытрем
            {
                ending: 'ем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // вытрешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // вытрете
            {
                ending: 'ете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // вытрет
            {
                ending: 'ет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // вытрут
            {
                ending: 'ут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // вытрем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // вытремте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // вытри
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // вытрите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // тереть (тер,тр)
    {
        conjZ: '9b',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'еть',
        endings: [
            // тру
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // трем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // трешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // трете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // трет
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // трут
            {
                ending: 'ут',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // тер
            {
                ending: '',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // терла
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // терло
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // терли
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // три
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // трите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // натереть (натер,натр)
    {
        conjZ: '9bСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'еть',
        endings: [
            // натер
            {
                ending: '',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // натерла
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // натерло
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // натерли
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // натру
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // натрем
            {
                ending: 'ем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // натрешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // натрете
            {
                ending: 'ете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // натрет
            {
                ending: 'ет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // натрут
            {
                ending: 'ут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // натрем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // натремте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // натри
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // натрите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // тереться (тер,тр)
    {
        conjZ: '9b-ся',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'еть',
        endings: [
            // трусь
            {
                ending: 'усь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // тремся
            {
                ending: 'емся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // трешься
            {
                ending: 'ешься',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // третесь
            {
                ending: 'етесь',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // трется
            {
                ending: 'ется',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // трутся
            {
                ending: 'утся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // терся
            {
                ending: 'ся',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // терлась
            {
                ending: 'лась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // терлось
            {
                ending: 'лось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // терлись
            {
                ending: 'лись',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // трись
            {
                ending: 'ись',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // тритесь
            {
                ending: 'итесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // стереть (стер,сотр)
    {
        conjZ: '9*bСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'еть',
        endings: [
            // стер
            {
                ending: '',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // стерла
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // стерло
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // стерли
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // сотру
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // сотрем
            {
                ending: 'ем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // сотрешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // сотрете
            {
                ending: 'ете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // сотрет
            {
                ending: 'ет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // сотрут
            {
                ending: 'ут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // сотрем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // сотремте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // сотри
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // сотрите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // колоть (кол)
    {
        conjZ: '10c',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'оть',
        endings: [
            // колю
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // колем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // колешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // колете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // колет
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // колют
            {
                ending: 'ют',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // колол
            {
                ending: 'ол',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // колола
            {
                ending: 'ола',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // кололо
            {
                ending: 'оло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // кололи
            {
                ending: 'оли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // коли
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // колите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // бороться (бор)
    {
        conjZ: '10c-ся',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'оть',
        endings: [
            // борюсь
            {
                ending: 'юсь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // боремся
            {
                ending: 'емся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // борешься
            {
                ending: 'ешься',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // боретесь
            {
                ending: 'етесь',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // борется
            {
                ending: 'ется',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // борются
            {
                ending: 'ются',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // боролся
            {
                ending: 'олся',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // боролась
            {
                ending: 'олась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // боролось
            {
                ending: 'олось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // боролись
            {
                ending: 'олись',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // борись
            {
                ending: 'ись',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // боритесь
            {
                ending: 'итесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // шить (ш)
    {
        conjZ: '11b',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // шью
            {
                ending: 'ью',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // шьем
            {
                ending: 'ьем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // шьешь
            {
                ending: 'ьешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // шьете
            {
                ending: 'ьете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // шьет
            {
                ending: 'ьет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // шьют
            {
                ending: 'ьют',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // шил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // шила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // шило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // шили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // шей
            {
                ending: 'ей',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // шейте
            {
                ending: 'ейте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // забить (заб)
    {
        conjZ: '11bСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ить',
        endings: [
            // забил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // забила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // забило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // забили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // забью
            {
                ending: 'ью',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // забьем
            {
                ending: 'ьем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // забьешь
            {
                ending: 'ьешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // забьете
            {
                ending: 'ьете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // забьет
            {
                ending: 'ьет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // забьют
            {
                ending: 'ьют',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // забьем
            {
                ending: 'ьем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // забьемте
            {
                ending: 'ьемте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // забей
            {
                ending: 'ей',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // забейте
            {
                ending: 'ейте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // спиться (соп,сп)
    {
        conjZ: '11*b/c"-сяСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ить',
        endings: [
            // спился
            {
                ending: 'ился',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // спилась
            {
                ending: 'илась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // спилось
            {
                ending: 'илось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // спились
            {
                ending: 'ились',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // сопьюсь
            {
                ending: 'ьюсь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // сопьемся
            {
                ending: 'ьемся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // сопьешься
            {
                ending: 'ьешься',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // сопьетесь
            {
                ending: 'ьетесь',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // сопьется
            {
                ending: 'ьется',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // сопьются
            {
                ending: 'ьются',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // сопьемся
            {
                ending: 'ьемся',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // сопьемтесь
            {
                ending: 'ьемтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // спейся
            {
                ending: 'ейся',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // спейтесь
            {
                ending: 'ейтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // рыть (ры,ро)
    {
        conjZ: '12a',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ть',
        endings: [
            // рою
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // роем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // роешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // роете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // роет
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // роют
            {
                ending: 'ют',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // рыл
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // рыла
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // рыло
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // рыли
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // рой
            {
                ending: 'й',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // ройте
            {
                ending: 'йте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // выть (вы,во)
    {
        conjZ: '12a-ы',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ть',
        endings: [
            // вою
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // воем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // воешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // воете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // воет
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // воют
            {
                ending: 'ют',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // выл
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // выла
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // выло
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // выли
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // вой
            {
                ending: 'й',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // войте
            {
                ending: 'йте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // петь (п)
    {
        conjZ: '12b',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'еть',
        endings: [
            // пою
            {
                ending: 'ою',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // поем
            {
                ending: 'оем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // поешь
            {
                ending: 'оешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // поете
            {
                ending: 'оете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // поет
            {
                ending: 'оет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // поют
            {
                ending: 'оют',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // пел
            {
                ending: 'ел',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // пела
            {
                ending: 'ела',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // пело
            {
                ending: 'ело',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // пели
            {
                ending: 'ели',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // пой
            {
                ending: 'ой',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // пойте
            {
                ending: 'ойте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // спеть (сп)
    {
        conjZ: '12bСВ',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'еть',
        endings: [
            // спею
            {
                ending: 'ею',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // спеем
            {
                ending: 'еем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // спеешь
            {
                ending: 'еешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // спеете
            {
                ending: 'еете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // спеет
            {
                ending: 'еет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // спеют
            {
                ending: 'еют',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // спел
            {
                ending: 'ел',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // спела
            {
                ending: 'ела',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // спело
            {
                ending: 'ело',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // спели
            {
                ending: 'ели',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // спей
            {
                ending: 'ей',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // спейте
            {
                ending: 'ейте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // гнить (гн)
    {
        conjZ: '12b/c',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ить',
        endings: [
            // гнию
            {
                ending: 'ию',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // гнием
            {
                ending: 'ием',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // гниешь
            {
                ending: 'иешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // гниете
            {
                ending: 'иете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // гниет
            {
                ending: 'иет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // гниют
            {
                ending: 'иют',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // гнил
            {
                ending: 'ил',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // гнила
            {
                ending: 'ила',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // гнило
            {
                ending: 'ило',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // гнили
            {
                ending: 'или',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
        ]
    },
    // выдавать (выдава,выда)
    {
        conjZ: '13b',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ть',
        endings: [
            // выдаю
            {
                ending: 'ю',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // выдаем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // выдаешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // выдаете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // выдает
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // выдают
            {
                ending: 'ют',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // выдавал
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // выдавала
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // выдавало
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // выдавали
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // выдавай
            {
                ending: 'й',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // выдавайте
            {
                ending: 'йте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // сдаваться (сдава,сда)
    {
        conjZ: '13b-ся',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ть',
        endings: [
            // сдаюсь
            {
                ending: 'юсь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // сдаемся
            {
                ending: 'емся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // сдаешься
            {
                ending: 'ешься',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // сдаетесь
            {
                ending: 'етесь',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // сдается
            {
                ending: 'ется',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // сдаются
            {
                ending: 'ются',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // сдавался
            {
                ending: 'лся',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // сдавалась
            {
                ending: 'лась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // сдавалось
            {
                ending: 'лось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // сдавались
            {
                ending: 'лись',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // сдавайся
            {
                ending: 'йся',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // сдавайтесь
            {
                ending: 'йтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // мять (мя,мн)
    {
        conjZ: '14b',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ть',
        endings: [
            // мну
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // мнем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // мнешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // мнете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // мнет
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // мнут
            {
                ending: 'ут',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // мял
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // мяла
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // мяло
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // мяли
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // мни
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // мните
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // мяться (мя,мн)
    {
        conjZ: '14b-ся',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ть',
        endings: [
            // мнусь
            {
                ending: 'усь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // мнемся
            {
                ending: 'емся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // мнешься
            {
                ending: 'ешься',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // мнетесь
            {
                ending: 'етесь',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // мнется
            {
                ending: 'ется',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // мнутся
            {
                ending: 'утся',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // мялся
            {
                ending: 'лся',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // мялась
            {
                ending: 'лась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // мялось
            {
                ending: 'лось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // мялись
            {
                ending: 'лись',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // мнись
            {
                ending: 'ись',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // мнитесь
            {
                ending: 'итесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // помять (помя,помн)
    {
        conjZ: '14bСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ть',
        endings: [
            // помял
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // помяла
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // помяло
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // помяли
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // помну
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // помнем
            {
                ending: 'ем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // помнешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // помнете
            {
                ending: 'ете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // помнет
            {
                ending: 'ет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // помнут
            {
                ending: 'ут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // помнем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // помнемте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // помни
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // помните
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // помяться (помя,помн)
    {
        conjZ: '14b-сяСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ть',
        endings: [
            // помялся
            {
                ending: 'лся',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // помялась
            {
                ending: 'лась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // помялось
            {
                ending: 'лось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // помялись
            {
                ending: 'лись',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // помнусь
            {
                ending: 'усь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // помнемся
            {
                ending: 'емся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // помнешься
            {
                ending: 'ешься',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // помнетесь
            {
                ending: 'етесь',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // помнется
            {
                ending: 'ется',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // помнутся
            {
                ending: 'утся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // помнемся
            {
                ending: 'емся',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // помнемтесь
            {
                ending: 'емтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // помнись
            {
                ending: 'ись',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // помнитесь
            {
                ending: 'итесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // сжать (сожм,сжа)
    {
        conjZ: '14*bСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ть',
        endings: [
            // сжал
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // сжала
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // сжало
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // сжали
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // сожму
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // сожмем
            {
                ending: 'ем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // сожмешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // сожмете
            {
                ending: 'ете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // сожмет
            {
                ending: 'ет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // сожмут
            {
                ending: 'ут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // сожмем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // сожмемте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // сожми
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // сожмите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // сжаться (сожм,сжа)
    {
        conjZ: '14*b-сяСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ть',
        endings: [
            // сжался
            {
                ending: 'лся',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // сжалась
            {
                ending: 'лась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // сжалось
            {
                ending: 'лось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // сжались
            {
                ending: 'лись',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // сожмусь
            {
                ending: 'усь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // сожмемся
            {
                ending: 'емся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // сожмешься
            {
                ending: 'ешься',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // сожметесь
            {
                ending: 'етесь',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // сожмется
            {
                ending: 'ется',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // сожмутся
            {
                ending: 'утся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // сожмемся
            {
                ending: 'емся',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // сожмемтесь
            {
                ending: 'емтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // сожмись
            {
                ending: 'ись',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // сожмитесь
            {
                ending: 'итесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // донять (дон,дой)
    {
        conjZ: '14b/cСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ять',
        endings: [
            // донял
            {
                ending: 'ял',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // доняла
            {
                ending: 'яла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // доняло
            {
                ending: 'яло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // доняли
            {
                ending: 'яли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // дойму
            {
                ending: 'му',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // доймем
            {
                ending: 'мем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // доймешь
            {
                ending: 'мешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // доймете
            {
                ending: 'мете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // доймет
            {
                ending: 'мет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // доймут
            {
                ending: 'мут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // доймем
            {
                ending: 'мем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // доймемте
            {
                ending: 'мемте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // дойми
            {
                ending: 'ми',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // доймите
            {
                ending: 'мите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // снять (сним,сня,сн)
    {
        conjZ: '14cСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ть',
        endings: [
            // снял
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // сняла
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // сняло
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // сняли
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // сниму
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // снимем
            {
                ending: 'ем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // снимешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // снимете
            {
                ending: 'ете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // снимет
            {
                ending: 'ет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // снимут
            {
                ending: 'ут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // снимем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // снимемте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // сними
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // снимите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // принять (приня,прин,прим)
    {
        conjZ: '14c(1)СВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ть',
        endings: [
            // принял
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // приняла
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // приняло
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // приняли
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // приму
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // примем
            {
                ending: 'ем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // примешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // примете
            {
                ending: 'ете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // примет
            {
                ending: 'ет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // примут
            {
                ending: 'ут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // примем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // примемте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // прими
            {
                ending: 'и',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // примите
            {
                ending: 'ите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // одеть (оде)
    {
        conjZ: '15aСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ть',
        endings: [
            // одел
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // одела
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // одело
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // одели
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // одену
            {
                ending: 'ну',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // оденем
            {
                ending: 'нем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // оденешь
            {
                ending: 'нешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // оденете
            {
                ending: 'нете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // оденет
            {
                ending: 'нет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // оденут
            {
                ending: 'нут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // оденем
            {
                ending: 'нем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // оденемте
            {
                ending: 'немте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // одень
            {
                ending: 'нь',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // оденьте
            {
                ending: 'ньте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // одеться (оде)
    {
        conjZ: '15a-сяСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ть',
        endings: [
            // оделся
            {
                ending: 'лся',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // оделась
            {
                ending: 'лась',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // оделось
            {
                ending: 'лось',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // оделись
            {
                ending: 'лись',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // оденусь
            {
                ending: 'нусь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // оденемся
            {
                ending: 'немся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // оденешься
            {
                ending: 'нешься',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // оденетесь
            {
                ending: 'нетесь',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // оденется
            {
                ending: 'нется',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // оденутся
            {
                ending: 'нутся',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // оденемся
            {
                ending: 'немся',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // оденемтесь
            {
                ending: 'немтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // оденься
            {
                ending: 'нься',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // оденьтесь
            {
                ending: 'ньтесь',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // жить (жи)
    {
        conjZ: '16b/c',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ть',
        endings: [
            // живу
            {
                ending: 'ву',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // живем
            {
                ending: 'вем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // живешь
            {
                ending: 'вешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // живете
            {
                ending: 'вете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // живет
            {
                ending: 'вет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // живут
            {
                ending: 'вут',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // жил
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // жила
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // жило
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // жили
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // живи
            {
                ending: 'ви',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // живите
            {
                ending: 'вите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // выбыть (выбуд,выбы)
    {
        conjZ: '^a-бытьСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ть',
        endings: [
            // выбыл
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // выбыла
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // выбыло
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // выбыли
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // выбуду
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // выбудем
            {
                ending: 'ем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // выбудешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // выбудете
            {
                ending: 'ете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // выбудет
            {
                ending: 'ет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // выбудут
            {
                ending: 'ут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // выбудем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // выбудемте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // выбудь
            {
                ending: 'ь',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // выбудьте
            {
                ending: 'ьте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // ехать (езжай,еха,ед)
    {
        conjZ: '^a-ех',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ть',
        endings: [
            // еду
            {
                ending: 'у',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // едем
            {
                ending: 'ем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // едешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // едете
            {
                ending: 'ете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // едет
            {
                ending: 'ет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // едут
            {
                ending: 'ут',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // ехал
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // ехала
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // ехало
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // ехали
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // едем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // едемте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // езжай
            {
                ending: '',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // езжайте
            {
                ending: 'те',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // поехать (поезжай,поеха,поед)
    {
        conjZ: '^a-ехСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ть',
        endings: [
            // поехал
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // поехала
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // поехало
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // поехали
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // поеду
            {
                ending: 'у',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // поедем
            {
                ending: 'ем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // поедешь
            {
                ending: 'ешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // поедете
            {
                ending: 'ете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // поедет
            {
                ending: 'ет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // поедут
            {
                ending: 'ут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // поедем
            {
                ending: 'ем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // поедемте
            {
                ending: 'емте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // поезжай
            {
                ending: '',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // поезжайте
            {
                ending: 'те',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // есть (е)
    {
        conjZ: '^b',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'сть',
        endings: [
            // ем
            {
                ending: 'м',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // едим
            {
                ending: 'дим',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // ешь
            {
                ending: 'шь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // едите
            {
                ending: 'дите',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // ест
            {
                ending: 'ст',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // едят
            {
                ending: 'дят',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // ел
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // ела
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // ело
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // ели
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // ешь
            {
                ending: 'шь',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // ешьте
            {
                ending: 'шьте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // идти (и,ш)
    {
        conjZ: '^b/b(9)',
        aspect: types_1.RusAspect.Impf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'дти',
        endings: [
            // иду
            {
                ending: 'ду',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // идем
            {
                ending: 'дем',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // идешь
            {
                ending: 'дешь',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // идете
            {
                ending: 'дете',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // идет
            {
                ending: 'дет',
                tense: types_1.RusTense.Pres,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // идут
            {
                ending: 'дут',
                tense: types_1.RusTense.Pres,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // шел
            {
                ending: 'ел',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // шла
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // шло
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // шли
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // идем
            {
                ending: 'дем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // идемте
            {
                ending: 'демте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // иди
            {
                ending: 'ди',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // идите
            {
                ending: 'дите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // пойти (пой,пош)
    {
        conjZ: '^b/b(9)СВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Intr,
        suffix: 'ти',
        endings: [
            // пошел
            {
                ending: 'ел',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // пошла
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // пошло
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // пошли
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // пойду
            {
                ending: 'ду',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // пойдем
            {
                ending: 'дем',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // пойдешь
            {
                ending: 'дешь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // пойдете
            {
                ending: 'дете',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // пойдет
            {
                ending: 'дет',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // пойдут
            {
                ending: 'дут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // пойдем
            {
                ending: 'дем',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // пойдемте
            {
                ending: 'демте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // пойди
            {
                ending: 'ди',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // пойдите
            {
                ending: 'дите',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
    // дать (да)
    {
        conjZ: '^b/cСВ',
        aspect: types_1.RusAspect.Perf,
        transitivity: types_1.Transitivity.Tran,
        suffix: 'ть',
        endings: [
            // дал
            {
                ending: 'л',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Masc,
                mood: types_1.RusMood.Indc
            },
            // дала
            {
                ending: 'ла',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Femn,
                mood: types_1.RusMood.Indc
            },
            // дало
            {
                ending: 'ло',
                tense: types_1.RusTense.Past,
                singular: true,
                gender: types_1.RusGender.Neut,
                mood: types_1.RusMood.Indc
            },
            // дали
            {
                ending: 'ли',
                tense: types_1.RusTense.Past,
                singular: false,
                mood: types_1.RusMood.Indc
            },
            // дам
            {
                ending: 'м',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // дадим
            {
                ending: 'дим',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 1,
                mood: types_1.RusMood.Indc
            },
            // дашь
            {
                ending: 'шь',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // дадите
            {
                ending: 'дите',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 2,
                mood: types_1.RusMood.Indc
            },
            // даст
            {
                ending: 'ст',
                tense: types_1.RusTense.Futr,
                singular: true,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // дадут
            {
                ending: 'дут',
                tense: types_1.RusTense.Futr,
                singular: false,
                person: 3,
                mood: types_1.RusMood.Indc
            },
            // дадим
            {
                ending: 'дим',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // дадимте
            {
                ending: 'димте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Incl
            },
            // дай
            {
                ending: 'й',
                singular: true,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
            // дайте
            {
                ending: 'йте',
                singular: false,
                mood: types_1.RusMood.Impr,
                involvement: types_1.Involvement.Excl
            },
        ]
    },
];
//# sourceMappingURL=rusVerbEndings.js.map