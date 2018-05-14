"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("../semantics/parser");
const __1 = require("..");
test("parser", () => {
    const result = parser_1.parsePhrase('покажи всех клиентов из минска');
    console.log(JSON.stringify(result, undefined, 2));
    expect(result).toBeDefined();
});
test("prev parser", () => {
    const result = __1.parseSemantics('покажи всех клиентов из минска');
    console.log(JSON.stringify(result.phrase, undefined, 2));
    expect(result.phrase).toBeDefined();
});
//# sourceMappingURL=parser.test.js.map