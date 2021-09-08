import { Author } from './Author';

export interface Frontmatter {
	authors?: Author[];
	date: Date;
	featuredImage: any;
	isFeatured?: boolean;
	isUnpublished?: boolean;
	title: string;
}
