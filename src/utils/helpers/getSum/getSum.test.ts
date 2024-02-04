import { getSum } from "./getSum"

describe('getSum test', () => {
    test('Right arguments right return', () => {
        expect(getSum(1, 3)).toBe(4)
    }),
        test('Negative values right return', () => {
            expect(getSum(-100, 9)).toBe(-91)
        }),
        test('first value is NaN return NaN', () => {
            expect(getSum(NaN, 9)).toBeNaN()
        }),
        test('second value is NaN return NaN', () => {
            expect(getSum(3, NaN)).toBeNaN()
        }),
        test('both values are NaN return NaN', () => {
            expect(getSum(NaN, NaN)).toBeNaN()
        }),
        test('Infinity args throw Error', () => {
            expect(() => {
                getSum(-Infinity, 6)
            }).toThrow(TypeError)
        })
})