import z from 'zod';

export const ThumbnailSchema = z.object({
	sourceUrl: z.string(),
	height: z.number(),
	width: z.number(),
})

export type ThumbnailType = z.infer<typeof ThumbnailSchema>

export const ImageSchema = z.object({
	guid: z.string(),
	altText: z.string(),
	mediaDetails: z.object({
		height: z.number(),
		width: z.number(),
	}),
	placeholder: z.string().optional(),
});

export type ImageType = z.infer<typeof ImageSchema>

export const FilmSchema = z.object({
	id: z.string(),
	filmtitle: z.string(),
	festivals: z.array(z.string()),
	featuredImage: z.object({
		node: ImageSchema,
	}).nullish()
});

export type FilmType = z.infer<typeof FilmSchema>;