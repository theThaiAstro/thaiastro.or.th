import Author from './Author';
import PostType from './PostType';
import Thumbnail from './Thumbnail';

export default interface Article {
	id: number;
	slug: string;
	title: string;
	author: Author;
	categories: string[];
	content: string;
	tags: string[];
	postType: Omit<PostType, 'id'>;
	dateCreated?: string;
	excerpt?: string;
	thumbnail?: Thumbnail;
}
