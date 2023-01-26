import { createContext } from "react";

import { Blog } from "~/components/NavBar/components/BlogTile";

import { initialState, Reducer } from "./reducer";

export interface Context extends Reducer {
  toggleNav(): void;
  toggleDarkMode(): void;
  navLinks: { name: string; link: string }[];
  latestBlogs: Blog[];
}

export const AppContext = createContext<Context>({
  ...initialState,
  toggleNav: () => {},
  toggleDarkMode: () => {},
  navLinks: [],
  latestBlogs: [],
});
