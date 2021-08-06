import React from 'react';
import { graphql } from 'gatsby';

import MDX from '../../components/MDX/MDX';
import { PostModel } from '../../models/PostModel';
import GlobalLayout from '../../layout/GlobalLayout/GlobalLayout';
import Typography from '../../components/Typography/Typography';

interface Props {
	data: {
		mdx: PostModel;
	};
}

const PostTemplate: React.FC<Props> = ({ data }) => {
	const { mdx } = data;
	const { frontmatter } = mdx;

	return (
		<GlobalLayout>
			<Typography type="heading" level={1}>
				{frontmatter.title}
			</Typography>
			<MDX withRenderer>{mdx.body}</MDX>
			<div style={{ height: 2000 }}></div>
		</GlobalLayout>
	);
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
