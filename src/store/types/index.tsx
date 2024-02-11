import { rootReducer, setupStore} from "../store";

const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type AppStore = ReturnType<typeof setupStore>