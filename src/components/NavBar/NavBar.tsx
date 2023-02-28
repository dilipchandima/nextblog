"use client";

import React from "react";

import { useAppContext } from "~/store/useAppContext";

import { FullScreenNav } from "./components/FullScrenNav";
import { NavLink } from "./components/NavLink";
import { TopNav } from "./components/TopNav";

const Navbar = () => {
  const { isNavOpen, toggleNav, navLinks, latestBlogs } = useAppContext();
  return (
    <div className="w-full">
      <TopNav />
      {navLinks.map(({ name, link }) => (
        <NavLink href={link} key={name} name={name} onClick={toggleNav} />
      ))}
    </div>
  );
};

export default Navbar;
