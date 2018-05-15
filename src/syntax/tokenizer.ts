import { createToken, Lexer, TokenType } from 'chevrotain';

export const WhiteSpace = createToken({
  name: 'WhiteSpace',
  pattern: /\s+/,
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

export const RusWord = createToken({
  name: 'RusWord',
  pattern: /[А-Яа-я]+/
});

export const Other = createToken({
  name: 'Other',
  pattern: /.+/
})

const allTokens = [
  LineBreak,
  WhiteSpace,
  PunctuationMark,
  RusWord,
  Other
];

export const tokenizer = new Lexer(allTokens);