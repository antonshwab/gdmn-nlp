import { IToken, TokenType, createToken, Lexer } from 'chevrotain';
import { Word } from '../morphology/morphology';
import { tokenize } from '../syntax/token';
import { morphAnalyzer } from '../morphology/morphAnalyzer';
import { IMorphToken, morphTokens } from './rusMorphTokens';

export function scan(text: string): IMorphToken[][]
{
  function createTokenInstance(w: Word): IMorphToken {
    const tokType = morphTokens[w.getSignature()];

    if (!tokType) {
      throw new Error(`Unknown type signature ${w.getSignature()} of word ${w.word}`);
    }

    return {
      word: w,
      image: w.word,
      startOffset: 1,
      tokenTypeIdx: (<any>tokType).tokenTypeIdx,
      tokenType: tokType
    }
  }

  const words = tokenize(text).reduce(
    (p, t) => {
      if (t.kind === 'word') {
        p.push(morphAnalyzer(t.tkn));
      }
      return p;
    },
    [] as Word[][]);

  const cmbn: IMorphToken[][] = [];

  function recurs(curr: IMorphToken[]): void {
    if (curr.length >= words.length - 1) {
      words[words.length - 1].forEach( w => cmbn.push([...curr, createTokenInstance(w)]) );
    } else {
      words[curr.length].forEach( w => recurs([...curr, createTokenInstance(w)]) );
    }
  }

  if (words.length) {
    recurs([]);
  }

  return cmbn;
};