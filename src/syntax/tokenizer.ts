import { createToken, Lexer, IToken } from 'chevrotain';

export const WhiteSpace = createToken({
  name: 'WhiteSpace',
  pattern: /[ \t]+/,
  line_breaks: false
});

export const LineBreak = createToken({
  name: 'LineBreak',
  pattern: /[\n\r]+/,
  line_breaks: true
});

export const PunctuationMark = createToken({
  name: 'PunctuationMark',
  pattern: /[.,?!]{1}/
});

export const CyrillicWord = createToken({
  name: 'CyrillicWord',
  pattern: /(?:[А-Яа-я]+-[А-Яа-я]+)|(?:[А-Яа-я]+)/
});

export const Other = createToken({
  name: 'Other',
  pattern: /[A-Za-z0-9]+/
})

const allTokens = [
  LineBreak,
  WhiteSpace,
  PunctuationMark,
  CyrillicWord,
  Other
];

export const tokenizer = new Lexer(allTokens);

export function tokenize(text: string): IToken[] {
  const tokenized = tokenizer.tokenize(text);

  if (tokenized.errors.length) {
    throw new Error(`Invalid text "${text}". Tokenizer errors: ${JSON.stringify(tokenized.errors, undefined, 2)}`);
  }

  return tokenized.tokens;
}

