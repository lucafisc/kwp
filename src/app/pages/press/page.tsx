import React from "react";
import request from "graphql-request";
import type { ClippingType } from "@/types/ClippingTypes";
import { ClippingSchema } from "@/types/ClippingTypes";
import type { Metadata } from "next";
import ClippingCard from "@/components/ClippingCard";

export const metadata: Metadata = {
  title: "Press",
  description: "Kathy Meng's press clippings",
};

const WP_GRAPHQL_BASE = process.env.WP_GRAPHQL_BASE!;

// Renews Cache for this route every 600 seconds
export const revalidate = 600;
// type Props = {
//   pressClippings : ClippingType[],
// };

export default async function Clippings() {
  const pressClippings = await getClippings();
  
  return (
    <main className="my-auto">
      
      {pressClippings
        .sort(
          (a, b) =>
            new Date(b.pressDate as string).getTime() -
            new Date(a.pressDate as string).getTime()
        )
        .map((pressClipping, index) => (
          <ClippingCard key={pressClipping.id} pressClipping={pressClipping} index={index}/>
        ))}
    </main>
  );
}

async function getClippings() {
  const query = `
    {
      pressClippings {
        nodes {
          pressLink
          title
          id
          pressAuthor
          pressDate
        }
      }
    }
  `;

  try {
    const response = await fetch(WP_GRAPHQL_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: {
        revalidate: 10,
      }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch press clippings");
    }

    const data = await response.json();

    const clippings: ClippingType[] = data.data.pressClippings.nodes.map(
      (clipping: any) => ClippingSchema.parse(clipping)
    );

    return clippings;
  } catch (error) {
    console.error("Error fetching press clippings:", error);
    return [];
  }
}


// async function getClippings() {
//   const query = `
// 	{
// 		pressClippings {
// 			nodes {
// 			  pressLink
// 			  title
// 			  id
// 			  pressAuthor
// 			  pressDate
// 			}
// 		  }
// 	  }
// 	`;

//   try {
//     const response = (await request(WP_GRAPHQL_BASE, query)) as {
//       pressClippings: {
//         nodes: ClippingType[];
//       };
//     };

//     const clippings: ClippingType[] = response.pressClippings.nodes.map(
//       (clipping) => ClippingSchema.parse(clipping)
//     );
//     // console.log(clippings);
//     return clippings;
//   } catch (error) {
//     console.error("Error fetching press clippings:", error);
//     return [];
//   }
// }
