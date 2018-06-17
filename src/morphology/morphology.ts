import { getNextID } from '../utils/idGenerator';
import { SemCategory } from '../semantics/categories';

export abstract class Lexeme {
  constructor (
    public readonly stem: string = '',
    public readonly stem1: string = '',
    public readonly stem2: string = '',
    public readonly semCategories: SemCategory[] = []
  ) { }

  public matchStems(word: string): boolean {
    return word.startsWith(this.stem)
      || (!!this.stem1 && word.startsWith(this.stem1))
      || (!!this.stem2 && word.startsWith(this.stem2));
  }

  public analyze(word: string, result: (w: AnyWord) => void): void {
    if (this.matchStems(word))
    {
      this.getWordForms().filter( f => f.word === word ).forEach( f => result(f) );
    }
  }

  public abstract getWordForms(): AnyWords;
}

export abstract class ConjunctionLexeme extends Lexeme { }

export abstract class NounLexeme extends Lexeme { }

export abstract class VerbLexeme extends Lexeme { }

export abstract class AdjectiveLexeme extends Lexeme { }

export abstract class PrepositionLexeme extends Lexeme { }

export abstract class PronounLexeme extends Lexeme { }

export abstract class Word<L extends Lexeme> {
  readonly id: number = getNextID();
  constructor (public readonly word: string, public readonly lexeme: L) { }
  getText (): string { return this.word; }
  getDisplayText (): string { return this.getText(); }
  getSignature (): string { return ''; }
}

export abstract class Conjunction<L extends ConjunctionLexeme> extends Word<L> { }

export abstract class Noun<L extends NounLexeme> extends Word<L> { }

export abstract class Verb<L extends VerbLexeme> extends Word<L> { }

export abstract class Adjective<L extends AdjectiveLexeme> extends Word<L> { }

export abstract class Preposition<L extends PrepositionLexeme> extends Word<L> { }

export abstract class Pronoun<L extends PrepositionLexeme> extends Word<L> { }

export type AnyWord = Word<Lexeme>;

export type AnyWords = AnyWord[];
