import { FilmType } from "@/types/FilmTypes";
import { useState } from "react";
import { IoPlaySharp } from "react-icons/io5";
import ReactPlayer from "react-player";
import MoviePlayer from "./MoviePlayer";

type Props = {
  film: FilmType;
};

export default function FilmDescription({ film }: Props) {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: film.synopsis }}
        className="mb-6"
      />
      
      {film.additionalInformation.map((additional, index) => (
        <p key={index} className="mb-6">
          {additional}
        </p>
      ))}

      {film.festivals.map((festival, index) => (
        <p key={index}>• {festival}</p>
      ))}

      <MoviePlayer label="trailer" movie={film.trailer} />
      <MoviePlayer label="full movie" movie={film.fullMovie} />
    </>
  );
}
