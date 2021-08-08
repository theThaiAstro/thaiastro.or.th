import React from 'react';
import { graphql } from 'gatsby';

import IndexView from './Index/IndexView';

const Index = ({ data }: any) => <IndexView data={data} />;

export default Index;

export const IndexQuery = graphql`
	query IndexQuery {
		featuredPost: allMdx(
			sort: { order: DESC, fields: frontmatter___date }
			limit: 1
			filter: { frontmatter: { isFeatured: { eq: true }, isUnpublished: { ne: true } } }
		) {
			edges {
				node {
					frontmatter {
						title
						featuredImage {
							childImageSharp {
								gatsbyImageData(quality: 100, layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1)
							}
						}
					}
					fields {
						slug
						sourceInstanceName
					}
				}
			}
		}
		latestStories: allMdx(
			sort: { order: DESC, fields: frontmatter___date }
			limit: 5
			filter: { frontmatter: { isFeatured: { ne: true }, isUnpublished: { ne: true } } }
		) {
			edges {
				node {
					id
					frontmatter {
						date
						author
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
	}
`;
