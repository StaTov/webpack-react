import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { RootState } from "./types";
import counterReducer from "./Slices/counterSlice";

export const rootReducer = combineReducers({
    counter: counterReducer
});

export function setupStore(preloadedState?: Partial<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    });
}

