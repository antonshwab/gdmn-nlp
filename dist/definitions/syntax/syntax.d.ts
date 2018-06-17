import { AnyWord } from '../morphology/morphology';
export declare class Sentence {
}
export declare type PhraseItem<W extends AnyWord> = W | Phrase<W>;
export declare abstract class Phrase<W extends AnyWord> {
    items: PhraseItem<W>[];
    readonly id: number;
    constructor(items: PhraseItem<W>[]);
    getText(): string;
    simplify(): void;
}
