import z from "zod";

export const SocialMediaSchema = z.object({
  node: z.object({
    id: z.string(),
    platformName: z.string(),
    socialLink: z.string(),
  }),
});

const ProfilePictureSchema = z.object({
  mediaItemUrl: z.string(),
  altText: z.string(),
  mediaDetails: z.object({
    height: z.number(),
    width: z.number(),
  }),
});

export const ProfileSchema = z.object({
  bio: z.string(),
  email: z.string(),
  profilePicture: ProfilePictureSchema.nullish(),
});

export type ProfilePictureType = z.infer<typeof ProfilePictureSchema>;

export type ProfileType = z.infer<typeof ProfileSchema>;
export type SocialMediaType = z.infer<typeof SocialMediaSchema>;
