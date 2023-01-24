import React, { ReactElement, useReducer } from "react";
import { AppContext } from "./context";

type Props = {
  children: ReactElement | ReactElement[];
};

type Reducer = {
  isNavOpen: boolean;
};

const initialState: Reducer = {
  isNavOpen: false,
};

const TOGGLE_NAV = "TOGGLE_NAV";

const reducer = (
  state: Reducer,
  { type, payload }: { payload: boolean; type: string }
): Reducer => {
  switch (type) {
    case TOGGLE_NAV:
      return { ...state, isNavOpen: payload };

    default:
      throw new Error();
  }
};

export const AppContextProvider = ({ children }: Props) => {
  const [{ isNavOpen }, dispatch] = useReducer(reducer, initialState);

  const toggleNav = (isOpen: boolean) =>
    dispatch({ type: TOGGLE_NAV, payload: isOpen });

  return (
    <AppContext.Provider value={{ isNavOpen, toggleNav }}>
      {children}
    </AppContext.Provider>
  );
};
