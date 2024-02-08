import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kathy Meng",
    template: "%s - Kathy Meng",
  },
  description: "Filmmaker Kathy Meng's portfolio site",
  keywords: ["Kathy Meng", "filmmaker", "filmography", "portfolio", "cinema", "movies", "films"],
  authors: {
    name: "Kathy Meng",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-secondary max-w-7xl ml-auto mr-auto p-3 min-h-screen flex flex-col text-primary`}>
        <Header />
        {children}
      </body>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </html>
  );
}
