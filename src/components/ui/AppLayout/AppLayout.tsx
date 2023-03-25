"use client";

import { Figtree, Red_Hat_Mono } from "next/font/google";
import Link from "next/link";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

const redHatMono = Red_Hat_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-redHatMono",
});

const links = [
  { name: "home", url: "/", target: "_self" },
  { name: "about", url: "/about", target: "_self" },
  { name: "projects", url: "/projects", target: "_self" },
  { name: "contact", url: "/contact", target: "_self" },
  { name: "blog", url: "https://blog.dilipchandima.com/", target: "_blank" },
];

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${redHatMono.variable} font-sans`}>
        <div className="fixed font-mono text-black justify-between h-20 w-full z-50 flex items-center px-20 gap-10 backdrop-blur-xl border-b-2">
          <p className="font-bold text-lg">dilipchandima</p>
          <div className="flex gap-10">
            {links.map(({ name, url, target }) => (
              <Link key={name} className="nav-item" href={url} target={target}>
                {name}
              </Link>
            ))}
            <Link className="btn-dark" href={"/resume.pdf"} target="_blank">
              resume
            </Link>
          </div>
        </div>
        <>{children}</>
      </body>
    </html>
  );
};
