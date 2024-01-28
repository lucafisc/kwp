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
  return  (
    <>
      <button
        aria-label={label}
        onClick={() => setShowMovie((previousState) => !previousState)}
        className="flex items-center justify-between gap-1 p-2 mt-4 transition-all border rounded-full border-primary text-primary hover:bg-primary hover:text-secondary active:scale-95 "
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
