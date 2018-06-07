import { morphAnalyzer } from "../../morphology/morphAnalyzer";
import { SemContext } from '../types';
import { hasMeaning } from '../rusVerbSynonyms';
import { RusVerb } from "../../morphology/rusVerb";

describe('синонимы', () => {
  test("синонимы для слова покажи", () => {
    const v = morphAnalyzer('вывести')[0];
    expect(hasMeaning(SemContext.QueryDB, 'показать', (v as RusVerb))).toBeTruthy();

    const p = morphAnalyzer('продемонстрируй')[0];
    expect(hasMeaning(SemContext.QueryDB, 'покажи', (v as RusVerb))).toBeTruthy();
  });

  test("синонимы для слова удалить", () => {
    const v = morphAnalyzer('удалить')[0];
    expect(hasMeaning(SemContext.QueryDB, 'уничтожить', (v as RusVerb))).toBeTruthy();
  });

  test("синонимы для слова уничтожить", () => {
    const v = morphAnalyzer('уничтожить')[0];
    expect(hasMeaning(SemContext.QueryDB, 'удалить', (v as RusVerb))).toBeTruthy();
  });
});