import Author from './Author';
import Categrory from './Category';
import PostType from './PostType';
import SystemFields from './SystemFields';
import Thumbnail from './Thumbnail';

export default interface Post extends SystemFields {
	id: number;
	status: string;
	sort?: number;
	title?: string;
	slug?: string;
	content?: string;
	published_at?: string;
	thumbnail?: Thumbnail;
	author?: Author;
	post_type?: PostType;
	categories?: { categories_id: Categrory[] };
}
