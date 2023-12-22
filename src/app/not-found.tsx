import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - nothing here...",
};

export default function NotFound() {
  return (
	<main className="my-auto h-full">
	<div className="w-full h-full flex flex-col justify-center items-center">
	  <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
	  <p className="text-lg mb-6">
		Oops! The page you're looking for doesn't exist.
	  </p>
	  <Link href="/">
		Go back to the home page
	  </Link>
	</div>
  </main>
  );
}
