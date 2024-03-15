import request from "graphql-request";
import { ImageSchema, ThumbnailSchema } from "@/types/ImageTypes";
import type { ImageType, ThumbnailType } from "@/types/ImageTypes";
import AnimatedImage from "@/components/AnimatedImage";
import CloudinaryImage from "@/components/CloudinaryImage";
import { useParentDimensions } from "@/hooks/useParentDimensions";

const WP_GRAPHQL_BASE = process.env.WP_GRAPHQL_BASE!;

export default async function Home() {
  const image: ImageType | null = await getFeaturedImage();

  return (
    <main className="flex flex-1 flex-col items-end justify-end">
      {image && <CloudinaryImage image={image} />}
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
