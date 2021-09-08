import { Fields } from './Fields';
import { Frontmatter } from './Frontmatter';

export interface Mdx {
	id: string;
	frontmatter: Frontmatter;
	fields: Fields;
}
