import { ConjunctionLexeme, Conjunction, Words, Word } from './morphology';

export class RusConjunctionLexeme extends ConjunctionLexeme {

  public analyze(word: string, result: (w: Word) => void): void {
    if (this.stem === word) {
      result(new RusConjunction(word, this));
    }
  }

  public getWordForm(): Word {
    return new RusConjunction(this.stem, this);
  }

  public getWordForms(): Words {
    return [new RusConjunction(this.stem, this)];
  }
}

const rusConjunctions = ['и', 'или'];

export const RusConjunctionLexemes: RusConjunctionLexeme[] = rusConjunctions.map(
  p => new RusConjunctionLexeme(p)
);

export class RusConjunction extends Conjunction {
  getDisplayText (): string {
    return this.word + '; союз';
  }

  getSignature (): string {
    return 'CONJ';
  }
}
