import { Words, Lexeme, Word } from './morphology';
import { RusNounLexemes } from './rusNoun';
import { RusVerbLexemes } from './rusVerb';
import { RusAdjectiveLexemes } from './rusAdjective';
import { RusPrepositionLexemes } from './rusPreposition';
import { RusPronounLexemes } from './rusPronoun';
import { RusConjunctionLexemes } from './rusConjunction';

export function morphAnalyzer(word: string): Words {
  const res: Words = [];
  const resFunc = function (w: Word): void { res.push(w); };
  const lw = word.toLowerCase();
  const pos: Lexeme[][] = [RusNounLexemes, RusVerbLexemes, RusAdjectiveLexemes,
    RusPronounLexemes, RusConjunctionLexemes, RusPrepositionLexemes];
  pos.forEach( lexemes => lexemes.forEach( l => l.analyze(lw, resFunc)) );
  return res;
}