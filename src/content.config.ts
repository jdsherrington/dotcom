import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		date: z.date(),
		description: z.string(),
		author: z.string(),
		imagePath: z.string(),
		imageAlt: z.string(),
		tags: z.array(z.string()),
		wordCount: z.number().optional(), // Making this optional since we'll calculate it
	})
});

export const collections = { blog };
