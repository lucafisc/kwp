import React from "react";
import request, { gql } from "graphql-request";
import type { FilmType } from "@/types/FilmTypes";
import { FilmSchema } from "@/types/FilmTypes";
import FilmCard from "@/components/FilmCard";
import type { Metadata } from "next";

export const metadata : Metadata = {
	title: "Films",
	description: "Films",
};

const WP_GRAPHQL_BASE = process.env.WP_GRAPHQL_BASE!;

// Renews Cache for this route every 600 seconds
export const revalidate = 600;

export default async function Films() {
  const films = await getFilms();
  return (
    <main className="">
		{films.map((film) => (
			<FilmCard key={film.id} film={film}/>
		))}	
	</main>
  );
}

async function getFilms() {
  const query = `
	{
		films {
			edges {
			  node {
				id
				year
				synopsis
				festivals
				filmtitle
				role
				duration
				language
				additionalInformation
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
	  }
	`;

  try {
    const response = (await request(WP_GRAPHQL_BASE, query)) as {
        films: {
          edges: {
            node: FilmType;
          }[];
        };
    };

	const films : FilmType[] = response.films.edges.map((film) => FilmSchema.parse(film.node))
	return films;
  } catch (error) {
    console.error("Error fetching films:", error);
	return [];
  }
}
