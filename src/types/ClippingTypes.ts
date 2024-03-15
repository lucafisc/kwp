import z from "zod";

export const ClippingSchema = z.object({
  id: z.string(),
  title: z.string(),
  pressLink: z.string(),
  pressAuthor: z.string(),
  pressDate: z.string(),
});

export type ClippingType = z.infer<typeof ClippingSchema>;
