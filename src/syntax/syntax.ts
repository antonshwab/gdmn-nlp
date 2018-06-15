import { Word, Verb, Preposition, Noun, Adjective } from '../morphology/morphology';
import { getNextID } from '../utils/idGenerator';

export class Sentence {}

export type PhraseItem = Word | Phrase;

export class Phrase {
  public items: PhraseItem[];
  readonly id: number = getNextID();

  constructor (items: PhraseItem[]) {
    if (!items.length || items.find( i => !i ) ) {
      throw new Error('Invalid phrase items');
    }

    this.items = items;
  }

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

export class ImperativeVP<V extends Verb, N extends Noun, A extends Adjective, P extends Preposition> extends VP {
  constructor (imperativeVerb: V, imperativeNP?: NP<N, A, P>) {
    if (imperativeNP) {
      super([imperativeVerb, imperativeNP]);
    } else {
      super([imperativeVerb]);
    }
  }

  get imperativeVerb(): V {
    return this.items[0] as V;
  }

  get imperativeNP(): NP<N, A, P> | undefined {
    if (!this.items[1]) {
      return undefined;
    } else {
      return this.items[1] as NP<N, A, P>;
    }
  }
}

export class NP<N extends Noun, A extends Adjective, P extends Preposition> extends Phrase {
  constructor (n: N | ANP<A, N>, pp?: PP<P, N>) {
    if (pp) {
      super([n, pp]);
    } else {
      super([n]);
    }
  }

  get noun(): N | ANP<A, N> {
    if (this.items[0] instanceof Noun) {
      return this.items[0] as N;
    } else {
      return this.items[0] as ANP<A, N>;
    }
  }

  get pp(): PP<P, N> | undefined {
    if (this.items[1] instanceof PP) {
      return this.items[1] as PP<P, N>;
    } else {
      return undefined;
    }
  }
}

export class ANP<A extends Adjective, N extends Noun> extends Phrase {
  constructor (adjf: A, noun: N) {
    super([adjf, noun]);
  }

  get adjf(): A {
    return this.items[0] as A;
  }

  get noun(): N {
    return this.items[1] as N;
  }
}

export class PP<P extends Preposition, N extends Noun> extends Phrase {
  constructor (prep: P, noun: N) {
    super([prep, noun]);
  }

  get prep(): P {
    return this.items[0] as P;
  }

  get noun(): N {
    return this.items[1] as N;
  }
}
