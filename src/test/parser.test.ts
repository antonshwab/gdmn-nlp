import { parsePhrase } from "../syntax/parser";
import { parseSemantics } from "..";

test("parser", () => {
  const result = parsePhrase('покажи всех клиентов из минска');
  console.log(JSON.stringify(result, undefined, 2));
  expect(result).toBeDefined();
});

test("prev parser", () => {
  const result = parseSemantics('покажи всех клиентов из минска');
  console.log(JSON.stringify(result.phrase, undefined, 2));
  expect(result.phrase).toBeDefined();
});