"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chevrotain_1 = require("chevrotain");
exports.WhiteSpace = chevrotain_1.createToken({
    name: 'WhiteSpace',
    pattern: /[ \t]+/,
    line_breaks: false
});
exports.LineBreak = chevrotain_1.createToken({
    name: 'LineBreak',
    pattern: /[\n\r]+/,
    line_breaks: true
});
exports.PunctuationMark = chevrotain_1.createToken({
    name: 'PunctuationMark',
    pattern: /[.,?!]{1}/
});
exports.CyrillicWord = chevrotain_1.createToken({
    name: 'CyrillicWord',
    pattern: /(?:[А-Яа-я]+-[А-Яа-я]+)|(?:[А-Яа-я]+)/
});
exports.Other = chevrotain_1.createToken({
    name: 'Other',
    pattern: /[A-Za-z0-9]+/
});
var allTokens = [
    exports.LineBreak,
    exports.WhiteSpace,
    exports.PunctuationMark,
    exports.CyrillicWord,
    exports.Other
];
exports.tokenizer = new chevrotain_1.Lexer(allTokens);
function tokenize(text) {
    var tokenized = exports.tokenizer.tokenize(text);
    if (tokenized.errors.length) {
        throw new Error("Invalid text \"" + text + "\". Tokenizer errors: " + JSON.stringify(tokenized.errors, undefined, 2));
    }
    return tokenized.tokens;
}
exports.tokenize = tokenize;
//# sourceMappingURL=tokenizer.js.map