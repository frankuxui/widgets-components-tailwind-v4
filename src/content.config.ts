import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const widgets = defineCollection({
	loader: glob({ base: './src/content', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		id: z.string().optional(),
		slug: z.string(),
		title: z.string(),
		description: z.string().optional(),
		category: z.string().optional(),
		visible: z.boolean().default(true),
	}),
});

export const collections = { widgets };
