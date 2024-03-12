import React from "react";
import type { ClippingType } from "@/types/ClippingTypes";
import { ClippingSchema } from "@/types/ClippingTypes";
import type { Metadata } from "next";
import ClippingCard from "@/components/ClippingCard";

export const metadata: Metadata = {
  title: "Press",
  description: "Kathy Meng's press clippings",
};

const WP_GRAPHQL_BASE = process.env.WP_GRAPHQL_BASE!;

export default async function Clippings() {
  const pressClippings = await getClippings();
  
  return (
    <main className="my-auto">
      <p>hello</p>
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
        revalidate: 0,
      },
      // cache: "no-store"
    });

    if (!response.ok) {
      throw new Error("Failed to fetch press clippings");
    }
    console.log(response);

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
