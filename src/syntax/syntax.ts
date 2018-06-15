import { Word, Verb, Preposition, Noun, Adjective } from '../morphology/morphology';
import { getNextID } from '../utils/idGenerator';
import { RusPreposition } from '../morphology/rusPreposition';
import { RusVerb, RusAdjective, RusNoun } from '..';

export class Sentence {}

export type PhraseItem<V extends Verb, N extends Noun, A extends Adjective, P extends Preposition> = V | N | A | P | Phrase<V, N, A, P>;

export class Phrase<V extends Verb, N extends Noun, A extends Adjective, P extends Preposition> {
  public items: PhraseItem<V, N, A, P>[];
  readonly id: number = getNextID();

  constructor (items: PhraseItem<V, N, A, P>[]) {
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
    const recurs = (parentParent: Phrase<V, N, A, P>, parent: Phrase<V, N, A, P>, idx: number) => {
      parent.items.forEach(
        (i, x) => {
          if (i.constructor === parent.constructor) {
            recurs(parent, i as Phrase<V, N, A, P>, x);
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
          recurs(this, i as Phrase<V, N, A, P>, idx);
        }
      }
    );
  }
}

export class VP<V extends Verb, N extends Noun, A extends Adjective, P extends Preposition> extends Phrase<V, N, A, P> {}

export class ImperativeVP<V extends Verb, N extends Noun, A extends Adjective, P extends Preposition> extends VP<V, N, A, P> {
  constructor (imperativeVerb: V, imperativeNP?: NP<V, N, A, P>) {
    if (imperativeNP) {
      super([imperativeVerb, imperativeNP]);
    } else {
      super([imperativeVerb]);
    }
  }

  get imperativeVerb(): V {
    return this.items[0] as V;
  }

  get imperativeNP(): NP<V, N, A, P> | undefined {
    if (!this.items[1]) {
      return undefined;
    } else {
      return this.items[1] as NP<V, N, A, P>;
    }
  }
}

export class NP<V extends Verb, N extends Noun, A extends Adjective, P extends Preposition> extends Phrase<V, N, A, P> {
  constructor (n: N | ANP<V, N, A, P>, pp?: PP<V, N, A, P>) {
    if (pp) {
      super([n, pp]);
    } else {
      super([n]);
    }
  }

  get noun(): N | ANP<V, N, A, P> {
    if (this.items[0] instanceof Noun) {
      return this.items[0] as N;
    } else {
      return this.items[0] as ANP<V, N, A, P>;
    }
  }

  get pp(): PP<V, N, A, P> | undefined {
    if (this.items[1] instanceof PP) {
      return this.items[1] as PP<V, N, A, P>;
    } else {
      return undefined;
    }
  }
}

export class ANP<V extends Verb, N extends Noun, A extends Adjective, P extends Preposition> extends Phrase<V, N, A, P> {
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

export class PP<V extends Verb, N extends Noun, A extends Adjective, P extends Preposition> extends Phrase<V, N, A, P> {
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
