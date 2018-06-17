import { RusVerb } from '../morphology/rusVerb';
import { RusNoun } from '../morphology/rusNoun';
import { RusAdjective } from '../morphology/rusAdjective';
import { RusPreposition } from '../morphology/rusPreposition';
import { RusWord } from '../morphology/rusMorphology';
import { Phrase } from './syntax';

export class RusPhrase extends Phrase<RusWord> {};

export class RusVP extends RusPhrase {}

export class RusImperativeVP extends RusVP {
  constructor (imperativeVerb: RusVerb, imperativeNP?: RusNP) {
    if (imperativeNP) {
      super([imperativeVerb, imperativeNP]);
    } else {
      super([imperativeVerb]);
    }
  }

  get imperativeVerb(): RusVerb {
    return this.items[0] as RusVerb;
  }

  get imperativeNP(): RusNP | undefined {
    if (!this.items[1]) {
      return undefined;
    } else {
      return this.items[1] as RusNP;
    }
  }
}

export class RusNP extends RusPhrase {
  constructor (n: RusNoun | RusANP, pp?: RusPP) {
    if (pp) {
      super([n, pp]);
    } else {
      super([n]);
    }
  }

  get noun(): RusNoun | RusANP {
    if (this.items[0] instanceof RusNoun) {
      return this.items[0] as RusNoun;
    } else {
      return this.items[0] as RusANP;
    }
  }

  get pp(): RusPP | undefined {
    if (this.items[1] instanceof RusPP) {
      return this.items[1] as RusPP;
    } else {
      return undefined;
    }
  }
}

export class RusANP extends RusPhrase {
  constructor (adjf: RusAdjective, noun: RusNoun) {
    super([adjf, noun]);
  }

  get adjf(): RusAdjective {
    return this.items[0] as RusAdjective;
  }

  get noun(): RusNoun {
    return this.items[1] as RusNoun;
  }
}

export class RusPP extends RusPhrase {
  constructor (prep: RusPreposition, noun: RusNoun) {
    super([prep, noun]);
  }

  get prep(): RusPreposition {
    return this.items[0] as RusPreposition;
  }

  get noun(): RusNoun {
    return this.items[1] as RusNoun;
  }
}