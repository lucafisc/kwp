import request, { gql } from 'graphql-request';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const revalidate = 600;

type Props = {
	params: {
		slug: string;
	};
};

const WP_GRAPHQL_BASE = process.env.WP_GRAPHQL_BASE!;

export default async function page({ params: { slug } }: Props) {
	const film = await getFilmData(slug);
	// const image = post.featuredImage?.node;
	return (
        <>
        {slug}
        </>
		// <div>
		// 	{new Date().toLocaleTimeString('de')}
		// 	<header>
		// 		<h1>{post.title}</h1>
		// 		<time dateTime={post.date.substring(0, 10)}>
		// 			{new Date(post.date).toLocaleDateString('de')}
		// 		</time>
		// 	</header>
		// 	{/* Bild, falls Bilddaten vorhanden, mit der Image-Komponente darstellen */}
		// 	{image && (
		// 		<Image
		// 			className="full-width-image"
		// 			alt={image.altText}
		// 			src={image.guid}
		// 			width={image.mediaDetails.width}
		// 			height={image.mediaDetails.height}
		// 			sizes="(max-width: 56rem) 90vw, 54rem"
		// 		/>
		// 	)}
		// 	<div dangerouslySetInnerHTML={{ __html: post.content }} />
		// </div>
	);
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
          featuredImage {
            node {
              altText
              guid
              mediaDetails {
                height
                width
              }
            }
          }
        }
      }

	`;

	const response = (await request(WP_GRAPHQL_BASE, query)) as any;
      console.log("film", response);
    
}

/* Metadaten dynamisch generieren */

// export async function generateMetadata({ params: { slug } }: Props) {
// 	const { title } = await getPostData(slug);

// 	return {
// 		title,
// 	};
// }

// export async function generateStaticParams() {
// 	const query = gql`
// 		{
// 			posts {
// 				nodes {
// 					slug
// 				}
// 			}
// 		}
// 	`;

// 	const response = (await request(WP_GRAPHQL_BASE, query)) as {
// 		posts: {
// 			nodes: { slug: string }[];
// 		};
// 	};

// 	return response.posts.nodes.map((post) => ({ params: { slug: post.slug } }));
// }
