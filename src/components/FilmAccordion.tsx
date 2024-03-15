"use client";
import React, { useState } from "react";
import type { FilmType } from "@/types/FilmTypes";
import { Noto_Serif } from "next/font/google";
import { motion } from "framer-motion";
import AppearingLine from "./AppearingLine";

import FilmContent from "./FilmContent";

export const notoSerif = Noto_Serif({ subsets: ["latin"] });

type Props = {
  film: FilmType;
  index: number;
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.5, delay: index * 0 },
  }),
};

export default function FilmAccordion({ film, index }: Props) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const trailer: string | null = film.trailer || null;

  return (
    <div>
      {index === 0 && <AppearingLine />}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        custom={index}
      >
        <button
          onClick={() =>
            setAccordionOpen((prevAccordionOpen) => !prevAccordionOpen)
          }
          className="group flex w-full items-center justify-between py-3"
        >
          <div className="w-full text-left md:grid md:grid-cols-2 md:gap-4">
            <h1 className="font-bold">{film.filmtitle + ` (${film.year})`}</h1>
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
          <svg
            className="ml-8 shrink-0 fill-primary transition-all group-hover:fill-accent"
            width="30"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="14"
              width="30"
              height="2"
              rx="1"
              className={`origin-center transform transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="14"
              width="30"
              height="2"
              rx="1"
              className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </button>
      </motion.div>

      <div
        className={`grid overflow-hidden text-slate-600 transition-all duration-700 ease-in-out
                ${
                  accordionOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
      >
        <FilmContent film={film}/>
      </div>
      <AppearingLine />
    </div>
  );
}
