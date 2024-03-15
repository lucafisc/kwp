import { useState } from "react";
import { IoPlaySharp } from "react-icons/io5";
import ReactPlayer from "react-player";

type Props = {
  label: string;
  movie: string | undefined | null;
};

export default function MoviePlayer({ label, movie }: Props) {
  const [showMovie, setShowMovie] = useState(false);

  if (!movie) {
    return null;
  }
  return (
    <>
      <button
        aria-label={label}
        onClick={() => setShowMovie((previousState) => !previousState)}
        className="mt-4 flex items-center justify-between gap-1 rounded-full border border-primary bg-primary px-12 py-4 text-xl text-secondary transition-all active:scale-95 hover:brightness-125"
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
