import { PronounLexeme, Pronoun, Words, Word } from './morphology';
import { RusCase, RusCaseNames, RusPronounData, RusPronounTypeNames,
  ShortCaseNames, ShortPronounTypeNames } from './types';
import { rusPronouns } from './rusPronounsData';

export class RusPronounLexeme extends PronounLexeme {
  public data: RusPronounData;

  constructor (data: RusPronounData) {
    super(data.words[0]);
    this.data = data;
  }

  public analyze(word: string, result: (w: Word) => void): void {
    this.data.words.some( (d, idx) => {
        if (d === word && (!this.data.noNomn || idx !== RusCase.Nomn)) {
          result(new RusPronoun(word, this, idx));
          return true;
        } else {
          return false;
        }
      }
    );
  }

  public getWordForm(c: RusCase): Word {
    return new RusPronoun(this.data.words[c], this, c);
  }

  public getWordForms(): Words {
    return this.data.words.map( (d, idx) => new RusPronoun(d, this, idx) );
  }
}

export const RusPronounLexemes: RusPronounLexeme[] = rusPronouns.map(
  p => new RusPronounLexeme(p)
);

export class RusPronoun extends Pronoun {
  public readonly grammCase: RusCase;

  constructor (word: string, lexeme: RusPronounLexeme, grammCase: RusCase) {
    super(word, lexeme);
    this.grammCase = grammCase;
  }

  getDisplayText (): string {
    return this.word + '; ' + RusPronounTypeNames[(this.lexeme as RusPronounLexeme).data.pronounType] +
      ' местоимение; ' + RusCaseNames[this.grammCase];
  }

  getSignature (): string {
    return 'NPRO' + ShortPronounTypeNames[(this.lexeme as RusPronounLexeme).data.pronounType] +
      ShortCaseNames[this.grammCase];
  }
}
