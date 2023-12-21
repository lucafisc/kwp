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
    transition: { ease: "easeOut", duration: 0.8, delay: index * 0.05 },
  }),
};

export default function FilmCard({ pressClipping, index }: Props) {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        custom={index}
      >
        <Line borderSize={1} />
        <Link href={pressClipping.link}>
          <div className="grid grid-cols-5 gap-4 py-4 group text-black cursor-pointer">
            <h1 className="col-span-1">{pressClipping.pressDate}</h1>
            <h1 className="col-span-3 group-hover:font-bold transition-all">
              {pressClipping.title}
            </h1>
            <h1 className="col-span-1 text-right">
              {pressClipping.pressAuthor}
            </h1>
          </div>
        </Link>
      </motion.div>
    </>
  );
}
