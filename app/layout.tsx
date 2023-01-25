"use client";

import "./globals.css";

import { MainLayout } from "../src/layouts/MainLayout";
import { AppContextProvider } from "../src/store/AppContextProvider";

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
