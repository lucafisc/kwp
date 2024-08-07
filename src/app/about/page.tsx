import type { Metadata } from "next";
import request from "graphql-request";
import {
  ProfileSchema,
  ProfileType,
  SocialMediaType,
} from "@/types/ProfileTypes";
import AnimatedImage from "@/components/AnimatedImage";
import Image from "next/image";
import { ImageType } from "@/types/ImageTypes";

export const metadata: Metadata = {
  title: "About",
  description: "Kathy Meng's about page and contact information",
};

const WP_GRAPHQL_BASE = process.env.WP_GRAPHQL_BASE!;

// Renews Cache for this route every 60 seconds
export const revalidate = 60;

export default async function About() {
  const profile: any = await getProfile();
  const image: ImageType | null = profile.featuredImage?.node ?? null;

  return (
    <main className="my-auto h-full ">
      <div className="grid h-full w-full grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1 ">
        <div className="flex w-full items-center justify-center bg-white bg-opacity-10 p-4">
          {image && (
            <AnimatedImage>
              <Image
                src={image.guid}
                alt={image.altText}
                height={image.mediaDetails.height}
                width={image.mediaDetails.width}
                className="h-full w-full object-cover xs:max-w-md"
              />
            </AnimatedImage>
          )}
        </div>
        <div className="flex flex-col md:justify-center">
          <div dangerouslySetInnerHTML={{ __html: profile.bio }} />
          <br />
          <a
            className="cursor-pointer transition-all hover:font-bold active:text-accent"
            href={`mailto:${profile.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>{profile.email}</p>
          </a>
        </div>
      </div>
    </main>
  );
}

async function getProfile() {
  const query = `
    {
        abouts(first: 100) {
          nodes {
            bio
            email
            featuredImage {
              node {
                guid
                altText
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
        }
    }
    `;

  try {
    const response = (await request(WP_GRAPHQL_BASE, query)) as {
      abouts: {
        nodes: ProfileType[];
      };
    };
    const profile: ProfileType = ProfileSchema.parse(response.abouts.nodes[0]);
    return profile;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
}
