"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
exports.rusPronouns = [
    {
        pronounType: types_1.PronounType.Personal,
        person: 1,
        singular: true,
        words: ['я', 'меня', 'мне', 'меня', 'мной', 'мне']
    },
    {
        pronounType: types_1.PronounType.Personal,
        person: 1,
        singular: false,
        words: ['мы', 'нас', 'нам', 'нас', 'нами', 'нас']
    },
    {
        pronounType: types_1.PronounType.Personal,
        person: 2,
        singular: true,
        words: ['ты', 'тебя', 'тебе', 'тебя', 'тобой', 'тебе']
    },
    {
        pronounType: types_1.PronounType.Personal,
        person: 2,
        singular: false,
        words: ['вы', 'вас', 'вам', 'вас', 'вами', 'вас']
    },
    {
        pronounType: types_1.PronounType.Personal,
        person: 3,
        singular: true,
        gender: types_1.RusGender.Masc,
        words: ['он', 'него', 'нему', 'него', 'ним', 'нём']
    },
    {
        pronounType: types_1.PronounType.Personal,
        person: 3,
        singular: true,
        gender: types_1.RusGender.Femn,
        words: ['она', 'неё', 'ней', 'неё', 'нею', 'ней']
    },
    {
        pronounType: types_1.PronounType.Personal,
        person: 3,
        singular: true,
        gender: types_1.RusGender.Neut,
        words: ['оно', 'него', 'нему', 'него', 'ним', 'нём']
    },
    {
        pronounType: types_1.PronounType.Personal,
        person: 3,
        singular: false,
        words: ['они', 'них', 'ним', 'них', 'ними', 'ним']
    },
    {
        pronounType: types_1.PronounType.Reflexive,
        noNomn: true,
        words: ['себя', 'себя', 'себе', 'себя', 'собой', 'себе']
    },
];
//# sourceMappingURL=rusPronounsData.js.map