"use client"
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import type { ImageType } from "@/types/FilmTypes";

type Props = {
    image: ImageType;
};

export default function AnimatedImage({ image }: Props) {
  const controls = useAnimation();

  // Animation variants
  const fadeInVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1, transition: { duration: 1, ease: "easeOut" } },

  };

  // Trigger animation on component mount
  useEffect(() => {
    controls.start("visible");
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
    >
      <div className="w-5/6 mt-20 pb-10 pr-2 max-w-md h-96 md:h-full">
        <Image
          src={image.guid}
          alt={image.altText}
          height={image.mediaDetails.height}
          width={image.mediaDetails.width}
          className="object-cover w-full h-full"
        />
      </div>
    </motion.div>
  );
}
