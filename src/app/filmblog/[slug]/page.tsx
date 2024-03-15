import request, { gql } from "graphql-request";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { FilmType } from "@/types/FilmTypes";
import { FilmSchema } from "@/types/FilmTypes";
import FilmAccordion from "@/components/FilmAccordion";
import FilmPage from "@/components/FilmPage";

type Props = {
  params: {
    slug: string;
  };
};

const WP_GRAPHQL_BASE = process.env.WP_GRAPHQL_BASE!;
export const revalidate = 60;

export async function generateMetadata({ params: { slug } }: Props) {
  const { filmtitle, synopsis } = await getFilmData(slug);

  return {
    filmtitle,
    description: synopsis,
  };
}

export default async function page({ params: { slug } }: Props) {
  const film = await getFilmData(slug);
  return <FilmPage key={film.id} film={film} />;
}

async function getFilmData(slug: string) {
  const query = `
    {
        filmBy(slug: "${slug}") {
          filmtitle
          id
          year
          trailer
          synopsis
          festivals
          role
          duration
          language
          fullMovie
          additionalInformation
          still {
            altText
            guid
            mediaDetails {
              height
              width
            }
          }
          poster {
            altText
            guid
            mediaDetails {
              height
              width
            }
          }
        }
      }

	`;

  const response = (await request(WP_GRAPHQL_BASE, query)) as {
    filmBy: FilmType;
  };
  const film = FilmSchema.parse(response.filmBy);
  return film;
}
