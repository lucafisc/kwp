import React from "react";
import request from "graphql-request";
import type { FilmType } from "@/types/FilmTypes";
import { FilmSchema } from "@/types/FilmTypes";
import type { Metadata } from "next";
import FilmAccordion from "@/components/FilmAccordion";

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
    <main className="my-auto">
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
	// console log film title and trailer for each film
	console.log(films);
	console.log("Film title and trailer:");
	films.forEach((film) => console.log(film.filmtitle, film.trailer));
	
	return films;
  } catch (error) {
    console.error("Error fetching films:", error);
	throw error;
  }
}
