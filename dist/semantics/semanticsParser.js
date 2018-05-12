"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../morphology/token");
const morphAnalyzer_1 = require("../morphology/morphAnalyzer");
const grammar_1 = require("./grammar");
const semantics_1 = require("./semantics");
const jison = require('../jison/lib/jison');
const parser = new jison.Parser(grammar_1.grammar);
function recurs(words, curr, cmbn) {
    if (curr.length >= words.length - 1) {
        words[words.length - 1].forEach(w => cmbn.push([...curr, w]));
    }
    else {
        words[curr.length].forEach(w => recurs(words, [...curr, w], cmbn));
    }
}
function parseSemantics(text) {
    const words = token_1.tokenize(text).reduce((p, t) => {
        if (t.kind === 'word') {
            p.push(morphAnalyzer_1.morphAnalyzer(t.tkn));
        }
        return p;
    }, []);
    const cmbn = [];
    if (words.length) {
        recurs(words, [], cmbn);
    }
    const errors = [];
    const match = cmbn.find(s => {
        parser.lexer = {
            curr: 0,
            yytext: undefined,
            lex: function () {
                if (this.curr < s.length) {
                    this.yytext = s[this.curr];
                    return s[this.curr++].getSignature();
                }
                else {
                    return null;
                }
            },
            // tslint:disable-next-line:no-empty
            setInput: function (str) { }
        };
        parser.yy = {
            stack: [],
            node: function (kind, tokens, appendStack) {
                let stackTokens = [];
                if (appendStack && appendStack > 0) {
                    stackTokens = this.stack.splice(-appendStack);
                }
                switch (kind) {
                    case 'NP':
                        this.push(new semantics_1.NP([...tokens, ...stackTokens]));
                        break;
                    case 'VP':
                        this.push(new semantics_1.VP([...tokens, ...stackTokens]));
                        break;
                    case 'ANP':
                        this.push(new semantics_1.ANP(tokens));
                        break;
                    case 'PP':
                        if (tokens.length === 2) {
                            this.push(new semantics_1.PP(tokens));
                        }
                        else {
                            this.push(new semantics_1.PP([tokens[0], new semantics_1.NP(tokens.slice(1))]));
                        }
                        break;
                    default:
                        throw 'Unknown phrase type';
                }
                return this.stack[this.stack.length - 1];
            },
            push: function (w) {
                w.simplify();
                this.stack.push(w);
            }
        };
        try {
            parser.parse();
            return parser.yy.stack.length === 1;
        }
        catch (e) {
            errors.push(e.toString());
            return false;
        }
    });
    if (match) {
        return {
            parsedText: [match.reduce((x, y) => x + ' ' + y.getSignature(), '')],
            phrase: parser.yy.stack.pop()
        };
    }
    return {
        parsedText: errors
    };
}
exports.parseSemantics = parseSemantics;
//# sourceMappingURL=semanticsParser.js.map