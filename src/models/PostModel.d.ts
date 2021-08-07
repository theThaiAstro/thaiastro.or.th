export interface PostModel {
	body: string;
	frontmatter: Frontmatter;
}

interface Frontmatter {
	author?: string;
	categories?: string[];
	date: string;
	tags?: string[];
	title: string;
	featuredImage: any;
}
