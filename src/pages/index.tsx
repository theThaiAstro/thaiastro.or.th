import { graphql } from 'gatsby';
import React from 'react';

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

		news: allFile(
			filter: {
				sourceInstanceName: { eq: "news" }
				childrenMdx: { elemMatch: { frontmatter: { isFeatured: { ne: true }, isUnpublished: { ne: true } } } }
			}
			limit: 10
			sort: { order: DESC, fields: childMdx___frontmatter___date }
		) {
			edges {
				node {
					childMdx {
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

		articles: allFile(
			filter: {
				sourceInstanceName: { eq: "articles" }
				childrenMdx: { elemMatch: { frontmatter: { isFeatured: { ne: true }, isUnpublished: { ne: true } } } }
			}
			limit: 10
			sort: { order: DESC, fields: childMdx___frontmatter___date }
		) {
			edges {
				node {
					childMdx {
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
	}
`;
