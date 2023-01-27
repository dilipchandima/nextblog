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
    { name: "PROJECTS", link: "/projects" },
    // { name: "GALLERY", link: "/gallery" },
    { name: "BLOG", link: "/blog" },
  ];

  const latestBlogs = [
    {
      title: "Are you seeking for build your app on cloud.",
      author: "Dileepa Chandima",
      date: "12/01/2023",
      category: "TECH",
      tags: "react-native, storybook, components",
      slug: "are-you-seeking-for-build-your-app-on-cloud",
    },
    {
      title:
        "Why Complex code with Getters and Setters in JAVA ? It’s time to move with Lombok",
      author: "Dileepa Chandima",
      date: "12/01/2023",
      category: "TECH",
      tags: "java, lombok",
      slug: "why-complex-code-with-Getters-and-Setters-in-JAVA-It-s-time-to-move-with-Lombok",
    },
    {
      title: "Getting started with Storybook",
      author: "Dileepa Chandima",
      date: "12/01/2023",
      category: "TECH",
      tags: "react, react-native, storybook, components",
      slug: "getting-started-with-storybook",
    },
  ];

  const toggleNav = () => dispatch({ type: types.TOGGLE_NAV });

  const toggleDarkMode = () => dispatch({ type: types.TOGGLE_DARK_MODE });

  return (
    <AppContext.Provider
      value={{
        isNavOpen,
        toggleNav,
        isDarkMode,
        toggleDarkMode,
        navLinks,
        latestBlogs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
