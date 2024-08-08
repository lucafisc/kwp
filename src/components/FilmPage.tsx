"use client";
import React, { useState } from "react";
import type { FilmType } from "@/types/FilmTypes";
import { Noto_Serif } from "next/font/google";
import { motion } from "framer-motion";
import AppearingLine from "./AppearingLine";
import { unbounded } from "./Logo";
import FilmContent from "./FilmContent";
import { CldImage } from "next-cloudinary";
import { useParentDimensions } from "@/hooks/useParentDimensions";

export const notoSerif = Noto_Serif({ subsets: ["latin"] });

type Props = {
  film: FilmType;
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.5, delay: index * 0 },
  }),
};

export default function FilmPage({ film }: Props) {
  const trailer: string | null = film.trailer || null;
  const parentDimensions = useParentDimensions("parent-container");

  return (
    <>
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
        <motion.div initial="hidden" animate="visible" variants={cardVariants}>
          <div className="w-full text-left md:grid md:grid-cols-2 md:gap-4">
            <div className="text-xl">
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
          <div
            className="grid grid-rows-[1fr] text-slate-600 opacity-100 transition-all
        duration-700 ease-in-out"
          >
            <FilmContent film={film} />
          </div>
        </motion.div>
      </div>
    </>
  );
}
