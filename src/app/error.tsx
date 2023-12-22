"use client"
import React from "react";
import Link from "next/link";

const ErrorPage = ({ statusCode }) => {
  return (
    <main className="my-auto h-full">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Error {statusCode}</h1>
        <p className="text-lg mb-6">
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
