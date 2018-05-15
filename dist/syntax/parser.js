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
var chevrotain_1 = require("chevrotain");
var rusMorphTokens_1 = require("./rusMorphTokens");
var lexer_1 = require("./lexer");
var __1 = require("..");
var VPParser = /** @class */ (function (_super) {
    __extends(VPParser, _super);
    function VPParser(input) {
        var _this = _super.call(this, input, rusMorphTokens_1.morphTokens, { outputCst: true }) || this;
        _this.sentence = _this.RULE('sentence', function () { return _this.SUBRULE(_this.vp); });
        _this.vp = _this.RULE('vp', function () { return _this.SUBRULE(_this.imperativeVP); });
        _this.imperativeVP = _this.RULE('imperativeVP', function () {
            _this.SUBRULE(_this.imperativeVerb);
            _this.SUBRULE(_this.imperativeNP);
        });
        _this.imperativeVerb = _this.RULE('imperativeVerb', function () { return _this.CONSUME(rusMorphTokens_1.morphTokens.VERBTranPerfSingImpr); });
        _this.imperativeNP = _this.RULE('imperativeNP', function () {
            _this.SUBRULE(_this.qualImperativeNoun);
            _this.OPTION(function () { return _this.SUBRULE(_this.pp); });
        });
        _this.qualImperativeNoun = _this.RULE('qualImperativeNoun', function () {
            _this.OPTION(function () { return _this.SUBRULE(_this.imperativeDets); });
            _this.SUBRULE(_this.imperativeNoun);
        });
        _this.imperativeDets = _this.RULE('imperativeDets', function () {
            _this.SUBRULE(_this.imperativeDet);
        });
        _this.imperativeDet = _this.RULE('imperativeDet', function () {
            _this.OR([
                { ALT: function () { return _this.CONSUME(rusMorphTokens_1.morphTokens.ADJFAProPlurAccs); } },
                { ALT: function () { return _this.CONSUME(rusMorphTokens_1.morphTokens.ADJFQualPlurAccs); } }
            ]);
        });
        _this.imperativeNoun = _this.RULE('imperativeNoun', function () { return _this.SUBRULE(_this.nounAccs); });
        _this.nounAccs = _this.RULE('nounAccs', function () {
            _this.OR([
                { ALT: function () { return _this.CONSUME(rusMorphTokens_1.morphTokens.NOUNAnimMascPlurAccs); } },
                { ALT: function () { return _this.CONSUME(rusMorphTokens_1.morphTokens.NOUNAnimFemnPlurAccs); } },
                { ALT: function () { return _this.CONSUME(rusMorphTokens_1.morphTokens.NOUNAnimNeutPlurAccs); } },
                { ALT: function () { return _this.CONSUME(rusMorphTokens_1.morphTokens.NOUNInanMascPlurAccs); } },
                { ALT: function () { return _this.CONSUME(rusMorphTokens_1.morphTokens.NOUNInanFemnPlurAccs); } },
                { ALT: function () { return _this.CONSUME(rusMorphTokens_1.morphTokens.NOUNInanNeutPlurAccs); } },
            ]);
        });
        _this.pp = _this.RULE('pp', function () {
            _this.SUBRULE(_this.prep);
            _this.SUBRULE(_this.ppNoun);
        });
        _this.prep = _this.RULE('prep', function () { return _this.CONSUME(rusMorphTokens_1.morphTokens.PREPPlce); });
        _this.ppNoun = _this.RULE('ppNoun', function () {
            _this.SUBRULE(_this.nounGent);
            _this.OPTION(function () {
                _this.CONSUME(rusMorphTokens_1.morphTokens.CONJ);
                _this.SUBRULE(_this.ppNoun);
            });
        });
        _this.nounGent = _this.RULE('nounGent', function () {
            _this.OR([
                { ALT: function () { return _this.CONSUME(rusMorphTokens_1.morphTokens.NOUNInanMascSingGent); } },
                { ALT: function () { return _this.CONSUME(rusMorphTokens_1.morphTokens.NOUNInanFemnSingGent); } },
                { ALT: function () { return _this.CONSUME(rusMorphTokens_1.morphTokens.NOUNInanNeutSingGent); } },
                { ALT: function () { return _this.CONSUME(rusMorphTokens_1.morphTokens.NOUNInanMascPlurGent); } },
                { ALT: function () { return _this.CONSUME(rusMorphTokens_1.morphTokens.NOUNInanFemnPlurGent); } },
                { ALT: function () { return _this.CONSUME(rusMorphTokens_1.morphTokens.NOUNInanNeutPlurGent); } },
            ]);
        });
        chevrotain_1.Parser.performSelfAnalysis(_this);
        return _this;
    }
    ;
    return VPParser;
}(chevrotain_1.Parser));
;
var vpParser = new VPParser([]);
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
            return new __1.VP([imperativeVerb, imperativeNP]);
        };
        _this.imperativeVerb = function (ctx) {
            return ctx.VERBTranPerfSingImpr[0].word;
        };
        _this.imperativeNP = function (ctx) {
            if (ctx.pp) {
                return new __1.NP([_this.visit(ctx.qualImperativeNoun), _this.visit(ctx.pp)]);
            }
            else {
                return new __1.NP([_this.visit(ctx.qualImperativeNoun)]);
            }
        };
        _this.qualImperativeNoun = function (ctx) {
            if (ctx.imperativeDets) {
                return new __1.ANP([_this.visit(ctx.imperativeDets), _this.visit(ctx.imperativeNoun)]);
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
            return new __1.PP([_this.visit(ctx.prep), _this.visit(ctx.ppNoun)]);
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
    var value;
    var parsedText = [];
    lexer_1.scan(text).some(function (t) {
        vpParser.input = t;
        value = vpParser.sentence();
        parsedText = [t.reduce(function (x, y) { return x + ' ' + y.word.getSignature(); }, '')];
        return !vpParser.errors.length;
    });
    if (value) {
        return {
            parsedText: parsedText,
            phrase: toVPInstance.visit(value)
        };
    }
    else {
        return {
            parsedText: parsedText
        };
    }
}
exports.parsePhrase = parsePhrase;
//# sourceMappingURL=parser.js.map