import React, { ReactElement, useReducer } from "react";

import { AppContext } from "./context";
import { initialState, reducer, types } from "./reducer";

type Props = {
  children: ReactElement | ReactElement[];
};

export const AppContextProvider = ({ children }: Props) => {
  const [{ isNavOpen, isDarkMode }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const toggleNav = () => dispatch({ type: types.TOGGLE_NAV });

  const toggleDarkMode = () => dispatch({ type: types.TOGGLE_DARK_MODE });

  return (
    <AppContext.Provider
      value={{ isNavOpen, toggleNav, isDarkMode, toggleDarkMode }}
    >
      {children}
    </AppContext.Provider>
  );
};
