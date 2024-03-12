import React from "react";
import request from "graphql-request";
import type { FilmType } from "@/types/FilmTypes";
import { FilmSchema } from "@/types/FilmTypes";
import type { Metadata } from "next";
import FilmAccordion from "@/components/FilmAccordion";

export const metadata : Metadata = {
	title: "Films",
	description: "Kathy Meng's films",
};

const WP_GRAPHQL_BASE = process.env.WP_GRAPHQL_BASE!;

// Renews Cache for this route every 60 seconds
export const revalidate = 5;

export default async function Films() {
  const films = await getFilms();
  return (
    <main className="">
		    {films.map((film, index) => (
                <FilmAccordion key={film.id} film={film} index={index} />
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
				trailer
				fullMovie
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
	films.sort((a, b) => b.year - a.year);
	return films;
  } catch (error) {
    console.error("Error fetching films:", error);
	throw error;
  }
}
