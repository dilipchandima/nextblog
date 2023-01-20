export default function Layout({ children }) {
  return (
    <>
      <h1>Header</h1>
      <main>{children}</main>
      <h2>Footer</h2>
    </>
  );
}
