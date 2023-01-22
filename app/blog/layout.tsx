import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <h1>blog header</h1> */}
      {children}
      {/* <h2>blog footer</h2> */}
    </>
  );
}
