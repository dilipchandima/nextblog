import React, { ReactElement, useReducer } from "react";

import { AppContext } from "./context";
import { initialState, reducer, types } from "./reducer";

type Props = {
  children: ReactElement | ReactElement[];
};

export const AppContextProvider = ({ children }: Props) => {
  const [{ isNavOpen }, dispatch] = useReducer(reducer, initialState);

  const toggleNav = (isOpen: boolean) =>
    dispatch({ type: types.TOGGLE_NAV, payload: isOpen });

  return (
    <AppContext.Provider value={{ isNavOpen, toggleNav }}>
      {children}
    </AppContext.Provider>
  );
};
