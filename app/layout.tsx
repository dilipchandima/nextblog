import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/blog">blog</Link>
          </li>
        </ul>
        {/* <h1>header</h1> */}
        {children}
        <h2>footer</h2>
      </body>
    </html>
  );
}
