"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RusGender;
(function (RusGender) {
    RusGender[RusGender["Masc"] = 0] = "Masc";
    RusGender[RusGender["Femn"] = 1] = "Femn";
    RusGender[RusGender["Neut"] = 2] = "Neut";
})(RusGender = exports.RusGender || (exports.RusGender = {}));
exports.RusGenderNames = ['мужской', 'женский', 'средний'];
exports.ShortGenderNames = ['Masc', 'Femn', 'Neut'];
var RusCase;
(function (RusCase) {
    RusCase[RusCase["Nomn"] = 0] = "Nomn";
    RusCase[RusCase["Gent"] = 1] = "Gent";
    RusCase[RusCase["Datv"] = 2] = "Datv";
    RusCase[RusCase["Accs"] = 3] = "Accs";
    RusCase[RusCase["Ablt"] = 4] = "Ablt";
    RusCase[RusCase["Loct"] = 5] = "Loct";
})(RusCase = exports.RusCase || (exports.RusCase = {}));
exports.RusCaseNames = ['им.п.', 'род.п.', 'дат.п.', 'вин.п.', 'тв.п.', 'предл.п.'];
exports.ShortCaseNames = ['Nomn', 'Gent', 'Datv', 'Accs', 'Ablt', 'Loct'];
var RusAspect;
(function (RusAspect) {
    RusAspect[RusAspect["Perf"] = 0] = "Perf";
    RusAspect[RusAspect["Impf"] = 1] = "Impf";
})(RusAspect = exports.RusAspect || (exports.RusAspect = {}));
var Transitivity;
(function (Transitivity) {
    Transitivity[Transitivity["Tran"] = 0] = "Tran";
    Transitivity[Transitivity["Intr"] = 1] = "Intr";
})(Transitivity = exports.Transitivity || (exports.Transitivity = {}));
var RusMood;
(function (RusMood) {
    RusMood[RusMood["Indc"] = 0] = "Indc";
    RusMood[RusMood["Cond"] = 1] = "Cond";
    RusMood[RusMood["Impr"] = 2] = "Impr";
})(RusMood = exports.RusMood || (exports.RusMood = {}));
exports.ShortMoodNames = ['Indc', 'Cond', 'Impr'];
var RusTense;
(function (RusTense) {
    RusTense[RusTense["Past"] = 0] = "Past";
    RusTense[RusTense["Pres"] = 1] = "Pres";
    RusTense[RusTense["Futr"] = 2] = "Futr";
})(RusTense = exports.RusTense || (exports.RusTense = {}));
exports.ShortTenseNames = ['Past', 'Pres', 'Futr'];
var Involvement;
(function (Involvement) {
    Involvement[Involvement["Incl"] = 0] = "Incl";
    Involvement[Involvement["Excl"] = 1] = "Excl";
})(Involvement = exports.Involvement || (exports.Involvement = {}));
var RusAdjectiveCategory;
(function (RusAdjectiveCategory) {
    RusAdjectiveCategory[RusAdjectiveCategory["Qual"] = 0] = "Qual";
    RusAdjectiveCategory[RusAdjectiveCategory["Poss"] = 1] = "Poss";
    RusAdjectiveCategory[RusAdjectiveCategory["Rel"] = 2] = "Rel";
    RusAdjectiveCategory[RusAdjectiveCategory["Pron"] = 3] = "Pron";
})(RusAdjectiveCategory = exports.RusAdjectiveCategory || (exports.RusAdjectiveCategory = {}));
exports.RusAdjectiveCategoryNames = ['кач.', 'притяж.', 'относ.', 'местоимен.'];
exports.ShortAdjectiveCategoryNames = ['Qual', 'Poss', 'Relv', 'APro'];
var PrepositionType;
(function (PrepositionType) {
    PrepositionType[PrepositionType["Place"] = 0] = "Place";
    PrepositionType[PrepositionType["Time"] = 1] = "Time";
    PrepositionType[PrepositionType["Reason"] = 2] = "Reason";
    PrepositionType[PrepositionType["Goal"] = 3] = "Goal";
    PrepositionType[PrepositionType["Comparative"] = 4] = "Comparative";
    PrepositionType[PrepositionType["Object"] = 5] = "Object";
})(PrepositionType = exports.PrepositionType || (exports.PrepositionType = {}));
exports.RusPrepositionTypeNames = ['пространственный', 'временной', 'причинный', 'целевой', 'сравнительный', 'объектный'];
exports.ShortPrepositionTypeNames = ['Plce', 'Time', 'Rson', 'Goal', 'Comp', 'Objt'];
var PronounType;
(function (PronounType) {
    PronounType[PronounType["Personal"] = 0] = "Personal";
    PronounType[PronounType["Reflexive"] = 1] = "Reflexive";
    PronounType[PronounType["Possesive"] = 2] = "Possesive";
    PronounType[PronounType["Demonstrative"] = 3] = "Demonstrative";
    PronounType[PronounType["Interrogative"] = 4] = "Interrogative";
    PronounType[PronounType["Relative"] = 5] = "Relative";
    PronounType[PronounType["Definitive"] = 6] = "Definitive";
    PronounType[PronounType["Negative"] = 7] = "Negative";
    PronounType[PronounType["Vague"] = 8] = "Vague";
})(PronounType = exports.PronounType || (exports.PronounType = {}));
exports.RusPronounTypeNames = ['личное', 'возвратное', 'притяжательное', 'указательное', 'вопросительное', 'относительное',
    'определительное', 'отрицательное', 'неопределенное'];
exports.ShortPronounTypeNames = ['Pers', 'Refl', 'Poss', 'Demn', 'Intr', 'Relv',
    'Defn', 'Negt', 'Vgue'];
//# sourceMappingURL=types.js.map