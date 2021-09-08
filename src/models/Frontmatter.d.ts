import { Author } from './Author';

export interface Frontmatter {
	authors?: Author[];
	categories: string[];
	tags: string[];
	date: Date;
	featuredImage: any;
	isFeatured?: boolean;
	isUnpublished?: boolean;
	title: string;
}
