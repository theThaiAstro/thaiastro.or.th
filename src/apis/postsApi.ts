import { gql } from '@apollo/client';

import client from '@libs/apollo';

import mapPostsResponseToArticle, { PostsResponse } from '@helpers/mappers/mapPostsResponseToArticle';

type Response = { posts: PostsResponse[] };

export const getAllPosts = async () => {
	const { data } = await client.query<Response>({
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
					author {
						title
						first_name
						last_name
						description
					}
				}
			}
		`,
	});

	return data.posts.map(mapPostsResponseToArticle);
};

export const getPostBySlug = async (slug: string) => {
	const { data } = await client.query<Response>({
		query: gql`
			query PostBySlug {
				posts (filter: { slug: { _eq: "${slug}" } }) {
					id
					slug
					title
					content
					date_created
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
					author {
						title
						first_name
						last_name
						description
					}
				}
			}
		`,
	});

	return data.posts.map(mapPostsResponseToArticle).at(0);
};
