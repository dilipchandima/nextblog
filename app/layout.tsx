"use client";

import Link from "next/link";
import { useState } from "react";

import Navbar from "../components/NavBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState(true);

  return (
    <html lang="en" className={mode ? "dark" : "light"}>
      <body className="bg-white dark:bg-slate-900">
        <Navbar toggleMode={() => setMode(!mode)} />
        <div className="lg:container mx-auto text-slate-900 dark:text-slate-200 pt-20">
          <div className="min-h-screen">{children}</div>
          <h2>footer</h2>
        </div>
      </body>
    </html>
  );
}
