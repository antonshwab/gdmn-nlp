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
var rusMorphTokens_1 = require("../../rusMorphTokens");
/**
 * Грамматика для фразы типа "Покажи все организации из Минска"
 */
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
exports.VPParser = VPParser;
;
//# sourceMappingURL=vp.js.map