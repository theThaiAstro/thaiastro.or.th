import React from 'react';
import cx from 'classnames';
import { graphql } from 'gatsby';

import MDX from '../../components/MDX/MDX';
import { PostModel } from '../../models/PostModel';
import GlobalLayout from '../../layout/GlobalLayout/GlobalLayout';
import Typography from '../../components/Typography/Typography';
import Badge from '../../components/Badge/Badge';

import * as styles from './Post.module.scss';
import { DotSeparator } from '../../constants/Separator';
import { formatDate } from '../../utils/dateUtils';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

interface Props {
	data: {
		mdx: PostModel;
	};
}

const PostTemplate: React.FC<Props> = ({ data }) => {
	const { mdx } = data;
	const { frontmatter } = mdx;
	const featuredImage = getImage(frontmatter.featuredImage);

	const GenericBlock: React.FC<{ className?: string }> = ({ className, children }) => (
		<section className={cx(styles.GenericBlock, className)}>{children}</section>
	);

	const AuthorDate = `${formatDate(frontmatter.date, 'short')} ${DotSeparator} โดย ${frontmatter.author ?? ''}`;

	const Metadata = () => {
		const Categories = () => (
			<ul className={cx('List--OneLine', styles.Categories)}>
				{frontmatter.categories!.map((c) => (
					<li key={c}>
						<Typography type="text" variant="extra">
							{c}
						</Typography>
					</li>
				))}
			</ul>
		);

		return (
			<GenericBlock className={styles.Metadata}>
				<Badge text="บทความ" />
				{frontmatter.categories && <Categories />}
				<Typography type="heading" level={1} className={styles.Title}>
					{frontmatter.title}
				</Typography>
				<Typography type="text" variant="subextra" useDiv className={styles.Author}>
					{AuthorDate}
				</Typography>
			</GenericBlock>
		);
	};

	const content = (
		<GenericBlock className={styles.Content}>
			<MDX withRenderer>{mdx.body}</MDX>
		</GenericBlock>
	);

	const Extra = () => {
		const Tags = () => (
			<ul className={cx('List--OneLine', styles.Tags)}>
				{frontmatter.tags!.map((t) => (
					<li key={t}>
						<Typography type="text" variant="extra">
							{t}
						</Typography>
					</li>
				))}
			</ul>
		);

		return <GenericBlock className={styles.Extra}>{frontmatter.tags && <Tags />}</GenericBlock>;
	};

	return (
		<GlobalLayout>
			<main className={styles.MainContent}>
				<article>
					<Metadata />
					{featuredImage && (
						<GatsbyImage className={styles.FeaturedImage} image={featuredImage} alt={frontmatter.title} />
					)}
					{content}
					<Extra />
				</article>
			</main>
		</GlobalLayout>
	);
};

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
