"use client";

import "./globals.css";
import { AppContextProvider } from "../src/store/AppContextProvider";
import { MainLayout } from "../src/layouts/MainLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppContextProvider>
      <MainLayout>
        <>{children}</>
      </MainLayout>
    </AppContextProvider>
  );
}
