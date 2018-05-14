"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("../parser");
const lexer_1 = require("../lexer");
test("parser", () => {
    const result = parser_1.parsePhrase('покажи всех клиентов из минска');
    const vp = result.phrase;
    expect(vp).toBeDefined();
    const verb = vp.items[0];
    expect(verb).toBeDefined();
    expect(verb.word).toEqual('покажи');
    const np = vp.items[1];
    const anp = np.items[0];
    const pp = np.items[1];
    expect(anp.items[0].word).toEqual('всех');
    expect(anp.items[1].word).toEqual('клиентов');
    expect(pp.items[0].word).toEqual('из');
    expect(pp.items[1].word).toEqual('минска');
});
test('scan', () => {
    const tokens = lexer_1.scan('большое поле');
    expect(tokens.length).toBe(6);
    expect(tokens[0][0].tokenType.tokenName).toBe('ADJFQualNeutSingNomn');
    expect(tokens[0][1].tokenType.tokenName).toBe('NOUNInanNeutSingNomn');
    expect(tokens[1][0].tokenType.tokenName).toBe('ADJFQualNeutSingNomn');
    expect(tokens[1][1].tokenType.tokenName).toBe('NOUNInanNeutSingAccs');
    expect(tokens[2][0].tokenType.tokenName).toBe('ADJFQualNeutSingNomn');
    expect(tokens[2][1].tokenType.tokenName).toBe('NOUNInanNeutSingLoct');
    expect(tokens[3][0].tokenType.tokenName).toBe('ADJFQualNeutSingAccs');
    expect(tokens[3][1].tokenType.tokenName).toBe('NOUNInanNeutSingNomn');
    expect(tokens[4][0].tokenType.tokenName).toBe('ADJFQualNeutSingAccs');
    expect(tokens[4][1].tokenType.tokenName).toBe('NOUNInanNeutSingAccs');
    expect(tokens[5][0].tokenType.tokenName).toBe('ADJFQualNeutSingAccs');
    expect(tokens[5][1].tokenType.tokenName).toBe('NOUNInanNeutSingLoct');
});
//# sourceMappingURL=parser.test.js.map