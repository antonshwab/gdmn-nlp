import {
  createToken,
  Lexer,
  Parser,
  IToken,
  ILexingError,
  IRecognitionException,
  TokenType
} from 'chevrotain';
import { ITokenTypes, morphTokens } from './morphTokens';
import { scan } from './lexer';

class SyntaxParser extends Parser {
  constructor(input: IToken[]) {
    super(input, morphTokens);
    Parser.performSelfAnalysis(this);
  };

  public sentence = this.RULE('sentence', () => this.SUBRULE(this.vp) );

  public vp = this.RULE('vp', () => this.SUBRULE(this.imperativeVP) );

  public imperativeVP = this.RULE('imperativeVP', () => {
    this.OR([
      { ALT: () => {
        this.SUBRULE(this.imperativeVerb);
        this.SUBRULE(this.imperativeNP);
      }},
      { ALT: () => this.SUBRULE(this.imperativeVerb) }
    ]);
  });

  public imperativeVerb = this.RULE('imperativeVerb', () => this.CONSUME(morphTokens.VERBTranPerfSingImpr) );

  public imperativeNP = this.RULE('imperativeNP', () => {
    this.OR([
      { ALT: () => {
        this.SUBRULE(this.qualImperativeNoun);
        this.SUBRULE(this.pp);
      }},
      { ALT: () => this.SUBRULE(this.qualImperativeNoun) }
    ]);
  });

  public qualImperativeNoun = this.RULE('qualImperativeNoun', () => {
    this.OR([
      { ALT: () => {
        this.SUBRULE(this.imperativeDets);
        this.SUBRULE(this.imperativeNoun);
      }},
      { ALT: () => this.SUBRULE(this.imperativeNoun) }
    ]);
  });

  public imperativeDets = this.RULE('imperativeDets', () => {
    this.OR([
      { ALT: () => {
        this.SUBRULE(this.imperativeDets);
        this.SUBRULE(this.imperativeDet);
      }},
      { ALT: () => this.SUBRULE(this.imperativeDet) }
    ]);
  });

  public imperativeDet = this.RULE('imperativeDet', () => {
    this.OR([
      { ALT: () => this.CONSUME(morphTokens.ADJFAProPlurAccs) },
      { ALT: () => this.CONSUME(morphTokens.ADJFQualPlurAccs) }
    ]);
  });

  public imperativeNoun = this.RULE('imperativeNoun', () => this.SUBRULE(this.nounAccs) );

  public nounAccs = this.RULE('nounAccs', () => {
    this.OR([
      { ALT: () => this.CONSUME(morphTokens.NOUNAnimMascPlurAccs) },
      { ALT: () => this.CONSUME(morphTokens.NOUNAnimFemnPlurAccs) },
      { ALT: () => this.CONSUME(morphTokens.NOUNAnimNeutPlurAccs) },
      { ALT: () => this.CONSUME(morphTokens.NOUNInanMascPlurAccs) },
      { ALT: () => this.CONSUME(morphTokens.NOUNInanFemnPlurAccs) },
      { ALT: () => this.CONSUME(morphTokens.NOUNInanNeutPlurAccs) },
    ]);
  });

  public pp = this.RULE('pp', () => {
    this.SUBRULE(this.prep);
    this.SUBRULE(this.ppNoun);
  });

  public prep = this.RULE('prep', () => this.CONSUME(morphTokens.prepPlace) );

  public ppNoun = this.RULE('ppNoun', () => {
    this.OR([
      { ALT: () => {
        this.SUBRULE(this.ppNoun);
        this.CONSUME(morphTokens.conj);
        this.SUBRULE(this.nounGent);
      }},
      { ALT: () => this.SUBRULE(this.nounGent) }
    ]);
  });

  public nounGent = this.RULE('nounGent', () => {
    this.OR([
      { ALT: () => this.CONSUME(morphTokens.NOUNInanMascSingGent) },
      { ALT: () => this.CONSUME(morphTokens.NOUNInanFemnSingGent) },
      { ALT: () => this.CONSUME(morphTokens.NOUNInanNeutSingGent) },
      { ALT: () => this.CONSUME(morphTokens.NOUNInanMascPlurGent) },
      { ALT: () => this.CONSUME(morphTokens.NOUNInanFemnPlurGent) },
      { ALT: () => this.CONSUME(morphTokens.NOUNInanNeutPlurGent) },
    ]);
  });
};

// reuse the same parser instance.
const parser = new SyntaxParser([]);

export function parsePhrase(text: string) {
  const lexResult = scan(text);
  let value;

  const found = lexResult.some( t => {
    parser.input = t;
    value = parser.sentence();
    return !parser.errors.length;
  })

  if (found) {
    return value;
  }
}
