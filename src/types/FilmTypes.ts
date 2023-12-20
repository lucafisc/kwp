import z from 'zod';


export const FilmImageSchema = z.object({
	guid: z.string(),
	altText: z.string(),
	mediaDetails: z.object({
		height: z.number(),
		width: z.number(),
	})
});

export const FilmSchema = z.object({
	id: z.string(),
	filmtitle: z.string(),
	festivals: z.array(z.string()),
	featuredImage: z.object({
		node: FilmImageSchema,
	}).nullish()
});

export type FilmType = z.infer<typeof FilmSchema>;