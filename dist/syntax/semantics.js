"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const idGenerator_1 = require("../utils/idGenerator");
class Sentence {
}
exports.Sentence = Sentence;
class Phrase {
    constructor(items) {
        this.items = items;
        this.id = idGenerator_1.getNextID();
    }
    getText() {
        return this.items.reduce((prev, p) => prev + p.getText() + ' ', '');
    }
    simplify() {
        const recurs = (parentParent, parent, idx) => {
            parent.items.forEach((i, x) => {
                if (i.constructor === parent.constructor) {
                    recurs(parent, i, x);
                }
            });
            if (parent.items.length === 1) {
                const temp = parent.items[0];
                parent.items = [];
                parentParent.items[idx] = temp;
            }
        };
        this.items.forEach((i, idx) => {
            if (i.constructor === this.constructor) {
                recurs(this, i, idx);
            }
        });
    }
}
exports.Phrase = Phrase;
class VP extends Phrase {
}
exports.VP = VP;
class NP extends Phrase {
}
exports.NP = NP;
class ANP extends NP {
}
exports.ANP = ANP;
class PP extends NP {
}
exports.PP = PP;
//# sourceMappingURL=semantics.js.map