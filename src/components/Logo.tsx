import Link from "next/link";
import React from "react";
import { Unbounded } from "next/font/google";

export const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["500"],
  style: "normal",
  display: "swap",
  variable: "--font-unbounded",
});

export default function Logo() {
  return (
    <div className="group w-full cursor-pointer pb-4 text-5xl">
      <Link href="/">
        <h1
          className={`${unbounded.className} text-2xl transition-all group-active:text-accent`}
        >
          KATHY MENG
        </h1>
      </Link>
    </div>
  );
}
