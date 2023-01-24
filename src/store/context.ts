import { createContext } from "react";

export type Context = {
  isNavOpen: boolean;
  toggleNav(isOpen: boolean): void;
};

export const AppContext = createContext<Context>({
  isNavOpen: false,
  toggleNav: () => {},
});
