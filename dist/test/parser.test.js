"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("../syntax/parser");
test("parser", () => {
    const result = parser_1.parsePhrase('покажи всех клиентов из минска');
    console.log('new parser ----------------------------------');
    console.log(JSON.stringify(result.phrase, undefined, 2));
    expect(result.phrase).toBeDefined();
});
//# sourceMappingURL=parser.test.js.map