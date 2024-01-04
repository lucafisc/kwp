import type { Metadata } from "next";
import request from "graphql-request";
import { ProfileSchema, ProfileType } from "@/types/ProfileTypes";
import AnimatedImage from "@/components/AnimatedImage";
import Image from "next/image";
import { ImageType } from "@/types/ImageTypes";

export const metadata: Metadata = {
    title: "Films",
    description: "Films",
};

const WP_GRAPHQL_BASE = process.env.WP_GRAPHQL_BASE!;

// Renews Cache for this route every 600 seconds
export const revalidate = 600;

export default async function About() {
    const profile = await getProfile()
    const image: ImageType | null = profile.featuredImage?.node ?? null;

    return (<main className="my-auto  h-full">
        <div className=" w-full h-full grid grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
            <div className="w-full flex justify-center items-center">
                {image && <AnimatedImage>
                    <Image
                        src={image.guid}
                        alt={image.altText}
                        height={image.mediaDetails.height}
                        width={image.mediaDetails.width}
                        className="object-cover w-full h-full"
                    />
                </AnimatedImage>}
            </div>
            <div className="flex flex-col justify-center">
                <div dangerouslySetInnerHTML={{ __html: profile.bio }} />
            </div>
        </div>
    </main>)
}

async function getProfile() {
    const query = `
    {
        abouts {
          nodes {
            bio
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
    `

    try {
        const response = (await request(WP_GRAPHQL_BASE, query)) as {
            abouts: {
                nodes: ProfileType[]
            };
        };

        const profile: ProfileType = ProfileSchema.parse(response.abouts.nodes[0]);
        return profile;
    } catch (error) {
        console.error("Error fetching profile:", error);
        throw error;
    }
}