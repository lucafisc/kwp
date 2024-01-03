"use client";
import React from "react";
import Line from "./Line";
import type { ClippingType } from "@/types/ClippingTypes";
import { Noto_Serif } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

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
      {index === 0 && appearingLine()}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        custom={index}
      >
         <a href={pressClipping.pressLink} target="_blank" rel="noopener noreferrer">
          <div className="grid grid-cols-10 gap-4 py-4 group cursor-pointer">
            <h1 className="col-span-2">{pressClipping.pressDate.substring(0,4)}</h1>
            <h1 className="col-span-5 group-hover:font-bold transition-all">
              {pressClipping.title}
            </h1>
            <h1 className="col-span-3 text-right hyphens-auto break-words">
              {pressClipping.pressAuthor}
            </h1>
          </div>
        </a>
      </motion.div>
      {appearingLine()}
    </>
  );

  function appearingLine() {
    return <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
    >
      <hr className="border-primary border-1 w-full"></hr>
    </motion.div>;
  }
}
