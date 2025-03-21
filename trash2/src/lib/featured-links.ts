import MangobaseFeatureImage from "../components/MangobaseFeatureImage.astro";
import YTFeatureImage from "../components/YTFeatureImage.astro";
import AdetonFeatureImage from "../components/AdetonFeatureImage.astro";

const featuredLinks = [
	// {
	// 	title: 'SerialBox',
	// 	description:
	// 		'Growing engineers. A project to teach people especially kids how to build eletronic projects — with community.',
	// 	link: 'sb.degreat.co.uk',
	// },
	{
		title: "Mangobases 🥭",
		description:
			"Low-code Javascript backend framework for Node and Bun runtimes.",
		link: "#",
		featureImage: MangobaseFeatureImage,
	},
	{
		title: "Adeton",
		description:
			"This is a SaaS project I founded; an e-commerce enabler. Think Shopify but tailored for the Ghanaian merchant.",
		link: "#",
	},
	{
		title: "Devlog",
		description:
			"This is a Youtube channel I share progress on stuff I'm working on. It's fun, check it out!",
		link: "#",
		footer: "Please subscribe",
	},
];

export default featuredLinks;
