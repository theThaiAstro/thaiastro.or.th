import { graphql } from 'gatsby';
import React from 'react';

import { Mdx } from '../models/Mdx';

import IndexView from './Index/IndexView';

type Node = {
	nodes: Mdx[];
};

type Props = {
	data: {
		latestStories: Node;
		news: Node;
		articles: Node;
	};
};

const Index: React.FC<Props> = ({ data }) => (
	<IndexView
		latestStories={data?.latestStories?.nodes ?? []}
		articles={data?.articles?.nodes ?? []}
		news={data?.news?.nodes ?? []}
	/>
);

export default Index;

export const IndexQuery = graphql`
	query IndexQuery {
		latestStories: allMdx(
			sort: { order: DESC, fields: frontmatter___date }
			limit: 5
			filter: { frontmatter: { isFeatured: { ne: true }, isUnpublished: { ne: true } } }
		) {
			nodes {
				id
				frontmatter {
					date
					authors {
						name {
							th
						}
					}
					featuredImage {
						childImageSharp {
							gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
						}
					}
					isFeatured
					isUnpublished
					title
				}
				fields {
					slug
					sourceInstanceName
				}
			}
		}
		news: allMdx(
			sort: { order: DESC, fields: frontmatter___date }
			limit: 10
			filter: {
				frontmatter: { isFeatured: { ne: true }, isUnpublished: { ne: true } }
				fields: { sourceInstanceName: { eq: "news" } }
			}
		) {
			nodes {
				id
				frontmatter {
					date
					authors {
						name {
							th
						}
					}
					featuredImage {
						childImageSharp {
							gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
						}
					}
					isFeatured
					isUnpublished
					title
				}
				fields {
					slug
					sourceInstanceName
				}
			}
		}
		articles: allMdx(
			sort: { order: DESC, fields: frontmatter___date }
			limit: 10
			filter: {
				frontmatter: { isFeatured: { ne: true }, isUnpublished: { ne: true } }
				fields: { sourceInstanceName: { eq: "articles" } }
			}
		) {
			nodes {
				id
				frontmatter {
					date
					authors {
						name {
							th
						}
					}
					featuredImage {
						childImageSharp {
							gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
						}
					}
					isFeatured
					isUnpublished
					title
				}
				fields {
					slug
					sourceInstanceName
				}
			}
		}
	}
`;
