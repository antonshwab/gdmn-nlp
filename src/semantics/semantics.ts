import { Word } from '../morphology/morphology';
import { getNextID } from '../utils/idGenerator';

export class Sentence {}

export type PhraseItem = Word | Phrase;

export class Phrase {
  readonly id: number = getNextID();

  constructor (public items: PhraseItem[]) {}

  getText(): string {
    return this.items.reduce(
      (prev, p) =>
        prev + p.getText() + ' ',
      ''
    );
  }

  simplify() {
    const recurs = (parentParent: Phrase, parent: Phrase, idx: number) => {
      parent.items.forEach(
        (i, x) => {
          if (i.constructor === parent.constructor) {
            recurs(parent, i as Phrase, x);
          }
        }
      );

      if (parent.items.length === 1) {
        const temp = parent.items[0];
        parent.items = [];
        parentParent.items[idx] = temp;
      }
    };

    this.items.forEach(
      (i, idx) => {
        if (i.constructor === this.constructor) {
          recurs(this, i as Phrase, idx);
        }
      }
    );
  }
}

export class VP extends Phrase {}

export class NP extends Phrase {}

export class ANP extends NP {}

export class PP extends NP {}
