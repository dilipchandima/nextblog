"use client";

import Link from "next/link";
import React, { useState } from "react";
// import { Close } from "feather-icons-react";
const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blog", link: "/blog" },
];

const Navbar = ({ toggleMode }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-50 fixed w-full h-20 shadow-xl ">
      <div className="flex justify-between items-center w-full h-full px-2 lg:px-16">
        <Link href="/">Dileepa</Link>
        {/* <Close /> */}
        <div
          className="bg-slate-900 w-9 h-9 md:hidden"
          onClick={() => {
            setOpen(true);
          }}
        ></div>
        <div className="hidden md:flex">
          {links.map(({ name, link }) => (
            <Link key={name} className="float-right px-1 mx-10" href={link}>
              {name}
            </Link>
          ))}
        </div>
        <div
          className="bg-slate-900 w-9 h-9"
          onClick={() => {
            toggleMode();
          }}
        ></div>
      </div>

      <div
        className={
          open
            ? "fixed left-0 top-0 w-full  h-screen bg-black/50  ease-in duration-500"
            : ""
        }
      >
        <div
          className={
            open
              ? "fixed left-0 top-0 w-3/4 sm:w-[60%] md:w-[45%] h-screen bg-slate-50 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-3/4 sm:w-[60%] md:w-[45%] h-screen bg-slate-50 p-10 ease-in duration-500"
          }
        >
          <div>
            <div
              onClick={() => {
                setOpen(false);
              }}
            >
              image{" "}
            </div>
          </div>
          <div className="flx flex-col">
            {links.map(({ name, link }) => (
              <div key={name} className="py-6">
                <Link href={link}>{name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
