"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SemContext;
(function (SemContext) {
    SemContext[SemContext["Common"] = 0] = "Common";
    SemContext[SemContext["QueryDB"] = 1] = "QueryDB";
})(SemContext = exports.SemContext || (exports.SemContext = {}));
;
var SemCategory;
(function (SemCategory) {
    SemCategory[SemCategory["Place"] = 0] = "Place";
})(SemCategory = exports.SemCategory || (exports.SemCategory = {}));
;
exports.semCategoryNames = [
    'place'
];
function semCategory2Str(cat) {
    return exports.semCategoryNames[cat];
}
exports.semCategory2Str = semCategory2Str;
function str2SemCategory(str) {
    var idx = exports.semCategoryNames.indexOf(str);
    if (idx === -1) {
        throw new Error("Unknown category " + str);
    }
    return idx;
}
exports.str2SemCategory = str2SemCategory;
function semCategories2Str(cat) {
    if (cat.length) {
        return cat.map(function (c) { return semCategory2Str(c); }).join(',');
    }
    else {
        return '';
    }
}
exports.semCategories2Str = semCategories2Str;
function str2SemCategories(str) {
    if (str) {
        return str.split(',').map(function (s) { return str2SemCategory(s); });
    }
    else {
        return [];
    }
}
exports.str2SemCategories = str2SemCategories;
//# sourceMappingURL=types.js.map