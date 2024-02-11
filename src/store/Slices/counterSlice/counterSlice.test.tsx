import { beforeEach } from "node:test";
import couterReducer, { increment, decrement, incrementByAmount } from "./counterSlice";

const prevState = { value: 0 }

beforeEach(() => {
    prevState.value = 0;
})

describe("test reducers: counterSlice", () => {
    test("return initial state", () => {
        expect(couterReducer(undefined, { type: '' })).toEqual({ value: 0 })
    })
    test("increment return correct value", () => {
        expect(couterReducer(prevState, increment())).toEqual({ value: 1 })
    })
    test("decrement return correct value", () => {
        expect(couterReducer(prevState, decrement())).toEqual({ value: -1 })
    })
    test("incrementByAmount return correct value", () => {
        expect(couterReducer(prevState, incrementByAmount(9))).toEqual({ value: 9 })
    })
})