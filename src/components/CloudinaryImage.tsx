"use client";
import { useParentDimensions } from "@/hooks/useParentDimensions";
import { ImageType } from "@/types/ImageTypes";
import { CldImage } from "next-cloudinary";
import Image from "next/image";

type Props = {
  image: ImageType;
};

export default function CloudinaryImage({ image }: Props) {
  const parentDimensions = useParentDimensions("parent-container");

  return (
    <div id="parent-container" className="h-96 w-full pb-10 pr-2 md:max-w-3xl">
      <CldImage
        src={image.guid}
        alt={image.altText}
        height={parentDimensions.height}
        width={parentDimensions.width}
        className="h-full w-full rounded-3xl object-cover shadow-lg"
        deliveryType="fetch"
        crop="fill"
        gravity="auto"
      />
    </div>
  );
}
