"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
test("morphAnalyzer", () => {
    const result = __1.morphAnalyzer('самый');
    expect(result[0]).toBeDefined();
    expect(result[0] instanceof __1.RusAdjective).toBeTruthy();
    expect(result[0].grammCase).toEqual(__1.RusCase.Nomn);
    expect(result[1]).toBeDefined();
    expect(result[1] instanceof __1.RusAdjective).toBeTruthy();
    expect(result[1].grammCase).toEqual(__1.RusCase.Accs);
});
//# sourceMappingURL=morphAnalyzer.test.js.map