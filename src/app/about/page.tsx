import type { Metadata } from "next";
import request from "graphql-request";
import { ProfileSchema, ProfileType, SocialMediaType } from "@/types/ProfileTypes";
import AnimatedImage from "@/components/AnimatedImage";
import Image from "next/image";
import { ImageType } from "@/types/ImageTypes";

export const metadata: Metadata = {
    title: "Kathy Meng - About",
    description: "Kathy Meng's about page and contact information",
};

const WP_GRAPHQL_BASE = process.env.WP_GRAPHQL_BASE!;

// Renews Cache for this route every 600 seconds
export const revalidate = 600;

export default async function About() {
    const profile: any = await getProfile();
    const image: ImageType | null = profile.featuredImage?.node ?? null;

    return (<main className="my-auto  h-full">
        <div className="w-full h-full grid grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1 ">
            <div className="w-full flex justify-center items-center bg-white bg-opacity-10 p-4">
                {image && <AnimatedImage>
                    <Image
                        src={image.guid}
                        alt={image.altText}
                        height={image.mediaDetails.height}
                        width={image.mediaDetails.width}
                        className="object-cover w-full h-full xs:max-w-md"
                    />
                </AnimatedImage>}
            </div>
            <div className="flex flex-col md:justify-center">
                <div dangerouslySetInnerHTML={{ __html: profile.bio }} />
                <br />
                <a className="hover:font-bold cursor-pointer active:text-accent transition-all" href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer">
                    <p>{profile.email}</p>
                </a>

                {profile.socialmedia.edges.map((socialMedia : SocialMediaType) => {
                    return (
                        <a className="hover:font-bold cursor-pointer active:text-accent transition-all" href={socialMedia.node.socialLink} target="_blank" rel="noopener noreferrer">
                            <p>{socialMedia.node.platformName}</p>
                        </a>
                    );
                })}
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
            email
            socialmedia {
                edges {
                  node {
                    socialLink
                    platformName
                    id
                    }
                }
            }
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