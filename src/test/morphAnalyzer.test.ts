import { morphAnalyzer, RusAdjective, RusCase } from "..";

test("morphAnalyzer", () => {

  const result = morphAnalyzer('самый');
  expect(result[0]).toBeDefined();
  expect(result[0] instanceof RusAdjective).toBeTruthy();
  expect((result[0] as RusAdjective).grammCase).toEqual(RusCase.Nomn);
  expect(result[1]).toBeDefined();
  expect(result[1] instanceof RusAdjective).toBeTruthy();
  expect((result[1] as RusAdjective).grammCase).toEqual(RusCase.Accs);
});