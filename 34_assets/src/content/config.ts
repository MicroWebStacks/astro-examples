import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    cover: image().refine((img) => img.width >= 100, {
      message: "Cover image must be at least 100 pixels wide!",
    }),
    coverAlt: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
