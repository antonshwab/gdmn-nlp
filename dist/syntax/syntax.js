"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var idGenerator_1 = require("../utils/idGenerator");
var Sentence = /** @class */ (function () {
    function Sentence() {
    }
    return Sentence;
}());
exports.Sentence = Sentence;
var Phrase = /** @class */ (function () {
    function Phrase(items) {
        this.id = idGenerator_1.getNextID();
        if (!items.length || items.find(function (i) { return !i; })) {
            throw new Error('Invalid phrase items');
        }
        this.items = items;
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
//# sourceMappingURL=syntax.js.map