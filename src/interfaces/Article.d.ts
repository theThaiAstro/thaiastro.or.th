import Author from './Author';
import PostType from './PostType';
import Thumbnail from './Thumbnail';

export default interface Article {
	id: number;
	slug: string;
	title: string;
	date: string;
	author: Author;
	categories: string[];
	content: string;
	tags: string[];
	excerpt?: string;
	thumbnail?: Thumbnail;
	postType: Omit<PostType, 'id'>;
}
