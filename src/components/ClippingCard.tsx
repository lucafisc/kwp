"use client";
import React from "react";
import type { ClippingType } from "@/types/ClippingTypes";
import { Noto_Serif } from "next/font/google";
import { motion } from "framer-motion";
import AppearingLine from "./AppearingLine";

export const notoSerif = Noto_Serif({ subsets: ["latin"] });

type Props = {
  pressClipping: ClippingType;
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

export default function FilmCard({ pressClipping, index }: Props) {
  return (
    <>
      {index === 0 && <AppearingLine />}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        custom={index}
      >
         <a href={pressClipping.pressLink} target="_blank" rel="noopener noreferrer">
          <div className="grid grid-cols-10 gap-4 py-4 group cursor-pointer">
            <h1 className="col-span-2">{pressClipping.pressDate.substring(0,4)}</h1>
            <h1 className="col-span-5 group-hover:font-bold group-active:text-accent transition-all">
              {pressClipping.title}
            </h1>
            <h1 className="col-span-3 text-right hyphens-auto break-words">
              {pressClipping.pressAuthor}
            </h1>
          </div>
        </a>
      </motion.div>
      {<AppearingLine />}
    </>
  );
}
