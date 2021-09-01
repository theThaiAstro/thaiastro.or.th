import cx from 'classnames';
import { graphql } from 'gatsby';
import React from 'react';

import Typography from '../../components/Typography/Typography';
import GlobalLayout from '../../layout/GlobalLayout/GlobalLayout';

const AuthorTemplate: React.FC<any> = ({ data }) => {
	return (
		<GlobalLayout>
			<main>
				<article>
					<Typography type="heading" level={1}>
						{JSON.stringify(data)}
					</Typography>
					{/* https://css-tricks.com/almanac/properties/l/line-clamp/ */}
				</article>
			</main>
		</GlobalLayout>
	);
};

export default AuthorTemplate;

export const pageQuery = graphql`
	query AuthorQuery($author: String) {
		allMdx(
			limit: 2000
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { authors: { in: [$author] } } }
		) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						authors
						title
					}
					excerpt(pruneLength: 512)
				}
			}
		}
	}
`;
