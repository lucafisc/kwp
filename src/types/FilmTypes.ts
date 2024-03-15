import z from "zod";
import { ImageSchema } from "./ImageTypes";

export const FilmTeaserSchema = z.object({
  id: z.string(),
  slug: z.string(),
  filmtitle: z.string(),
  year: z.number(),
  still: ImageSchema.nullish(),
});

export type FilmTeaserType = z.infer<typeof FilmTeaserSchema>;

export const FilmSchema = z.object({
  id: z.string(),
  filmtitle: z.string(),
  year: z.number(),
  role: z.array(z.string()),
  language: z.array(z.string()),
  duration: z.string(),
  synopsis: z.string(),
  trailer: z.string().nullish(),
  fullMovie: z.string().nullish(),
  additionalInformation: z.array(z.string()),
  festivals: z.array(z.string()),
  featuredImage: z
    .object({
      node: ImageSchema,
    })
    .nullish(),
  still: ImageSchema.nullish(),
  poster: ImageSchema.nullish(),
});

export type FilmType = z.infer<typeof FilmSchema>;
