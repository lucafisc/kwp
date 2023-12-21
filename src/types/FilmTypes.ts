import z from 'zod';
import { ImageSchema } from './ImageTypes';

export const FilmSchema = z.object({
	id: z.string(),
	filmtitle: z.string(),
	year: z.number(),
	role: z.array(z.string()),
	language: z.array(z.string()),
	duration: z.string(),
	synopsis: z.string(),
	additionalInformation: z.array(z.string()),
	festivals: z.array(z.string()),
	featuredImage: z.object({
		node: ImageSchema,
	}).nullish()
});

export type FilmType = z.infer<typeof FilmSchema>;