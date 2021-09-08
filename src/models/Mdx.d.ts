import { Fields } from './Fields';
import { Frontmatter } from './Frontmatter';

export interface Mdx {
	id: string;
	body: any;
	frontmatter: Frontmatter;
	fields: Fields;
}
