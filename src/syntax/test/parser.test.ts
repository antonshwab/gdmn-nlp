import { parsePhrase } from "../parser";
import { Word } from "../../morphology/morphology";
import { Phrase } from "../syntax";
import { combinatorialMorph } from "../lexer";

describe("parser", () => {
  test("vp", () => {
    const result = parsePhrase('покажи все организации из минска');
    const vp = result.phrase;
    expect(vp).toBeDefined();
    const verb = vp!.items[0] as Word;
    expect(verb).toBeDefined();
    expect(verb.word).toEqual('покажи');
    const np = vp!.items[1] as Phrase;
    const anp = np!.items[0] as Phrase;
    const pp = np!.items[1] as Phrase;
    expect((anp!.items[0] as Word).word).toEqual('все');
    expect((anp!.items[1] as Word).word).toEqual('организации');
    expect((pp!.items[0] as Word).word).toEqual('из');
    expect((pp!.items[1] as Word).word).toEqual('минска');
  });

  test("vp2", () => {
    const result = parsePhrase('покажи минские организации');
    const vp = result.phrase;
    expect(vp).toBeDefined();
    const verb = vp!.items[0] as Word;
    expect(verb).toBeDefined();
    expect(verb.word).toEqual('покажи');
    const np = vp!.items[1] as Phrase;
    const anp = np!.items[0] as Phrase;
    const pp = np!.items[1] as Phrase;
    expect((anp!.items[0] as Word).word).toEqual('минские');
    expect((anp!.items[1] as Word).word).toEqual('организации');
  });

  test("vp3", () => {
    const result = parsePhrase('покажи все организации');
    const vp = result.phrase;
    expect(vp).toBeDefined();
    const verb = vp!.items[0] as Word;
    expect(verb).toBeDefined();
    expect(verb.word).toEqual('покажи');
    const np = vp!.items[1] as Phrase;
    const anp = np!.items[0] as Phrase;
    const pp = np!.items[1] as Phrase;
    expect((anp!.items[0] as Word).word).toEqual('все');
    expect((anp!.items[1] as Word).word).toEqual('организации');
  });

  test("vp4", () => {
    const result = parsePhrase('покажи лучшие организации');
    const vp = result.phrase;
    expect(vp).toBeDefined();
    const verb = vp!.items[0] as Word;
    expect(verb).toBeDefined();
    expect(verb.word).toEqual('покажи');
    const np = vp!.items[1] as Phrase;
    const anp = np!.items[0] as Phrase;
    const pp = np!.items[1] as Phrase;
    expect((anp!.items[0] as Word).word).toEqual('лучшие');
    expect((anp!.items[1] as Word).word).toEqual('организации');
  });
});

test('combinatorialMorph', () => {
  const tokens = combinatorialMorph('большое поле');
  expect(tokens.length).toBe(6);
  expect(tokens[0][0].tokenType!.tokenName).toBe('ADJFQualNeutSingNomn');
  expect(tokens[0][1].tokenType!.tokenName).toBe('NOUNInanNeutSingNomn');
  expect(tokens[1][0].tokenType!.tokenName).toBe('ADJFQualNeutSingNomn');
  expect(tokens[1][1].tokenType!.tokenName).toBe('NOUNInanNeutSingAccs');
  expect(tokens[2][0].tokenType!.tokenName).toBe('ADJFQualNeutSingNomn');
  expect(tokens[2][1].tokenType!.tokenName).toBe('NOUNInanNeutSingLoct');
  expect(tokens[3][0].tokenType!.tokenName).toBe('ADJFQualNeutSingAccs');
  expect(tokens[3][1].tokenType!.tokenName).toBe('NOUNInanNeutSingNomn');
  expect(tokens[4][0].tokenType!.tokenName).toBe('ADJFQualNeutSingAccs');
  expect(tokens[4][1].tokenType!.tokenName).toBe('NOUNInanNeutSingAccs');
  expect(tokens[5][0].tokenType!.tokenName).toBe('ADJFQualNeutSingAccs');
  expect(tokens[5][1].tokenType!.tokenName).toBe('NOUNInanNeutSingLoct');
});