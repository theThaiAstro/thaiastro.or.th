export interface PostModel {
	body: string;
	frontmatter: Frontmatter;
}

interface Frontmatter {
	author?: string;
	categories?: string[];
	date: string;
	title: string;
}
