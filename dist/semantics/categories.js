"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SemCategory;
(function (SemCategory) {
    /**
     * Место расположения объекта в пространстве (географическое).
     */
    SemCategory[SemCategory["ObjectLocation"] = 0] = "ObjectLocation";
    /**
     * Место, город, область, район, страна.
     */
    SemCategory[SemCategory["Place"] = 1] = "Place";
    /**
     * Компания. Коммерческая организация.
     */
    SemCategory[SemCategory["Company"] = 2] = "Company";
})(SemCategory = exports.SemCategory || (exports.SemCategory = {}));
;
exports.semCategoryNames = [
    'objectlocation',
    'place',
    'company'
];
function semCategory2Str(cat) {
    return exports.semCategoryNames[cat];
}
exports.semCategory2Str = semCategory2Str;
;
function str2SemCategory(str) {
    var idx = exports.semCategoryNames.indexOf(str);
    if (idx === -1) {
        throw new Error("Unknown category " + str);
    }
    return idx;
}
exports.str2SemCategory = str2SemCategory;
;
function semCategories2Str(cat) {
    if (cat.length) {
        return cat.map(function (c) { return semCategory2Str(c); }).join(',');
    }
    else {
        return '';
    }
}
exports.semCategories2Str = semCategories2Str;
;
function str2SemCategories(str) {
    if (str) {
        return str.split(',').map(function (s) { return str2SemCategory(s); });
    }
    else {
        return [];
    }
}
exports.str2SemCategories = str2SemCategories;
;
//# sourceMappingURL=categories.js.map