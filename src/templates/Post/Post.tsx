import React from 'react';
import { graphql } from 'gatsby';

import GenericPost, { GenericPostProps } from '../../layout/GenericPost/GenericPost';

const PostTemplate: React.FC<GenericPostProps> = ({ data }) => <GenericPost data={data} />;

export const PostQuery = graphql`
	query PostQuery($id: String!) {
		mdx(id: { eq: $id }) {
			body
			frontmatter {
				author
				categories
				date
				tags
				title
				featuredImage {
					childImageSharp {
						gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
					}
				}
			}
		}
	}
`;

export default PostTemplate;
