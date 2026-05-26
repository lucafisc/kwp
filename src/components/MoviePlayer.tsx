"use client";
import { useState } from "react";
import { IoPlaySharp } from "react-icons/io5";
import ReactPlayer from "react-player";

type Props = {
  label: string;
  movie: string | undefined | null;
  external?: boolean | null;
};

export default function MoviePlayer({ label, movie, external }: Props) {
  const [showMovie, setShowMovie] = useState(false);

  if (!movie) {
    return null;
  }

  if (external) {
    return (
      <a
        href={movie}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex w-fit items-center justify-between gap-1 rounded-full border border-primary bg-primary px-12 py-4 text-xl text-secondary no-underline transition-all hover:brightness-125 active:scale-95"
      >
        <IoPlaySharp />
        {label}
      </a>
    );
  }

  return (
    <>
      <button
        aria-label={label}
        onClick={() => setShowMovie((previousState) => !previousState)}
        className="mt-4 flex items-center justify-between gap-1 rounded-full border border-primary bg-primary px-12 py-4 text-xl text-secondary transition-all hover:brightness-125 active:scale-95"
      >
        <IoPlaySharp />
        {label}
      </button>

      {showMovie && (
        <div
          onClick={() => setShowMovie(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
        >
          <ReactPlayer url={movie} muted={true} controls={true} />
        </div>
      )}
    </>
  );
}
