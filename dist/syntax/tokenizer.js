"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chevrotain_1 = require("chevrotain");
exports.WhiteSpace = chevrotain_1.createToken({
    name: 'WhiteSpace',
    pattern: /\s+/,
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
exports.RusWord = chevrotain_1.createToken({
    name: 'RusWord',
    pattern: /[А-Яа-я]+/
});
exports.Other = chevrotain_1.createToken({
    name: 'Other',
    pattern: /.+/
});
const allTokens = [
    exports.LineBreak,
    exports.WhiteSpace,
    exports.PunctuationMark,
    exports.RusWord,
    exports.Other
];
exports.tokenizer = new chevrotain_1.Lexer(allTokens);
function tokenize(text) {
    const tokenized = exports.tokenizer.tokenize(text);
    if (tokenized.errors.length) {
        throw new Error(`Invalid text "${text}". Tokenizer errors: ${JSON.stringify(tokenized.errors, undefined, 2)}`);
    }
    return tokenized.tokens;
}
exports.tokenize = tokenize;
//# sourceMappingURL=tokenizer.js.map