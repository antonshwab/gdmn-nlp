"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var morphology_1 = require("./morphology");
var RusConjunctionLexeme = /** @class */ (function (_super) {
    __extends(RusConjunctionLexeme, _super);
    function RusConjunctionLexeme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RusConjunctionLexeme.prototype.analyze = function (word, result) {
        if (this.stem === word) {
            result(new RusConjunction(word, this));
        }
    };
    RusConjunctionLexeme.prototype.getWordForm = function () {
        return new RusConjunction(this.stem, this);
    };
    RusConjunctionLexeme.prototype.getWordForms = function () {
        return [new RusConjunction(this.stem, this)];
    };
    return RusConjunctionLexeme;
}(morphology_1.ConjunctionLexeme));
exports.RusConjunctionLexeme = RusConjunctionLexeme;
var rusConjunctions = ['и', 'или'];
exports.RusConjunctionLexemes = rusConjunctions.map(function (с) { return new RusConjunctionLexeme(с); });
var RusConjunction = /** @class */ (function (_super) {
    __extends(RusConjunction, _super);
    function RusConjunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RusConjunction.prototype.getDisplayText = function () {
        return this.word + '; союз';
    };
    RusConjunction.prototype.getSignature = function () {
        return 'CONJ';
    };
    return RusConjunction;
}(morphology_1.Conjunction));
exports.RusConjunction = RusConjunction;
//# sourceMappingURL=rusConjunction.js.map