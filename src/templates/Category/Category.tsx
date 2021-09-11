import { graphql } from 'gatsby';
import React from 'react';

// import Typography from '../../components/Typography/Typography';
import GenericArchive from '../../layout/GenericArchive/GenericArchive';
import ArchivePost from '../../models/ArchivePost';

const CategoryTemplate: React.FC<any> = ({ data }) => {
	const posts = data.allMdx.nodes as ArchivePost[];
	const Header = () => <></>;
	//  (
	// 	// <Typography type="heading" level={1}>
	// 	// 	Something
	// 	// </Typography>
	// );

	return <GenericArchive Header={Header} posts={posts} />;
};

export default CategoryTemplate;

export const pageQuery = graphql`
	query CategoryQuery($category: String) {
		allMdx(
			limit: 2000
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { categories: { elemMatch: { category: { in: [$category] } } } } }
		) {
			totalCount
			nodes {
				id
				fields {
					slug
					sourceInstanceName
				}
				frontmatter {
					authors {
						name {
							th
						}
					}
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
`;
