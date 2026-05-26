"use client";
import type { FilmType } from "@/types/FilmTypes";
import { unbounded } from "./Logo";
import FilmContent from "./FilmContent";
import { CldImage } from "next-cloudinary";
import { useParentDimensions } from "@/hooks/useParentDimensions";

type Props = {
  film: FilmType;
};

export default function FilmPage({ film }: Props) {
  const parentDimensions = useParentDimensions("parent-container");

  return (
    <div id="parent-container" className="mx-auto mb-8 max-w-screen-lg w-full">
      {film.still && (
        <CldImage
          deliveryType="fetch"
          alt={film.still.altText}
          src={film.still.guid}
          width={parentDimensions.width}
          height={300}
          crop="fill"
          gravity="auto"
          className="mb-6 mt-12 rounded-3xl shadow-lg"
        />
      )}
      <div className="w-full text-left md:grid md:grid-cols-2 md:gap-4">
        <div className="text-2xl">
          <h1 className={`${unbounded.className} font-bold uppercase`}>
            {film.filmtitle}
          </h1>
          <h1 className="font-light">{film.year}</h1>
        </div>
        <div>
          <p>
            {film.role.map((role, index) =>
              index === film.role.length - 1 ? role : role + "/",
            )}
          </p>
          <p>{film.duration}</p>
          <p>
            {film.language.map((language, index) =>
              index === film.language.length - 1
                ? language
                : language + ", ",
            )}
          </p>
        </div>
      </div>
      <div className="grid grid-rows-[1fr] text-slate-600 opacity-100">
        <FilmContent film={film} />
      </div>
    </div>
  );
}
