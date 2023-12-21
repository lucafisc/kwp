"use client";
import React from "react";
import Line from "./Line";
import Carousel from "./Carousel";
import Image from "next/image";
import type { FilmType, ImageType } from "@/types/FilmTypes";
import { Noto_Serif } from "next/font/google";
import { motion } from "framer-motion";

export const notoSerif = Noto_Serif({ subsets: ["latin"] });

type Props = {
  film: FilmType;
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export default function FilmCard({ film }: Props) {
  const image: ImageType | null = film.featuredImage?.node || null;

  return (
    <>
      <Line />

      {/* Image */}
      <div className="text-black grid grid-cols-2 grid-rows-2 gap-4">
        {image && (
          <div className="bg-white bg-opacity-10 col-span-2 md:col-span-1">
            <Image
              src={image.guid}
              alt={image.altText}
              height={image.mediaDetails.height}
              width={image.mediaDetails.width}
              className="object-cover md:w-5/6 xs:w-1/2 w-full mx-auto p-4 "
            />
          </div>
        )}
        {!image && (
          <div className="col-span-2 md:col-span-1 md:block hidden"></div>
        )}

        {/* Text */}
        <div className="col-span-2 md:col-span-1">
          {/* Title */}
          <h1 className="text-3xl font-medium ">
            {film.filmtitle + ` (${film.year})`}
          </h1>

          {/* Info */}
          <div className={`${notoSerif.className} font-light mb-6`}>
            <p>
              {film.role.map((role, index) =>
                index === film.role.length - 1 ? role : role + "/"
              )}
            </p>
            <p>{film.duration}</p>
            <p>
              {film.language.map((language, index) =>
                index === film.language.length - 1 ? language : language + ", "
              )}
            </p>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: film.synopsis }}
            className="mb-6"
          />

          {/* Synopsis, festivals, additional */}
          {film.additionalInformation.map((additional) => (
            <p className="mb-6">{additional}</p>
          ))}

          {film.festivals.map((festival) => (
            <p>{festival}</p>
          ))}
        </div>
      </div>
    </>
  );
}
