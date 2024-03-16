"use client";
import type { FilmTeaserType } from "@/types/FilmTypes";
import { useEffect, useState } from "react";
import { unbounded } from "./Logo";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useParentDimensions } from "@/hooks/useParentDimensions";

type Props = FilmTeaserType;
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export default function FilmTeaser({ slug, filmtitle, year, still }: Props) {
  const [showTitle, setShowTitle] = useState(false);
  const parentDimensions = useParentDimensions("parent-container");

  return (
    <Link
      href={`/films/${slug}`}
      onMouseEnter={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
      onFocus={() => setShowTitle(true)}
      onBlur={() => setShowTitle(false)}
      onTouchStart={() => setShowTitle(true)}
      onTouchEnd={() => setShowTitle(false)}
      className="group"
    >
      <div
        id="parent-container"
        className="relative mx-auto my-6 flex h-48 w-full max-w-screen-lg cursor-pointer items-center justify-start overflow-hidden rounded-3xl bg-primary bg-opacity-50 transition-all duration-300 ease-in-out hover:shadow-2xl lg:h-72"
      >
        {showTitle && (
          <div className="absolute flex flex-col p-4">
            <h2
              className={`${unbounded.className} z-10 text-2xl font-light uppercase  text-white`}
            >
              {filmtitle}
            </h2>
            <h2 className={`z-10 text-2xl font-light  text-white`}>{year}</h2>
          </div>
        )}
        {still && parentDimensions.width != 0 && (
          <CldImage
            deliveryType="fetch"
            alt={still.altText}
            src={still.guid}
            width={parentDimensions.width}
            height={parentDimensions.height}
            crop="fill"
            gravity="auto"
            className={`transition-all duration-300 ease-out ${
              showTitle ? 'scale-110 brightness-50' : ''
            }`}
          />
        )}
      </div>
    </Link>
  );
}
