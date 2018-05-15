import { tokenize } from "../tokenizer";

test('tokenizer', () => {

  const tokens = tokenize('слово , \n\rслово\n');

  console.log(JSON.stringify(tokens, undefined, 2));

  expect(tokens.length).toEqual(7);

});

