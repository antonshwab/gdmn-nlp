import { IToken, TokenType, createToken, Lexer } from 'chevrotain';
import { Word } from '../morphology/morphology';
import { tokenizer, RusWord } from '../syntax/tokenizer';
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

  const tokenized = tokenizer.tokenize(text);

  if (tokenized.errors.length) {
    throw new Error(`Invalid text ${text}. Errors: ${JSON.stringify(tokenized.errors, undefined, 2)}`);
  }

  const words = tokenized.tokens.reduce(
    (p, t) => {
      if (t.tokenType === RusWord) {
        p.push(morphAnalyzer(t.image));
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