import { Lexer, createToken, IToken, TokenType } from "chevrotain";
import { Word } from "../morphology/morphology";
import { RusGender, RusCase, RusAdjectiveCategory } from "../morphology/types";
import { RusNoun, RusAdjective } from "..";

export interface IMorphToken extends IToken {
  word: Word;
};

export interface ITokenTypes {
  [name: string]: TokenType
};

const signatures = [
  'VERBTranPerfSingImpr',
  'ADJFAProPlurAccs',
  'ADJFQualPlurAccs',
  'ADJFQualNeutSingNomn',
  'PREPPlce',
  'CONJ'
];

export const morphTokens = (() => {
  [true, false].forEach( an =>
    [RusGender.Masc, RusGender.Femn, RusGender.Neut].forEach( gender =>
      [true, false].forEach( singular =>
        [RusCase.Nomn, RusCase.Gent, RusCase.Datv, RusCase.Accs, RusCase.Ablt, RusCase.Loct].forEach( grammCase =>
          signatures.push(RusNoun.getSignature(an, gender, singular, grammCase))
        )
      )
    )
  );

  [RusGender.Masc, RusGender.Femn, RusGender.Neut].forEach( gender =>
    [true, false].forEach( singular =>
      [RusCase.Nomn, RusCase.Gent, RusCase.Datv, RusCase.Accs, RusCase.Ablt, RusCase.Loct].forEach( grammCase =>
        signatures.push(RusAdjective.getSignature(false, RusAdjectiveCategory.Qual, gender, singular, grammCase))
      )
    )
  );

  return signatures.reduce(
    (p, s) => {
      p[s] = createToken({ name: s, pattern: Lexer.NA });
      return p;
    },
    {} as ITokenTypes
  );
})();