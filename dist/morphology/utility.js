"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isRusConsonant(s, idx) {
    if (idx === void 0) { idx = 'whole'; }
    var RusConsonants = 'БВГДЖЗЙКЛМНПРСТФХЦЧШЩ';
    switch (idx) {
        case 'whole':
            return RusConsonants.indexOf(s.toUpperCase()) !== -1;
        case 'last':
            return RusConsonants.indexOf(s.slice(-1).toUpperCase()) !== -1;
        default:
            return RusConsonants.indexOf(s.slice(0, 1).toUpperCase()) !== -1;
    }
}
exports.isRusConsonant = isRusConsonant;
//# sourceMappingURL=utility.js.map