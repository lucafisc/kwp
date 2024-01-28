import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - nothing here...",
};

export default function NotFound() {
  return (
	<main className="h-full my-auto">
	<div className="flex flex-col items-center justify-center w-full h-full">
	  <h1 className="mb-4 text-4xl font-bold">404 - Not Found</h1>
	  <p className="mb-6 text-lg">
		Oops! The page you're looking for doesn't exist.
	  </p>
	  <Link href="/">
		Go back to the home page
	  </Link>
	</div>
  </main>
  );
}
