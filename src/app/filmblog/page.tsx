import request from "graphql-request";
import type { Metadata } from "next";
import type { FilmTeaserType } from "@/types/FilmTypes";
import { FilmTeaserSchema } from "@/types/FilmTypes";
import FilmTeaser from "@/components/FilmTeaser";

export const metadata : Metadata = {
	title: "Films",
	description: "Kathy Meng's films",
};

const WP_GRAPHQL_BASE = process.env.WP_GRAPHQL_BASE!;
export const revalidate = 60;

export default async function FilmsPage() {
    const teasers = await getTeasers();
    return (
        <main>
            <h1>
                {teasers.map((teaser) => <FilmTeaser key={teaser.id} {...teaser} />)}
            </h1>
        </main>
    )
}

async function getTeasers() {
const query = `
{
    films {
      edges {
        node {
          id
          slug
          filmtitle
          year
          still {
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
        films: {
            edges: {
                node: FilmTeaserType;
            }[];

        }
    };
    const teasers : FilmTeaserType[] = response.films.edges.map((filmTeaser) => FilmTeaserSchema.parse(filmTeaser.node));
    teasers.sort((a, b) => a.year - b.year);
    return teasers;

} catch (error) {
    console.error("Error fetching films:", error);
	throw error;
}

}
