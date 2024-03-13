"use client"
import type { FilmTeaserType } from "@/types/FilmTypes";
import Image from "next/image";
import { useState } from "react";
import { unbounded } from "./Logo";

type Props = FilmTeaserType;

export default function FilmTeaser({ slug, filmtitle, year, still }: Props) {
    const [showTitle, setShowTitle] = useState(false);

    return (
        <div
            className="bg-red-300 w-full h-48 my-6 rounded-3xl max-w-4xl overflow-hidden mx-auto flex justify-start items-center relative group hover:shadow-2xl transition-all ease-in-out duration-300 cursor-pointer"
            onMouseEnter={() => setShowTitle(true)}
            onMouseLeave={() => setShowTitle(false)}
            onFocus={() => setShowTitle(true)}
            onBlur={() => setShowTitle(false)}
            >
            {showTitle && <>
                <h2 className={`${unbounded.className} text-2xl text-white uppercase font-light absolute z-10`}>{filmtitle}</h2>
                <h2 className={` text-2xl text-white  font-light absolute z-10`}>({year})</h2>
            </>}
            {still && <Image
                src={still.guid}
                alt={still.altText}
                height={still.mediaDetails.height}
                width={still.mediaDetails.width}
                className="object-cover h-full transition-all ease-out group-hover:scale-110 duration-300 group-hover:brightness-50 "
            />}
        </div>
    );
}