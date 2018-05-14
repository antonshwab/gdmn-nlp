import { parsePhrase } from "../syntax/parser";

test("parser", () => {
  const result = parsePhrase('покажи всех клиентов из минска');
  console.log('new parser ----------------------------------');
  console.log(JSON.stringify(result.phrase, undefined, 2));
  expect(result.phrase).toBeDefined();
});
