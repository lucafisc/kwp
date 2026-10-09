import React from "react";
import Line from "./Line";
import { FaVimeo, FaLinkedin } from "react-icons/fa6";
import { FaImdb } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="h-16">
      {" "}
      {/* Adjust height as needed */}
      <div className="flex h-full items-center justify-center gap-4">
        <a href="https://vimeo.com/kathymeng" className="text-xl">
          <FaVimeo />
        </a>
        <a
          href="https://www.linkedin.com/in/kathy-meng-65454798/"
          className="text-xl"
        >
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/kathy_meng/" className="text-xl">
          <FaInstagramSquare />
        </a>
        <a href="https://m.imdb.com/name/nm8069328/" className="text-xl">
          <FaImdb />
        </a>
      </div>
    </div>
  );
}
