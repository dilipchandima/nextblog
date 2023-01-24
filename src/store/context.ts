import { createContext } from "react";

import { initialState, Reducer } from "./reducer";

export interface Context extends Reducer {
  toggleNav(): void;
  toggleDarkMode(): void;
}

export const AppContext = createContext<Context>({
  ...initialState,
  toggleNav: () => {},
  toggleDarkMode: () => {},
});
