import React from "react";
import request, { gql } from "graphql-request";
import type { ProfileType } from "@/types/ProfileTypes";
import { ProfileSchema } from "@/types/ProfileTypes";
import type { Metadata } from "next";
import AnimatedImage from "@/components/AnimatedImage";
import type { ImageType } from "@/types/ImageTypes";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profile",
  description: "Profile",
};

const WP_GRAPHQL_BASE = process.env.WP_GRAPHQL_BASE!;

// Renews Cache for this route every 600 seconds
export const revalidate = 600;

export default async function Clippings() {
  // const profile = await getProfile();
  // const image: ImageType = profile.profilePicture;
  return (
    <main className="my-auto  h-full">
      {/* <div className=" w-full h-full grid grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
        <div className="w-full flex justify-center items-center">
          <AnimatedImage>
            <Image
              src={image.guid}
              alt={image.altText}
              height={image.mediaDetails.height}
              width={image.mediaDetails.width}
              className="object-cover w-full h-full"
            />
          </AnimatedImage>
        </div>
        <div className="flex flex-col justify-center">
          <div className={`${notoSerif.className} font-light mb-6`}>
            <Link href={`mailto:${profile.email}`}>
              <p>{profile.email}</p>
            </Link>
            {profile.socialMedia.edges.map((socialMedia) => {
              return (
                <Link href={socialMedia.node.socialLink}>
                  <p>{socialMedia.node.platformName}</p>
                </Link>
              );
            })}
          </div>
          <div dangerouslySetInnerHTML={{ __html: profile.bio }} />
        </div>
      </div> */}
    </main>
  );
}

// async function getProfile() {
//   const query = `
//   {
// 	profiles {
// 	  nodes {
// 		bio
// 		email
// 		id
// 		profilePicture {
// 		  altText
// 		  guid
// 		  mediaDetails {
// 			height
// 			width
// 		  }
// 		}
// 		socialMedia {
// 		  edges {
// 			node {
// 			  socialLink
// 			  platformName
// 			  id
// 			}
// 		  }
// 		}
// 	  }
// 	}
//   }
//   `;

//   try {
//     const response = (await request(WP_GRAPHQL_BASE, query)) as {
//       profiles: {
//         nodes: Profile[];
//       };
//     };

//     const profile: Profile = ProfileSchema.parse(response.profiles.nodes[0]);
//     console.log(profile.profilePicture);
//     return profile;
//   } catch (error) {
//     console.error("Error fetching profile:", error);
//     return [];
//   }
// }
