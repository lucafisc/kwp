import { ImageType } from "@/types/ImageTypes";
import Image from "next/image";

type Props = {
    featuredImage?: {
        node : ImageType
    } | null;
    accordionOpen: boolean;

};

export default function FilmImage({ featuredImage, accordionOpen }: Props) {

    const image: ImageType | null = featuredImage?.node || null;

    return (
        <>
            {image && <div className={`h-full flex flex-col items-center justify-center bg-white transition-all ease-in-out duration-1000 ${accordionOpen
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
        </>
    )
}