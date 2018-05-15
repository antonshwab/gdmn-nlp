import { tokenize } from "../tokenizer";

test('tokenizer', () => {
  const tokens = tokenize('слово , \n\rслово\n');
  expect(tokens.length).toEqual(7);
});

