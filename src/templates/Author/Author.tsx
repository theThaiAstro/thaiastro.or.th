import { graphql } from 'gatsby';
import React from 'react';

import GenericArchive from '../../layout/GenericArchive/GenericArchive';

const AuthorTemplate: React.FC<any> = ({ data }) => {
	const posts = data.allMdx.edges.map((e: any) => e.node);
	const Header = () => <div>'Header'</div>;

	return <GenericArchive Header={Header} posts={posts} />;
};

export default AuthorTemplate;

export const pageQuery = graphql`
	query AuthorQuery($author: String) {
		allMdx(
			limit: 2000
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { authors: { in: [$author] } }, fields: { sourceInstanceName: { ne: "authors" } } }
		) {
			totalCount
			edges {
				node {
					id
					fields {
						slug
						sourceInstanceName
					}
					frontmatter {
						authors
						date
						featuredImage {
							childImageSharp {
								gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
							}
						}
						isUnpublished
						title
					}
					excerpt(pruneLength: 512)
				}
			}
		}
	}
`;
