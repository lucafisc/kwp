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
	bio: z.string(),
	email: z.string(),
	socialmedia: z.object({
		edges: z.array(SocialMediaSchema)
	}),
	featuredImage: z.object({
		node: ImageSchema,
	}).nullish()
});

export type ProfileType = z.infer<typeof ProfileSchema>;
export type SocialMediaType = z.infer<typeof SocialMediaSchema>;