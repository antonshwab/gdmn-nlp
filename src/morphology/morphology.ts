import { getNextID } from '../utils/idGenerator';

export class Lexeme {
  constructor (public readonly stem: string = '', public readonly stem1: string = '', public readonly stem2: string = '') { }

  public analyze(word: string, result: (w: Word) => void): void {
    if (word.startsWith(this.stem)
      || (this.stem1 && word.startsWith(this.stem1))
      || (this.stem2 && word.startsWith(this.stem2)))
    {
      this.getWordForms().filter( f => f.word === word ).forEach( f => result(f) );
    }
  }

  public getWordForms(): Words {
    return [];
  }
}

export class ConjunctionLexeme extends Lexeme { }

export class NounLexeme extends Lexeme { }

export class VerbLexeme extends Lexeme { }

export class AdjectiveLexeme extends Lexeme { }

export class PrepositionLexeme extends Lexeme { }

export class PronounLexeme extends Lexeme { }

export class Word {
  readonly id: number = getNextID();
  constructor (public readonly word: string, public readonly lexeme: Lexeme) { }
  getText (): string { return this.word; }
  getDisplayText (): string { return this.getText(); }
  getSignature (): string { return ''; }
}

export class Conjunction extends Word { }

export class Noun extends Word { }

export class Verb extends Word { }

export class Adjective extends Word { }

export class Preposition extends Word { }

export class Pronoun extends Word { }

export type Words = Word[];
