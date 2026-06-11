import type { Metadata } from "next";
import request from "graphql-request";
import { ProfileSchema, ProfileType, ProfilePictureType } from "@/types/ProfileTypes";
import AnimatedImage from "@/components/AnimatedImage";
import Image from "next/image";
import { HiEnvelope } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "About",
  description: "Kathy Meng's about page and contact information",
};

const WP_GRAPHQL_BASE = process.env.WP_GRAPHQL_BASE!;

// Renews Cache for this route every 60 seconds
export const revalidate = 60;

export default async function About() {
  const profile: ProfileType | null = await getProfile();
  const image: ProfilePictureType | null = profile?.profilePicture ?? null;

  return (
    <main className="my-auto h-full ">
      <div className="grid h-full w-full grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1 ">
        <div className="flex w-full items-center justify-center bg-white bg-opacity-10 p-4">
          {image && (
            <AnimatedImage>
              <Image
                src={image.mediaItemUrl}
                alt={image.altText}
                height={image.mediaDetails.height}
                width={image.mediaDetails.width}
                className="h-full w-full object-cover xs:max-w-md"
              />
            </AnimatedImage>
          )}
        </div>
        {profile && (
          <div className="flex flex-col md:justify-center">
            <div dangerouslySetInnerHTML={{ __html: profile.bio }} className="prose max-w-none [&_p]:text-primary [&_p]:leading-tight [&_li]:leading-tight [&_li]:my-0 [&_li]:text-pretty [&_li]:text-primary [&_li::marker]:text-inherit" />
            <a
              className="mt-4 flex items-center gap-2 transition-all hover:font-bold active:text-accent"
              href={`mailto:${profile.email}`}
            >
              <HiEnvelope className="shrink-0" />
              {profile.email}
            </a>
          </div>
        )}
      </div>
    </main>
  );
}

async function getProfile(): Promise<ProfileType | null> {
  const query = `
    {
        bios(first: 100) {
          nodes {
            bio
            email
            profilePicture {
              mediaItemUrl
              altText
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
      bios: {
        nodes: ProfileType[];
      };
    };
    const profile: ProfileType = ProfileSchema.parse(response.bios.nodes[0]);
    return profile;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
}
