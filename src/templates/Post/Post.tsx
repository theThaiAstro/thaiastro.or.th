import React from 'react';
import { graphql } from 'gatsby';

import MDX from '../../components/MDX/MDX';
import { PostModel } from '../../models/PostModel';

interface Props {
	data: {
		mdx: PostModel;
	};
}

const PostTemplate: React.FC<Props> = ({ data }) => {
	const { mdx } = data;

	return <MDX withRenderer>{mdx.body}</MDX>;
};

export const PostQuery = graphql`
	query PostQuery($id: String!) {
		mdx(id: { eq: $id }) {
			body
			frontmatter {
				title
			}
		}
	}
`;

export default PostTemplate;
