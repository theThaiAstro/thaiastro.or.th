export interface PostModel {
	body: string;
	frontmatter: Frontmatter;
}

interface Frontmatter {
	title: string;
}
