"use client"
import React from "react";
import Link from "next/link";

type Props = {
  statusCode: number,
}

const ErrorPage = ({ statusCode } : Props) => {
  return (
    <main className="h-full my-auto">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="mb-4 text-4xl font-bold">Error {statusCode}</h1>
        <p className="mb-6 text-lg">
          Oops! Something went wrong on our end. Please try again later.
        </p>
        <Link href="/">
          Go back to the home page
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;
