import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";
import react from "@astrojs/react";
import {
	transformerNotationDiff,
	transformerNotationHighlight,
} from "shikiji-transformers";
import remarkMath from "remark-math";
import rehypeKatext from "rehype-katex";

// https://astro.build/config
export default defineConfig({
	site: "https://www.yeboahdacosta.com",
	integrations: [
		mdx(),
		sitemap(),
		UnoCSS({
			injectReset: true,
		}),
		react(),
	],
	markdown: {
		shikiConfig: {
			themes: {
				light: "github-light",
				dark: "vitesse-dark",
			},
			transformers: [transformerNotationDiff(), transformerNotationHighlight()],
		},
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatext],
	},
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js-darwin-arm64"],
		},
	},
});
