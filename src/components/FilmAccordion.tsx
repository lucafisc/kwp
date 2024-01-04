"use client";
import React, { useState } from "react";
import Line from "./Line";
import Carousel from "./Carousel";
import Image from "next/image";
import type { FilmType } from "@/types/FilmTypes";
import type { ImageType } from "@/types/ImageTypes";
import { Noto_Serif } from "next/font/google";
import { motion } from "framer-motion";
import { VimeoVideo } from "./VimeoVideo";
import ReactPlayer from 'react-player'
import AppearingLine from "./AppearingLine";
import { set } from "zod";

export const notoSerif = Noto_Serif({ subsets: ["latin"] });

type Props = {
    film: FilmType;
    index: number,
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

    const image: ImageType | null = film.featuredImage?.node || null;
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
                    onClick={() => setAccordionOpen((prevAccordionOpen) => !prevAccordionOpen)}

                    className="flex items-center justify-between w-full py-3 group">
                    <div className="text-left md:grid md:grid-cols-2 md:gap-4 w-full">
                        <h1 className="font-bold">{film.filmtitle + ` (${film.year})`}</h1>
                        <div >
                            <p>
                                {film.role.map((role, index) =>
                                    index === film.role.length - 1 ? role : role + "/"
                                )}
                            </p>
                            <p>{film.duration}</p>
                            <p>
                                {film.language.map((language, index) =>
                                    index === film.language.length - 1 ? language : language + ", "
                                )}
                            </p>
                        </div>
                    </div>
                    <svg
                        className="fill-primary shrink-0 ml-8 group-hover:fill-accent transition-all"
                        width="30"
                        height="30"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            y="14"
                            width="30"
                            height="2"
                            rx="1"
                            className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                                }`}
                        />
                        <rect
                            y="14"
                            width="30"
                            height="2"
                            rx="1"
                            className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                                }`}
                        />
                    </svg>
                </button>
            </motion.div>

            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600
                ${accordionOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
            >
                <div className="overflow-hidden md:grid md:grid-cols-2 w-full md:pr-button md:gap-4">
                    <div className="py-6 flex flex-col justify-start items-start">
                        <div
                            dangerouslySetInnerHTML={{ __html: film.synopsis }}
                            className="mb-6"
                        />
                        {film.additionalInformation.map((additional, index) => (
                            <p key={index} className="mb-6">{additional}</p>
                        ))}

                        {film.festivals.map((festival, index) => (
                            <p key={index} className="mb-6">{festival}</p>
                        ))}
                        <button className="mt-auto bg-slate-500 p-8">View trailer</button>

                    </div>
                    <div className="py-6">
                        {image && <div className={`h-full bg-white transition-all ease-in-out duration-1000 ${accordionOpen
                            ? 'bg-opacity-10'
                            : 'bg-opacity-0'
                            }`}>
                            <Image
                                src={image.guid}
                                alt={image.altText}
                                height={image.mediaDetails.height}
                                width={image.mediaDetails.width}
                                className={`object-cover md:w-5/6 xs:w-4/6 w-full mx-auto drop-shadow-md p-4 transition-all ease-in-out duration-1000
                                ${accordionOpen
                                        ? 'opacity-100 '
                                        : 'opacity-0 scale-95'
                                    }`}
                            />
                        </div>}
                    </div>
                </div>
            </div>
            <AppearingLine />
        </div >
    );
}
