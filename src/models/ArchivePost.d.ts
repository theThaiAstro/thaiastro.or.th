import { Fields } from './Fields';
import { Frontmatter } from './Frontmatter';

export default interface ArchivePost {
	id: string;
	fields: Fields;
	excerpt: string;
	frontmatter: Frontmatter;
}
