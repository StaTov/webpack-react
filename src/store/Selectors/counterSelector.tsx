import { RootState } from "../types";

export const getCounterValue = (state: RootState) => state.counter.value;