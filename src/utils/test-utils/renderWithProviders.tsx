import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "src/store";
import { ExtendedRenderOptions } from "./types";
import { MemoryRouter } from "react-router-dom";

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},

    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>
      <MemoryRouter>
        {children}
      </MemoryRouter>
    </Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}