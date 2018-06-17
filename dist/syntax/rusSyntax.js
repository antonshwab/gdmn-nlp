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
var rusNoun_1 = require("../morphology/rusNoun");
var syntax_1 = require("./syntax");
var RusPhrase = /** @class */ (function (_super) {
    __extends(RusPhrase, _super);
    function RusPhrase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RusPhrase;
}(syntax_1.Phrase));
exports.RusPhrase = RusPhrase;
;
var RusVP = /** @class */ (function (_super) {
    __extends(RusVP, _super);
    function RusVP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RusVP;
}(RusPhrase));
exports.RusVP = RusVP;
var RusImperativeVP = /** @class */ (function (_super) {
    __extends(RusImperativeVP, _super);
    function RusImperativeVP(imperativeVerb, imperativeNP) {
        var _this = this;
        if (imperativeNP) {
            _this = _super.call(this, [imperativeVerb, imperativeNP]) || this;
        }
        else {
            _this = _super.call(this, [imperativeVerb]) || this;
        }
        return _this;
    }
    Object.defineProperty(RusImperativeVP.prototype, "imperativeVerb", {
        get: function () {
            return this.items[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RusImperativeVP.prototype, "imperativeNP", {
        get: function () {
            if (!this.items[1]) {
                return undefined;
            }
            else {
                return this.items[1];
            }
        },
        enumerable: true,
        configurable: true
    });
    return RusImperativeVP;
}(RusVP));
exports.RusImperativeVP = RusImperativeVP;
var RusNP = /** @class */ (function (_super) {
    __extends(RusNP, _super);
    function RusNP(n, pp) {
        var _this = this;
        if (pp) {
            _this = _super.call(this, [n, pp]) || this;
        }
        else {
            _this = _super.call(this, [n]) || this;
        }
        return _this;
    }
    Object.defineProperty(RusNP.prototype, "noun", {
        get: function () {
            if (this.items[0] instanceof rusNoun_1.RusNoun) {
                return this.items[0];
            }
            else {
                return this.items[0];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RusNP.prototype, "pp", {
        get: function () {
            if (this.items[1] instanceof RusPP) {
                return this.items[1];
            }
            else {
                return undefined;
            }
        },
        enumerable: true,
        configurable: true
    });
    return RusNP;
}(RusPhrase));
exports.RusNP = RusNP;
var RusANP = /** @class */ (function (_super) {
    __extends(RusANP, _super);
    function RusANP(adjf, noun) {
        return _super.call(this, [adjf, noun]) || this;
    }
    Object.defineProperty(RusANP.prototype, "adjf", {
        get: function () {
            return this.items[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RusANP.prototype, "noun", {
        get: function () {
            return this.items[1];
        },
        enumerable: true,
        configurable: true
    });
    return RusANP;
}(RusPhrase));
exports.RusANP = RusANP;
var RusPP = /** @class */ (function (_super) {
    __extends(RusPP, _super);
    function RusPP(prep, noun) {
        return _super.call(this, [prep, noun]) || this;
    }
    Object.defineProperty(RusPP.prototype, "prep", {
        get: function () {
            return this.items[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RusPP.prototype, "noun", {
        get: function () {
            return this.items[1];
        },
        enumerable: true,
        configurable: true
    });
    return RusPP;
}(RusPhrase));
exports.RusPP = RusPP;
//# sourceMappingURL=rusSyntax.js.map