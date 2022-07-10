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

export const getPostsByFilter = async (filter: string, queryName?: string) => {
	const query = queryName ?? 'PostsByFilter';

	try {
		const res = await client.query<Response>({
			query: gql`
				query ${query} {
					posts (filter: ${filter}) {
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
								name
								slug
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

		return (res.data.posts).map(mapPostsResponseToArticle);
	} catch (e) {
		console.log(`[postApi::getPostsByFilter] Filter: ${filter}`);
		console.error(e);
		return [];
	}
};

export const getPostBySlug = async (slug: string) => (await getPostsByFilter(`{ slug: { _eq: "${slug}" } }`, 'PostBySlug')).at(0);

export const getPostsByPostType = async (postTypeSlug: string) =>
	await getPostsByFilter(`{ post_type: { slug: { _eq: "${postTypeSlug}" } } }`, 'PostsByPostType');

export const getPostsByCategory = async (categorySlug: string) =>
	await getPostsByFilter(`{ categories: { categories_id: { slug: { _eq: "${categorySlug}" } } } }`, 'PostsByCategory');
