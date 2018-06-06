import { Word, Verb, Preposition, Noun, Adjective } from '../morphology/morphology';
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

export class ImperativeVP extends VP {
  constructor (imperativeVerb: Verb, imperativeNP?: NP) {
    if (imperativeNP) {
      super([imperativeVerb, imperativeNP]);
    } else {
      super([imperativeVerb]);
    }
  }

  get imperativeVerb(): Verb {
    return this.items[0] as Verb;
  }

  get imperativeNP(): NP | undefined {
    if (!this.items[1]) {
      return undefined;
    } else {
      return this.items[1] as NP;
    }
  }
}

export class NP extends Phrase {
  constructor (n: Noun | ANP, pp?: PP) {
    if (pp) {
      super([n, pp]);
    } else {
      super([n]);
    }
  }

  get noun(): Noun | ANP {
    if (this.items[0] instanceof Noun) {
      return this.items[0] as Noun;
    } else {
      return this.items[0] as ANP;
    }
  }

  get pp(): PP | undefined {
    if (this.items[1] instanceof PP) {
      return this.items[1] as PP;
    } else {
      return undefined;
    }
  }
}

export class ANP extends Phrase {
  constructor (adjf: Adjective, noun: Noun) {
    super([adjf, noun]);
  }

  get adjf(): Adjective {
    return this.items[0] as Adjective;
  }

  get noun(): Noun {
    return this.items[1] as Noun;
  }
}

export class PP extends Phrase {
  constructor (prep: Preposition, noun: Noun) {
    super([prep, noun]);
  }

  get prep(): Preposition {
    return this.items[0] as Preposition;
  }

  get noun(): Noun {
    return this.items[1] as Noun;
  }
}
