"use client";

import React from "react";

import { FullScreenNav } from "./components/FullScrenNav";
import { TopNav } from "./components/TopNav";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20">
      <TopNav />
      <FullScreenNav />
    </div>
  );
};

export default Navbar;
