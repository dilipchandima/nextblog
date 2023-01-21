import Link from "next/link";
import "./globals.css";

const links = [
  { name: "Blog", link: "/blog" },
  { name: "About", link: "/about" },
  { name: "Home", link: "/" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900">
        <div className="bg-slate-50">
          <div className="container mx-auto">
            <Link href="/">Dileepa</Link>
            {links.map(({ name, link }) => (
              <Link key={name} className="float-right px-1 mx-10" href={link}>
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className="container mx-auto">
          <div className="bg-blue-900 w-3/5 h-8 blur-3xl absolute -z-50 rounded-3xl top-10 rotate-45 right-52" />
          <div className="bg-violet-900 w-4/5 h-5 blur-3xl absolute -z-50 rounded-3xl top-96 rotate-45 right-0" />
          {children}
          <h2>footer</h2>
        </div>
      </body>
    </html>
  );
}
