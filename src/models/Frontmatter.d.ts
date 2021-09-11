import { Author } from './Author';
import { Category } from './Category';
import { Tag } from './Tag';

export interface Frontmatter {
	authors?: Author[];
	categories: Category[];
	tags: Tag[];
	date: Date;
	featuredImage: any;
	isFeatured?: boolean;
	isUnpublished?: boolean;
	title: string;
}
