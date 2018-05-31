import {
  createToken,
  Lexer,
  Parser,
  IToken,
  ILexingError,
  IRecognitionException,
  TokenType
} from 'chevrotain';
import { ITokenTypes, morphTokens } from './rusMorphTokens';
import { combinatorialMorph } from './lexer';
import { VP, NP, PP, ANP, ParsedText, Phrase, ImperativeVP } from '..';

/**
 * Грамматика для фразы типа "Покажи все организации из Минска"
 */
class VPParser extends Parser {
  constructor(input: IToken[]) {
    super(input, morphTokens, { outputCst: true });
    Parser.performSelfAnalysis(this);
  };

  public sentence = this.RULE('sentence', () => this.SUBRULE(this.vp) );

  public vp = this.RULE('vp', () => this.SUBRULE(this.imperativeVP) );

  public imperativeVP = this.RULE('imperativeVP', () => {
    this.SUBRULE(this.imperativeVerb);
    this.SUBRULE(this.imperativeNP);
  });

  public imperativeVerb = this.RULE('imperativeVerb', () => this.CONSUME(morphTokens.VERBTranPerfSingImpr) );

  public imperativeNP = this.RULE('imperativeNP', () => {
    this.SUBRULE(this.qualImperativeNoun);
    this.OPTION( () => this.SUBRULE(this.pp) );
  });

  public qualImperativeNoun = this.RULE('qualImperativeNoun', () => {
    this.OPTION( () => this.SUBRULE(this.imperativeDets) );
    this.SUBRULE(this.imperativeNoun);
  });

  public imperativeDets = this.RULE('imperativeDets', () => {
    this.SUBRULE(this.imperativeDet);
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

  public prep = this.RULE('prep', () => this.CONSUME(morphTokens.PREPPlce) );

  public ppNoun = this.RULE('ppNoun', () => {
    this.SUBRULE(this.nounGent);
    this.OPTION( () => {
      this.CONSUME(morphTokens.CONJ);
      this.SUBRULE(this.ppNoun);
    });
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

const vpParser = new VPParser([]);

const BaseVPVisitor = vpParser.getBaseCstVisitorConstructor();

class VPVisitor extends BaseVPVisitor {
  constructor() {
    super();
    this.validateVisitor();
  }

  public sentence = (ctx: any) => {
    return this.visit(ctx.vp);
  }

  public vp = (ctx: any) => {
    return this.visit(ctx.imperativeVP);
  }

  public imperativeVP = (ctx: any) => {
    const imperativeVerb = this.visit(ctx.imperativeVerb);
    const imperativeNP = this.visit(ctx.imperativeNP);

    return new ImperativeVP(imperativeVerb, imperativeNP);
  }

  public imperativeVerb = (ctx: any) => {
    return ctx.VERBTranPerfSingImpr[0].word;
  }

  public imperativeNP = (ctx: any) => {
    if (ctx.pp) {
      return new NP([this.visit(ctx.qualImperativeNoun), this.visit(ctx.pp)]);
    } else {
      return new NP([this.visit(ctx.qualImperativeNoun)]);
    }
  }

  public qualImperativeNoun = (ctx: any) => {
    if (ctx.imperativeDets) {
      return new ANP(this.visit(ctx.imperativeDets), this.visit(ctx.imperativeNoun));
    } else {
      return this.visit(ctx.imperativeNoun);
    };
  }

  public imperativeDets = (ctx: any) => {
    return this.visit(ctx.imperativeDet);
  }

  public imperativeDet = (ctx: any) => {
    return ctx.ADJFAProPlurAccs ? ctx.ADJFAProPlurAccs[0].word
      : ctx.ADJFQualPlurAccs ? ctx.ADJFQualPlurAccs[0].word
      : undefined;
  }

  public imperativeNoun = (ctx: any) => {
    return this.visit(ctx.nounAccs);
  }

  public nounAccs = (ctx: any) => {
    return ctx.NOUNAnimMascPlurAccs ? ctx.NOUNAnimMascPlurAccs[0].word
      : ctx.NOUNAnimFemnPlurAccs ? ctx.NOUNAnimFemnPlurAccs[0].word
      : ctx.NOUNAnimNeutPlurAccs ? ctx.NOUNAnimNeutPlurAccs[0].word
      : ctx.NOUNInanMascPlurAccs ? ctx.NOUNInanMascPlurAccs[0].word
      : ctx.NOUNInanFemnPlurAccs ? ctx.NOUNInanFemnPlurAccs[0].word
      : ctx.NOUNInanNeutPlurAccs ? ctx.NOUNInanNeutPlurAccs[0].word
      : undefined;
  }

  public pp = (ctx: any) => {
    return new PP(this.visit(ctx.prep), this.visit(ctx.ppNoun));
  }

  public prep = (ctx: any) => {
    return ctx.PREPPlce[0].word;
  }

  public ppNoun = (ctx: any) => {
    return this.visit(ctx.nounGent);
  }

  public nounGent = (ctx: any) => {
    return ctx.NOUNInanMascSingGent ? ctx.NOUNInanMascSingGent[0].word
      : ctx.NOUNInanFemnSingGent ? ctx.NOUNInanFemnSingGent[0].word
      : ctx.NOUNInanNeutSingGent ? ctx.NOUNInanNeutSingGent[0].word
      : ctx.NOUNInanMascPlurGent ? ctx.NOUNInanMascPlurGent[0].word
      : ctx.NOUNInanFemnPlurGent ? ctx.NOUNInanFemnPlurGent[0].word
      : ctx.NOUNInanNeutPlurGent ? ctx.NOUNInanNeutPlurGent[0].word
      : undefined;
  }

};

const toVPInstance = new VPVisitor();

export type ParsedText = {
  readonly wordsSignatures: string[];
  readonly phrase?: Phrase;
};

export function parsePhrase(text: string): ParsedText {
  let wordsSignatures: string[] = [];
  let phrase: Phrase | undefined = undefined;

  combinatorialMorph(text).some( t => {
    vpParser.input = t;
    const value = vpParser.sentence();
    wordsSignatures = t.map( y => y.word.getSignature() );
    if (value && !vpParser.errors.length) {
      phrase = toVPInstance.visit(value);
      return true;
    } else {
      return false;
    }
  })

  if (phrase) {
    return {
      wordsSignatures,
      phrase
    }
  } else {
    return {
      wordsSignatures
    }
  }
}

