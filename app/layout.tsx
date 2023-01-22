import Link from "next/link";
import Navbar from "../components/NavBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900">
        <Navbar />
        <div className="lg:container mx-auto text-slate-400 pt-20">
          {children}
          <h2>footer</h2>
        </div>
      </body>
    </html>
  );
}
