import Author from './Author';
import Categrory from './Category';
import PostType from './PostType';
import Thumbnail from './Thumbnail';

export default interface Article {
	id: number;
	slug: string;
	title: string;
	author: Author;
	categories: Omit<Categrory, 'id'>[];
	content: string;
	tags: string[];
	postType: Omit<PostType, 'id'>;
	dateCreated?: string;
	excerpt?: string;
	thumbnail?: Thumbnail;
}
