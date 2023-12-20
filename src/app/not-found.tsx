import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - nothing here...",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-end justify-end text-black">
      <div className="text-right text-xl">
        <h1>page not found</h1>
        <Link href="/">Back to home page</Link>
      </div>
    </main>
  );
}
