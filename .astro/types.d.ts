declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"2023-in-review.md": {
	id: "2023-in-review.md";
  slug: "2023-in-review";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"benevolence.md": {
	id: "benevolence.md";
  slug: "benevolence";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ci-npm-workspaces.md": {
	id: "ci-npm-workspaces.md";
  slug: "ci-npm-workspaces";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"designing-scalable-microservices.md": {
	id: "designing-scalable-microservices.md";
  slug: "designing-scalable-microservices";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"diversify-interests.md": {
	id: "diversify-interests.md";
  slug: "diversify-interests";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"flat-file-hierarchy.md": {
	id: "flat-file-hierarchy.md";
  slug: "flat-file-hierarchy";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"illustrator.mdx": {
	id: "illustrator.mdx";
  slug: "illustrator";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"mongo-tauri.md": {
	id: "mongo-tauri.md";
  slug: "mongo-tauri";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nobody-reads.mdx": {
	id: "nobody-reads.mdx";
  slug: "nobody-reads";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"optimizing-fonts.md": {
	id: "optimizing-fonts.md";
  slug: "optimizing-fonts";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"preact-signals.md": {
	id: "preact-signals.md";
  slug: "preact-signals";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"preface.md": {
	id: "preface.md";
  slug: "preface";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"react-refs.md": {
	id: "react-refs.md";
  slug: "react-refs";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"stack-ethnicity.md": {
	id: "stack-ethnicity.md";
  slug: "stack-ethnicity";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"stylebender.md": {
	id: "stylebender.md";
  slug: "stylebender";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"this-is-stupid.md": {
	id: "this-is-stupid.md";
  slug: "this-is-stupid";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"lesson-notes": {
"inequalities-involving-fractions.mdx": {
	id: "inequalities-involving-fractions.mdx";
  slug: "inequalities-involving-fractions";
  body: string;
  collection: "lesson-notes";
  data: InferEntrySchema<"lesson-notes">
} & { render(): Render[".mdx"] };
"vector-i.mdx": {
	id: "vector-i.mdx";
  slug: "vector-i";
  body: string;
  collection: "lesson-notes";
  data: InferEntrySchema<"lesson-notes">
} & { render(): Render[".mdx"] };
};
"lessons": {
"quiz-rs/create-project.md": {
	id: "quiz-rs/create-project.md";
  slug: "quiz-rs/create-project";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
"quiz-rs/design-app.mdx": {
	id: "quiz-rs/design-app.mdx";
  slug: "quiz-rs/design-app";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"quiz-rs/gui.mdx": {
	id: "quiz-rs/gui.mdx";
  slug: "quiz-rs/gui";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"quiz-rs/intro.md": {
	id: "quiz-rs/intro.md";
  slug: "quiz-rs/intro";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
"quiz-rs/layout.mdx": {
	id: "quiz-rs/layout.mdx";
  slug: "quiz-rs/layout";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"quiz-rs/next-up.md": {
	id: "quiz-rs/next-up.md";
  slug: "quiz-rs/next-up";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
"quiz-rs/state-and-logic.mdx": {
	id: "quiz-rs/state-and-logic.mdx";
  slug: "quiz-rs/state-and-logic";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"quiz-rs/styling.md": {
	id: "quiz-rs/styling.md";
  slug: "quiz-rs/styling";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
"quiz-rs/test.md": {
	id: "quiz-rs/test.md";
  slug: "quiz-rs/test";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
"quiz-rs/what-is-a-quiz.mdx": {
	id: "quiz-rs/what-is-a-quiz.mdx";
  slug: "quiz-rs/what-is-a-quiz";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		"course-meta": {
"c++-intro": {
	id: "c++-intro";
  collection: "course-meta";
  data: InferEntrySchema<"course-meta">
};
"go-intro": {
	id: "go-intro";
  collection: "course-meta";
  data: InferEntrySchema<"course-meta">
};
"javascript-into": {
	id: "javascript-into";
  collection: "course-meta";
  data: InferEntrySchema<"course-meta">
};
"quiz-rs": {
	id: "quiz-rs";
  collection: "course-meta";
  data: InferEntrySchema<"course-meta">
};
"remote-access-control": {
	id: "remote-access-control";
  collection: "course-meta";
  data: InferEntrySchema<"course-meta">
};
"scala-intro": {
	id: "scala-intro";
  collection: "course-meta";
  data: InferEntrySchema<"course-meta">
};
"stripe-intro": {
	id: "stripe-intro";
  collection: "course-meta";
  data: InferEntrySchema<"course-meta">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
