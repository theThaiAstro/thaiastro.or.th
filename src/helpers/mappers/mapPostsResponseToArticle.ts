import Article from '@interfaces/Article';
import PostTypeId from '@interfaces/PostType';
import Author from '@interfaces/Author';
import Categrory from '@interfaces/Category';
import SystemFields from '@interfaces/SystemFields';

export type PostsResponse = Pick<Article, 'id' | 'title' | 'content' | 'thumbnail' | 'slug'> &
	Pick<SystemFields, 'date_created'> & {
		author: Pick<Author, 'first_name'>;
		categories: {
			categories_id: Categrory;
		}[];
		post_type: Pick<PostTypeId, 'slug' | 'name' | 'name_th'>;
	};

const mapPostsResponseToArticle = (post: PostsResponse): Article => ({
	id: post.id,
	title: post.title,
	content: post.content,
	author: post.author,
	thumbnail: post.thumbnail,
	categories: post.categories.map(c => c.categories_id),
	dateCreated: post.date_created,
	slug: post.slug,
	tags: [],
	postType: { ...post.post_type },
});

export default mapPostsResponseToArticle;
