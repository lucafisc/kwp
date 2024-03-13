"use client"
import type { FilmTeaserType } from "@/types/FilmTypes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { unbounded } from "./Logo";
import { CldImage } from 'next-cloudinary';
import Link from "next/link";


type Props = FilmTeaserType;
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export default function FilmTeaser({ slug, filmtitle, year, still }: Props) {
    const [showTitle, setShowTitle] = useState(false);
    const [parentDimensions, setParentDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        // Function to get the dimensions of the parent container
        const getParentDimensions = () => {
            const parentElement = document.getElementById('parent-container');
            if (parentElement) {
                setParentDimensions({
                    width: parentElement.offsetWidth,
                    height: parentElement.offsetHeight,
                });
            }
        };

        getParentDimensions(); // Get initial dimensions
        window.addEventListener('resize', getParentDimensions); // Update dimensions on window resize

        return () => {
            window.removeEventListener('resize', getParentDimensions); // Remove event listener on component unmount
        };
    }, []);


    return (
        <Link href={`/filmblog/${slug}`}
            onMouseEnter={() => setShowTitle(true)}
            onMouseLeave={() => setShowTitle(false)}
            onFocus={() => setShowTitle(true)}
            onBlur={() => setShowTitle(false)}
            className="group"
        >
            <div
                id="parent-container"
                className="bg-primary bg-opacity-50 w-full h-48 my-6 rounded-3xl max-w-5xl overflow-hidden mx-auto flex justify-start items-center relative hover:shadow-2xl transition-all ease-in-out duration-300 cursor-pointer"

            >
                {showTitle && <div className="flex flex-col absolute p-4">
                    <h2 className={`${unbounded.className} text-2xl text-white uppercase font-light  z-10`}>{filmtitle}</h2>
                    <h2 className={`text-2xl text-white font-light  z-10`}>{year}</h2>
                </div>
                }
                {still &&
                    <CldImage
                        deliveryType="fetch"
                        alt={still.altText}
                        src={still.guid}
                        width={parentDimensions.width}
                        height={parentDimensions.height}
                        crop="fill"
                        gravity="auto"
                        className="transition-all ease-out group-hover:scale-110 duration-300 group-hover:brightness-50 group-focus:scale-110 group-focus:brightness-50"
                    />
                }
            </div>
        </Link>

    );
}