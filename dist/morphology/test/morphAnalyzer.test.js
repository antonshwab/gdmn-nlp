"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const morphAnalyzer_1 = require("../morphAnalyzer");
const rusAdjective_1 = require("../rusAdjective");
const types_1 = require("../types");
test("morphAnalyzer", () => {
    const result = morphAnalyzer_1.morphAnalyzer('самый');
    expect(result[0]).toBeDefined();
    expect(result[0] instanceof rusAdjective_1.RusAdjective).toBeTruthy();
    expect(result[0].grammCase).toEqual(types_1.RusCase.Nomn);
    expect(result[1]).toBeDefined();
    expect(result[1] instanceof rusAdjective_1.RusAdjective).toBeTruthy();
    expect(result[1].grammCase).toEqual(types_1.RusCase.Accs);
});
//# sourceMappingURL=morphAnalyzer.test.js.map