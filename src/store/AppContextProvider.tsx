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

  const navLinks = [
    { name: "HOME", link: "/" },
    { name: "ABOUT ME", link: "/about" },
    { name: "PROJECTS", link: "/about" },
    { name: "GALLERY", link: "/blog" },
  ];

  const toggleNav = () => dispatch({ type: types.TOGGLE_NAV });

  const toggleDarkMode = () => dispatch({ type: types.TOGGLE_DARK_MODE });

  return (
    <AppContext.Provider
      value={{ isNavOpen, toggleNav, isDarkMode, toggleDarkMode, navLinks }}
    >
      {children}
    </AppContext.Provider>
  );
};
