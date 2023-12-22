"use client"
import React, { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import type { ImageType } from "@/types/ImageTypes";

type Props = {
    children: ReactNode;
};

export default function AnimatedImage({ children }: Props) {
  const controls = useAnimation();

  // Animation variants
  const fadeInVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1, transition: { duration: 1, ease: "easeInOut" } },

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
      {children}
    </motion.div>
  );
}
