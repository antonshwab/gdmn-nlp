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
var lexer_1 = require("./lexer");
var __1 = require("..");
var vp_1 = require("./grammar/RUBE/vp");
var vpParser = new vp_1.VPParser([]);
var BaseVPVisitor = vpParser.getBaseCstVisitorConstructor();
var VPVisitor = /** @class */ (function (_super) {
    __extends(VPVisitor, _super);
    function VPVisitor() {
        var _this = _super.call(this) || this;
        _this.sentence = function (ctx) {
            return _this.visit(ctx.vp);
        };
        _this.vp = function (ctx) {
            return _this.visit(ctx.imperativeVP);
        };
        _this.imperativeVP = function (ctx) {
            var imperativeVerb = _this.visit(ctx.imperativeVerb);
            var imperativeNP = _this.visit(ctx.imperativeNP);
            return new __1.ImperativeVP(imperativeVerb, imperativeNP);
        };
        _this.imperativeVerb = function (ctx) {
            return ctx.VERBTranPerfSingImpr[0].word;
        };
        _this.imperativeNP = function (ctx) {
            if (ctx.pp) {
                return new __1.NP(_this.visit(ctx.qualImperativeNoun), _this.visit(ctx.pp));
            }
            else {
                return new __1.NP(_this.visit(ctx.qualImperativeNoun));
            }
        };
        _this.qualImperativeNoun = function (ctx) {
            if (ctx.imperativeDets) {
                return new __1.ANP(_this.visit(ctx.imperativeDets), _this.visit(ctx.imperativeNoun));
            }
            else {
                return _this.visit(ctx.imperativeNoun);
            }
            ;
        };
        _this.imperativeDets = function (ctx) {
            return _this.visit(ctx.imperativeDet);
        };
        _this.imperativeDet = function (ctx) {
            return ctx.ADJFAProPlurAccs ? ctx.ADJFAProPlurAccs[0].word
                : ctx.ADJFQualPlurAccs ? ctx.ADJFQualPlurAccs[0].word
                    : ctx.ADJFRelvPlurAccs ? ctx.ADJFRelvPlurAccs[0].word
                        : undefined;
        };
        _this.imperativeNoun = function (ctx) {
            return _this.visit(ctx.nounAccs);
        };
        _this.nounAccs = function (ctx) {
            return ctx.NOUNAnimMascPlurAccs ? ctx.NOUNAnimMascPlurAccs[0].word
                : ctx.NOUNAnimFemnPlurAccs ? ctx.NOUNAnimFemnPlurAccs[0].word
                    : ctx.NOUNAnimNeutPlurAccs ? ctx.NOUNAnimNeutPlurAccs[0].word
                        : ctx.NOUNInanMascPlurAccs ? ctx.NOUNInanMascPlurAccs[0].word
                            : ctx.NOUNInanFemnPlurAccs ? ctx.NOUNInanFemnPlurAccs[0].word
                                : ctx.NOUNInanNeutPlurAccs ? ctx.NOUNInanNeutPlurAccs[0].word
                                    : undefined;
        };
        _this.pp = function (ctx) {
            return new __1.PP(_this.visit(ctx.prep), _this.visit(ctx.ppNoun));
        };
        _this.prep = function (ctx) {
            return ctx.PREPPlce[0].word;
        };
        _this.ppNoun = function (ctx) {
            return _this.visit(ctx.nounGent);
        };
        _this.nounGent = function (ctx) {
            return ctx.NOUNInanMascSingGent ? ctx.NOUNInanMascSingGent[0].word
                : ctx.NOUNInanFemnSingGent ? ctx.NOUNInanFemnSingGent[0].word
                    : ctx.NOUNInanNeutSingGent ? ctx.NOUNInanNeutSingGent[0].word
                        : ctx.NOUNInanMascPlurGent ? ctx.NOUNInanMascPlurGent[0].word
                            : ctx.NOUNInanFemnPlurGent ? ctx.NOUNInanFemnPlurGent[0].word
                                : ctx.NOUNInanNeutPlurGent ? ctx.NOUNInanNeutPlurGent[0].word
                                    : undefined;
        };
        _this.validateVisitor();
        return _this;
    }
    return VPVisitor;
}(BaseVPVisitor));
;
var toVPInstance = new VPVisitor();
function parsePhrase(text) {
    var wordsSignatures = [];
    var phrase = undefined;
    lexer_1.combinatorialMorph(text).some(function (t) {
        vpParser.input = t;
        var value = vpParser.sentence();
        wordsSignatures = t.map(function (y) { return y.word.getSignature(); });
        if (value && !vpParser.errors.length) {
            phrase = toVPInstance.visit(value);
            return true;
        }
        else {
            return false;
        }
    });
    if (phrase) {
        return {
            wordsSignatures: wordsSignatures,
            phrase: phrase
        };
    }
    else {
        return {
            wordsSignatures: wordsSignatures
        };
    }
}
exports.parsePhrase = parsePhrase;
//# sourceMappingURL=parser.js.map