"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chevrotain_1 = require("chevrotain");
const rusMorphTokens_1 = require("./rusMorphTokens");
const lexer_1 = require("./lexer");
const __1 = require("..");
class VPParser extends chevrotain_1.Parser {
    constructor(input) {
        super(input, rusMorphTokens_1.morphTokens, { outputCst: true });
        this.sentence = this.RULE('sentence', () => this.SUBRULE(this.vp));
        this.vp = this.RULE('vp', () => this.SUBRULE(this.imperativeVP));
        this.imperativeVP = this.RULE('imperativeVP', () => {
            this.SUBRULE(this.imperativeVerb);
            this.SUBRULE(this.imperativeNP);
        });
        this.imperativeVerb = this.RULE('imperativeVerb', () => this.CONSUME(rusMorphTokens_1.morphTokens.VERBTranPerfSingImpr));
        this.imperativeNP = this.RULE('imperativeNP', () => {
            this.SUBRULE(this.qualImperativeNoun);
            this.OPTION(() => this.SUBRULE(this.pp));
        });
        this.qualImperativeNoun = this.RULE('qualImperativeNoun', () => {
            this.OPTION(() => this.SUBRULE(this.imperativeDets));
            this.SUBRULE(this.imperativeNoun);
        });
        this.imperativeDets = this.RULE('imperativeDets', () => {
            this.SUBRULE(this.imperativeDet);
        });
        this.imperativeDet = this.RULE('imperativeDet', () => {
            this.OR([
                { ALT: () => this.CONSUME(rusMorphTokens_1.morphTokens.ADJFAProPlurAccs) },
                { ALT: () => this.CONSUME(rusMorphTokens_1.morphTokens.ADJFQualPlurAccs) }
            ]);
        });
        this.imperativeNoun = this.RULE('imperativeNoun', () => this.SUBRULE(this.nounAccs));
        this.nounAccs = this.RULE('nounAccs', () => {
            this.OR([
                { ALT: () => this.CONSUME(rusMorphTokens_1.morphTokens.NOUNAnimMascPlurAccs) },
                { ALT: () => this.CONSUME(rusMorphTokens_1.morphTokens.NOUNAnimFemnPlurAccs) },
                { ALT: () => this.CONSUME(rusMorphTokens_1.morphTokens.NOUNAnimNeutPlurAccs) },
                { ALT: () => this.CONSUME(rusMorphTokens_1.morphTokens.NOUNInanMascPlurAccs) },
                { ALT: () => this.CONSUME(rusMorphTokens_1.morphTokens.NOUNInanFemnPlurAccs) },
                { ALT: () => this.CONSUME(rusMorphTokens_1.morphTokens.NOUNInanNeutPlurAccs) },
            ]);
        });
        this.pp = this.RULE('pp', () => {
            this.SUBRULE(this.prep);
            this.SUBRULE(this.ppNoun);
        });
        this.prep = this.RULE('prep', () => this.CONSUME(rusMorphTokens_1.morphTokens.PREPPlce));
        this.ppNoun = this.RULE('ppNoun', () => {
            this.SUBRULE(this.nounGent);
            this.OPTION(() => {
                this.CONSUME(rusMorphTokens_1.morphTokens.CONJ);
                this.SUBRULE(this.ppNoun);
            });
        });
        this.nounGent = this.RULE('nounGent', () => {
            this.OR([
                { ALT: () => this.CONSUME(rusMorphTokens_1.morphTokens.NOUNInanMascSingGent) },
                { ALT: () => this.CONSUME(rusMorphTokens_1.morphTokens.NOUNInanFemnSingGent) },
                { ALT: () => this.CONSUME(rusMorphTokens_1.morphTokens.NOUNInanNeutSingGent) },
                { ALT: () => this.CONSUME(rusMorphTokens_1.morphTokens.NOUNInanMascPlurGent) },
                { ALT: () => this.CONSUME(rusMorphTokens_1.morphTokens.NOUNInanFemnPlurGent) },
                { ALT: () => this.CONSUME(rusMorphTokens_1.morphTokens.NOUNInanNeutPlurGent) },
            ]);
        });
        chevrotain_1.Parser.performSelfAnalysis(this);
    }
    ;
}
;
const vpParser = new VPParser([]);
const BaseVPVisitor = vpParser.getBaseCstVisitorConstructor();
class VPVisitor extends BaseVPVisitor {
    constructor() {
        super();
        this.sentence = (ctx) => {
            return this.visit(ctx.vp);
        };
        this.vp = (ctx) => {
            return this.visit(ctx.imperativeVP);
        };
        this.imperativeVP = (ctx) => {
            const imperativeVerb = this.visit(ctx.imperativeVerb);
            const imperativeNP = this.visit(ctx.imperativeNP);
            return new __1.VP([imperativeVerb, imperativeNP]);
        };
        this.imperativeVerb = (ctx) => {
            return ctx.VERBTranPerfSingImpr[0].word;
        };
        this.imperativeNP = (ctx) => {
            if (ctx.pp) {
                return new __1.NP([this.visit(ctx.qualImperativeNoun), this.visit(ctx.pp)]);
            }
            else {
                return new __1.NP([this.visit(ctx.qualImperativeNoun)]);
            }
        };
        this.qualImperativeNoun = (ctx) => {
            if (ctx.imperativeDets) {
                return new __1.ANP([this.visit(ctx.imperativeDets), this.visit(ctx.imperativeNoun)]);
            }
            else {
                return this.visit(ctx.imperativeNoun);
            }
            ;
        };
        this.imperativeDets = (ctx) => {
            return this.visit(ctx.imperativeDet);
        };
        this.imperativeDet = (ctx) => {
            return ctx.ADJFAProPlurAccs ? ctx.ADJFAProPlurAccs[0].word
                : ctx.ADJFQualPlurAccs ? ctx.ADJFQualPlurAccs[0].word
                    : undefined;
        };
        this.imperativeNoun = (ctx) => {
            return this.visit(ctx.nounAccs);
        };
        this.nounAccs = (ctx) => {
            return ctx.NOUNAnimMascPlurAccs ? ctx.NOUNAnimMascPlurAccs[0].word
                : ctx.NOUNAnimFemnPlurAccs ? ctx.NOUNAnimFemnPlurAccs[0].word
                    : ctx.NOUNAnimNeutPlurAccs ? ctx.NOUNAnimNeutPlurAccs[0].word
                        : ctx.NOUNInanMascPlurAccs ? ctx.NOUNInanMascPlurAccs[0].word
                            : ctx.NOUNInanFemnPlurAccs ? ctx.NOUNInanFemnPlurAccs[0].word
                                : ctx.NOUNInanNeutPlurAccs ? ctx.NOUNInanNeutPlurAccs[0].word
                                    : undefined;
        };
        this.pp = (ctx) => {
            return new __1.PP([this.visit(ctx.prep), this.visit(ctx.ppNoun)]);
        };
        this.prep = (ctx) => {
            return ctx.PREPPlce[0].word;
        };
        this.ppNoun = (ctx) => {
            return this.visit(ctx.nounGent);
        };
        this.nounGent = (ctx) => {
            return ctx.NOUNInanMascSingGent ? ctx.NOUNInanMascSingGent[0].word
                : ctx.NOUNInanFemnSingGent ? ctx.NOUNInanFemnSingGent[0].word
                    : ctx.NOUNInanNeutSingGent ? ctx.NOUNInanNeutSingGent[0].word
                        : ctx.NOUNInanMascPlurGent ? ctx.NOUNInanMascPlurGent[0].word
                            : ctx.NOUNInanFemnPlurGent ? ctx.NOUNInanFemnPlurGent[0].word
                                : ctx.NOUNInanNeutPlurGent ? ctx.NOUNInanNeutPlurGent[0].word
                                    : undefined;
        };
        this.validateVisitor();
    }
}
;
const toVPInstance = new VPVisitor();
function parsePhrase(text) {
    let value;
    let parsedText = [];
    lexer_1.scan(text).some(t => {
        vpParser.input = t;
        value = vpParser.sentence();
        parsedText = [t.reduce((x, y) => x + ' ' + y.word.getSignature(), '')];
        return !vpParser.errors.length;
    });
    if (value) {
        return {
            parsedText,
            phrase: toVPInstance.visit(value)
        };
    }
    else {
        return {
            parsedText
        };
    }
}
exports.parsePhrase = parsePhrase;
//# sourceMappingURL=parser.js.map