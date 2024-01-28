import Image from "next/image";
import request from "graphql-request";
import { ImageSchema, ThumbnailSchema } from "@/types/ImageTypes";
import type { ImageType, ThumbnailType } from "@/types/ImageTypes";
import AnimatedImage from "@/components/AnimatedImage";

const WP_GRAPHQL_BASE = process.env.WP_GRAPHQL_BASE!;

export default async function Home() {
  const image: ImageType | null = await getFeaturedImage();

  return (
    <main className="flex flex-col items-end justify-end flex-1">
      {image && (
        <AnimatedImage>
          <div className="w-full max-w-md pb-10 pr-2 md:max-w-3xl h-96 md:h-full">
            <Image
              src={image.guid}
              alt={image.altText}
              height={image.mediaDetails.height}
              width={image.mediaDetails.width}
              className="object-cover w-full h-full"
            />
          </div>
        </AnimatedImage>
      )}
    </main>
  );
}

async function getFeaturedImage() {
  const query = `
	{
    pageBy(uri: "/home/") {
      id
      title
      featuredImage {
        node {
          altText
          guid
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
	`;

  try {
    const response = (await request(WP_GRAPHQL_BASE, query)) as {
      pageBy: {
        featuredImage: {
          node: ImageType;
        };
      };
    };
    const image = ImageSchema.parse(response.pageBy.featuredImage.node);
    return image;
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
}
