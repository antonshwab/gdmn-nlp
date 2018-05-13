import { IToken, TokenType, createToken, Lexer } from 'chevrotain';
import { Word } from '../morphology/morphology';
import { tokenize } from '../morphology/token';
import { morphAnalyzer } from '../morphology/morphAnalyzer';

export interface IMorphToken extends IToken {
  word: Word;
};

export interface ITokenTypes {
  [name: string]: TokenType
};

export function scan(text: string): { tokenTypes: TokenType[], tokens: IMorphToken[][] }
{
  const tokenTypes: ITokenTypes = {};

  function getTokenType(w: Word): TokenType {
    const typeSignature = w.getSignature();
    let result = tokenTypes[typeSignature];
    if (!result) {
      result = createToken({ name: typeSignature, pattern: Lexer.NA });
      tokenTypes[typeSignature] = result;
    }
    return result;
  }

  function createTokenInstance(w: Word): IMorphToken {
    const tokType = getTokenType(w);
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

  return {
    tokenTypes: Object.entries(tokenTypes).map( t => t[1] ),
    tokens: cmbn
  }
}