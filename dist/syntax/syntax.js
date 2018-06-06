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
var morphology_1 = require("../morphology/morphology");
var idGenerator_1 = require("../utils/idGenerator");
var Sentence = /** @class */ (function () {
    function Sentence() {
    }
    return Sentence;
}());
exports.Sentence = Sentence;
var Phrase = /** @class */ (function () {
    function Phrase(items) {
        this.items = items;
        this.id = idGenerator_1.getNextID();
    }
    Phrase.prototype.getText = function () {
        return this.items.reduce(function (prev, p) {
            return prev + p.getText() + ' ';
        }, '');
    };
    Phrase.prototype.simplify = function () {
        var _this = this;
        var recurs = function (parentParent, parent, idx) {
            parent.items.forEach(function (i, x) {
                if (i.constructor === parent.constructor) {
                    recurs(parent, i, x);
                }
            });
            if (parent.items.length === 1) {
                var temp = parent.items[0];
                parent.items = [];
                parentParent.items[idx] = temp;
            }
        };
        this.items.forEach(function (i, idx) {
            if (i.constructor === _this.constructor) {
                recurs(_this, i, idx);
            }
        });
    };
    return Phrase;
}());
exports.Phrase = Phrase;
var VP = /** @class */ (function (_super) {
    __extends(VP, _super);
    function VP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VP;
}(Phrase));
exports.VP = VP;
var ImperativeVP = /** @class */ (function (_super) {
    __extends(ImperativeVP, _super);
    function ImperativeVP(imperativeVerb, imperativeNP) {
        var _this = this;
        if (imperativeNP) {
            _this = _super.call(this, [imperativeVerb, imperativeNP]) || this;
        }
        else {
            _this = _super.call(this, [imperativeVerb]) || this;
        }
        return _this;
    }
    Object.defineProperty(ImperativeVP.prototype, "imperativeVerb", {
        get: function () {
            return this.items[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImperativeVP.prototype, "imperativeNP", {
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
    return ImperativeVP;
}(VP));
exports.ImperativeVP = ImperativeVP;
var NP = /** @class */ (function (_super) {
    __extends(NP, _super);
    function NP(n, pp) {
        var _this = this;
        if (pp) {
            _this = _super.call(this, [n, pp]) || this;
        }
        else {
            _this = _super.call(this, [n]) || this;
        }
        return _this;
    }
    Object.defineProperty(NP.prototype, "noun", {
        get: function () {
            if (this.items[0] instanceof morphology_1.Noun) {
                return this.items[0];
            }
            else {
                return this.items[0];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NP.prototype, "pp", {
        get: function () {
            if (this.items[1] instanceof PP) {
                return this.items[1];
            }
            else {
                return undefined;
            }
        },
        enumerable: true,
        configurable: true
    });
    return NP;
}(Phrase));
exports.NP = NP;
var ANP = /** @class */ (function (_super) {
    __extends(ANP, _super);
    function ANP(adjf, noun) {
        return _super.call(this, [adjf, noun]) || this;
    }
    Object.defineProperty(ANP.prototype, "adjf", {
        get: function () {
            return this.items[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ANP.prototype, "noun", {
        get: function () {
            return this.items[1];
        },
        enumerable: true,
        configurable: true
    });
    return ANP;
}(Phrase));
exports.ANP = ANP;
var PP = /** @class */ (function (_super) {
    __extends(PP, _super);
    function PP(prep, noun) {
        return _super.call(this, [prep, noun]) || this;
    }
    Object.defineProperty(PP.prototype, "prep", {
        get: function () {
            return this.items[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PP.prototype, "noun", {
        get: function () {
            return this.items[1];
        },
        enumerable: true,
        configurable: true
    });
    return PP;
}(Phrase));
exports.PP = PP;
//# sourceMappingURL=syntax.js.map