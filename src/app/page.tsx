import Image from "next/image";
import request from "graphql-request";
import { ImageSchema, ThumbnailSchema } from "@/types/FilmTypes";
import type { ImageType, ThumbnailType } from "@/types/FilmTypes";
import {dynamicBlurDataUrl} from "@/app/dynamicBlurData"

const WP_GRAPHQL_BASE = process.env.WP_GRAPHQL_BASE!;

export default async function Home() {
  const thumbnail : ThumbnailType | null = await getThumbnail();
  const image: ImageType | null = await getFeaturedImage();


  return (
    <main className="flex flex-1 flex-col items-end justify-end">
      {image && (
        <div className="w-5/6 mt-20 pb-10 pr-2 max-w-md h-96 md:h-full">
          <Image
            src={image.guid}
            alt={image.altText}
            height={image.mediaDetails.height}
            width={image.mediaDetails.width}
            className="object-cover w-full h-full"
          />
        </div>
      )}
    </main>
  );
}

async function getThumbnail() {
  const query = `
  {
    pageBy(uri: "home") {
      id
      title
      featuredImage {
        node {
          mediaDetails {
            sizes(include: THUMBNAIL) {
              sourceUrl
              width
              height
            }
          }
        }
      }
    }
  }
`;

try {

  const response = (await request(WP_GRAPHQL_BASE, query) as {
    pageBy:{
      featuredImage: {
        node: {
          mediaDetails: {
            sizes: Array<ThumbnailType>;
          }
        }
      };
    }
  })
  
  const thumbnail = ThumbnailSchema.parse(response.pageBy.featuredImage.node.mediaDetails.sizes[0]);
  return thumbnail;
} catch (error) {
  console.error("Error fetching thumbnail:", error);
  return null;
}
}

async function getFeaturedImage() {
  const query = `
	{
    pageBy(uri: "home") {
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
    // console.log(response);

    const image = ImageSchema.parse(response.pageBy.featuredImage.node);
    return image;
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
}
