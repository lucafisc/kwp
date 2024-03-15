import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - nothing here...",
};

export default function NotFound() {
  return (
    <main className="my-auto h-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="mb-4 text-4xl font-bold">404 - Not Found</h1>
        <p className="mb-6 text-lg">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link href="/">Go back to the home page</Link>
      </div>
    </main>
  );
}
