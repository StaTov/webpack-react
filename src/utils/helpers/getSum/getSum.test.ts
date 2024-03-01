import { getSum } from ".";

describe("getSum", () => {
    test("correct args return correct value", () => {
        expect(getSum(3, 5)).toBe(8);
    });
});