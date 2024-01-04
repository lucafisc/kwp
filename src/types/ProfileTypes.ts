import z from 'zod';
import { ImageSchema } from './ImageTypes';

export const SocialMediaSchema = z.object({
	node: z.object({
		id: z.string(),
		platformName: z.string(),
		socialLink: z.string(),
	})
})

export const ContactSchema = z.object({
	email: z.string(),
	socialMedia: z.object({
		edges: z.array(SocialMediaSchema)
	})
})

export const ProfileSchema = z.object({
	bio: z.string(),
	featuredImage: z.object({
		node: ImageSchema,
	}).nullish()
});

export type ContactType = z.infer<typeof ContactSchema>;
export type ProfileType = z.infer<typeof ProfileSchema>;