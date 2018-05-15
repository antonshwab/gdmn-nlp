"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokenizer_1 = require("../tokenizer");
test('tokenizer', () => {
    const tokens = tokenizer_1.tokenize('слово , \n\rслово\n');
    console.log(JSON.stringify(tokens, undefined, 2));
    expect(tokens.length).toEqual(7);
});
//# sourceMappingURL=tokenizer.test.js.map