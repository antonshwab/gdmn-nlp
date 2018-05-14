"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chevrotain_1 = require("chevrotain");
const morphTokens_1 = require("./morphTokens");
const lexer_1 = require("./lexer");
class SyntaxParser extends chevrotain_1.Parser {
    constructor(input) {
        super(input, morphTokens_1.morphTokens);
        this.sentence = this.RULE('sentence', () => this.SUBRULE(this.vp));
        this.vp = this.RULE('vp', () => this.SUBRULE(this.imperativeVP));
        this.imperativeVP = this.RULE('imperativeVP', () => {
            this.OR([
                { ALT: () => {
                        this.SUBRULE(this.imperativeVerb);
                        this.SUBRULE(this.imperativeNP);
                    } },
                { ALT: () => this.SUBRULE(this.imperativeVerb) }
            ]);
        });
        this.imperativeVerb = this.RULE('imperativeVerb', () => this.CONSUME(morphTokens_1.morphTokens.VERBTranPerfSingImpr));
        this.imperativeNP = this.RULE('imperativeNP', () => {
            this.OR([
                { ALT: () => {
                        this.SUBRULE(this.qualImperativeNoun);
                        this.SUBRULE(this.pp);
                    } },
                { ALT: () => this.SUBRULE(this.qualImperativeNoun) }
            ]);
        });
        this.qualImperativeNoun = this.RULE('qualImperativeNoun', () => {
            this.OR([
                { ALT: () => {
                        this.SUBRULE(this.imperativeDets);
                        this.SUBRULE(this.imperativeNoun);
                    } },
                { ALT: () => this.SUBRULE(this.imperativeNoun) }
            ]);
        });
        this.imperativeDets = this.RULE('imperativeDets', () => {
            this.OR([
                { ALT: () => {
                        this.SUBRULE(this.imperativeDets);
                        this.SUBRULE(this.imperativeDet);
                    } },
                { ALT: () => this.SUBRULE(this.imperativeDet) }
            ]);
        });
        this.imperativeDet = this.RULE('imperativeDet', () => {
            this.OR([
                { ALT: () => this.CONSUME(morphTokens_1.morphTokens.ADJFAProPlurAccs) },
                { ALT: () => this.CONSUME(morphTokens_1.morphTokens.ADJFQualPlurAccs) }
            ]);
        });
        this.imperativeNoun = this.RULE('imperativeNoun', () => this.SUBRULE(this.nounAccs));
        this.nounAccs = this.RULE('nounAccs', () => {
            this.OR([
                { ALT: () => this.CONSUME(morphTokens_1.morphTokens.NOUNAnimMascPlurAccs) },
                { ALT: () => this.CONSUME(morphTokens_1.morphTokens.NOUNAnimFemnPlurAccs) },
                { ALT: () => this.CONSUME(morphTokens_1.morphTokens.NOUNAnimNeutPlurAccs) },
                { ALT: () => this.CONSUME(morphTokens_1.morphTokens.NOUNInanMascPlurAccs) },
                { ALT: () => this.CONSUME(morphTokens_1.morphTokens.NOUNInanFemnPlurAccs) },
                { ALT: () => this.CONSUME(morphTokens_1.morphTokens.NOUNInanNeutPlurAccs) },
            ]);
        });
        this.pp = this.RULE('pp', () => {
            this.SUBRULE(this.prep);
            this.SUBRULE(this.ppNoun);
        });
        this.prep = this.RULE('prep', () => this.CONSUME(morphTokens_1.morphTokens.prepPlace));
        this.ppNoun = this.RULE('ppNoun', () => {
            this.OR([
                { ALT: () => {
                        this.SUBRULE(this.ppNoun);
                        this.CONSUME(morphTokens_1.morphTokens.conj);
                        this.SUBRULE(this.nounGent);
                    } },
                { ALT: () => this.SUBRULE(this.nounGent) }
            ]);
        });
        this.nounGent = this.RULE('nounGent', () => {
            this.OR([
                { ALT: () => this.CONSUME(morphTokens_1.morphTokens.NOUNInanMascSingGent) },
                { ALT: () => this.CONSUME(morphTokens_1.morphTokens.NOUNInanFemnSingGent) },
                { ALT: () => this.CONSUME(morphTokens_1.morphTokens.NOUNInanNeutSingGent) },
                { ALT: () => this.CONSUME(morphTokens_1.morphTokens.NOUNInanMascPlurGent) },
                { ALT: () => this.CONSUME(morphTokens_1.morphTokens.NOUNInanFemnPlurGent) },
                { ALT: () => this.CONSUME(morphTokens_1.morphTokens.NOUNInanNeutPlurGent) },
            ]);
        });
        chevrotain_1.Parser.performSelfAnalysis(this);
    }
    ;
}
;
// reuse the same parser instance.
const parser = new SyntaxParser([]);
function parsePhrase(text) {
    const lexResult = lexer_1.scan(text);
    let value;
    const found = lexResult.some(t => {
        parser.input = t;
        value = parser.sentence();
        return !parser.errors.length;
    });
    if (found) {
        return value;
    }
}
exports.parsePhrase = parsePhrase;
//# sourceMappingURL=parser.js.map