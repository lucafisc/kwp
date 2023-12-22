import z from 'zod';
import { ImageSchema } from './ImageTypes';

export const SocialMediaSchema = z.object({
	node: z.object({
		id: z.string(),
		platformName: z.string(),
		socialLink: z.string(),
	})
})

export const ProfileSchema = z.object({
	id: z.string(),
	bio: z.string(),
	email: z.string(),
	profilePicture: ImageSchema,
	socialMedia: z.object({
		edges: z.array(SocialMediaSchema)
	})
});

export type Profile = z.infer<typeof ProfileSchema>;