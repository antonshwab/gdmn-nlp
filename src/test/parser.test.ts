import { parsePhrase } from "../syntax/parser";
import { parseSemantics } from "..";

test("parser", () => {
  const result = parsePhrase('покажи всех клиентов из минска');
  console.log('new parser ----------------------------------');
  console.log(JSON.stringify(result.phrase, undefined, 2));
  expect(result.phrase).toBeDefined();
});

test("prev parser", () => {
  const result = parseSemantics('покажи всех клиентов из минска');
  console.log('prev parser ----------------------------------');
  console.log(JSON.stringify(result.phrase, undefined, 2));
  expect(result.phrase).toBeDefined();
});