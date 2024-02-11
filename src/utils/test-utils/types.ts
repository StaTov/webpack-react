import { RenderOptions } from "@testing-library/react"
import { RootState, AppStore } from "src/store/types"

export interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<RootState>
    store?: AppStore
  }