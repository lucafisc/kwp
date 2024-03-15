import { ImageType } from "@/types/ImageTypes";
import Image from "next/image";

type Props = {
  featuredImage?: ImageType | null;
  accordionOpen: boolean;
};

export default function FilmImage({ featuredImage, accordionOpen }: Props) {
  const image: ImageType | null = featuredImage || null;

  return (
    <>
      {image && (
        <div
          className={`flex h-full flex-col items-center justify-center bg-white transition-all duration-1000 ease-in-out ${
            accordionOpen ? "bg-opacity-10" : "bg-opacity-0"
          }`}
        >
          <Image
            src={image.guid}
            alt={image.altText}
            height={image.mediaDetails.height}
            width={image.mediaDetails.width}
            className={`mx-auto w-full object-cover p-4 drop-shadow-md transition-all duration-1000 ease-out xs:w-4/6 md:w-5/6
                ${accordionOpen ? "opacity-100 " : "scale-125 opacity-0"}`}
          />
        </div>
      )}
    </>
  );
}
