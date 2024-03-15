"use client";
import React from "react";
import Link from "next/link";

type Props = {
  statusCode: number;
};

const ErrorPage = ({ statusCode }: Props) => {
  return (
    <main className="my-auto h-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="mb-4 text-4xl font-bold">Error {statusCode}</h1>
        <p className="mb-6 text-lg">
          Oops! Something went wrong on our end. Please try again later.
        </p>
        <Link href="/">Go back to the home page</Link>
      </div>
    </main>
  );
};

export default ErrorPage;
