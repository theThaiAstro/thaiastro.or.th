import { gql } from '@apollo/client';

import client from '@libs/apollo';

import Article from '@interfaces/Article';
import PostTypeId from '@interfaces/PostType';
import Author from '@interfaces/Author';
import Categrory from '@interfaces/Category';

type PostsResponse = Pick<Article, 'id' | 'title' | 'content' | 'thumbnail' | 'slug'> & {
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
	categories: post.categories.map(c => c.categories_id.name_th),
	date: new Date().toISOString(),
	slug: post.slug,
	tags: [],
	postType: {
		...post.post_type,
	}
});

export const loadData = async (setData: (articles: Article[]) => void) => {
	const { data } = await client.query<{ posts: PostsResponse[] }>({
		query: gql`
			query Posts {
				posts {
					id
					slug
					title
					content
					thumbnail {
						id
					}
					post_type {
						slug
						name
						name_th
					}
					categories {
						categories_id {
							name_th
						}
					}
				}
			}
		`,
	});

	const mappedData = data.posts.map(mapPostsResponseToArticle);
	setData(mappedData);
};
