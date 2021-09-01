import cx from 'classnames';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import Badge from '../../components/Badge/Badge';
import MDX from '../../components/MDX/MDX';
import ShareButtons from '../../components/Share/ShareButtons';
import Typography from '../../components/Typography/Typography';
import { DotSeparator } from '../../constants/Separator';
import { PostModel } from '../../models/PostModel';
import { formatDate } from '../../utils/dateUtils';
import GlobalLayout from '../GlobalLayout/GlobalLayout';

import * as styles from './GenericPost.module.scss';
import './GenericPost.scss';

export interface GenericPostProps {
	data: {
		mdx: PostModel;
	};
}

const GenericPost: React.FC<GenericPostProps> = ({ data }) => {
	const { mdx } = data;
	const { frontmatter } = mdx;
	const featuredImage = getImage(frontmatter.featuredImage);

	const GenericBlock: React.FC<{ className?: string }> = ({ className, children }) => (
		<section className={cx(styles.GenericBlock, className)}>{children}</section>
	);

	const url = (() => {
		const url = window.location.href;
		// prettier-ignore
		if (!url.includes('thaiastro.nectec.or.th') || !url.includes('thaiastro.or.th')) return `https://thaiastro.or.th${window.location.pathname}`;
		return url;
	})();

	const AuthorDate = `${formatDate(frontmatter.date, 'short')} ${DotSeparator} โดย ${frontmatter.authors ?? ''}`;

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
				<ShareButtons text={frontmatter.title} url={url} className={styles.ShareButtons} />
			</GenericBlock>
		);
	};

	const Content = () => (
		<GenericBlock className={cx(styles.Content, 'ContentBlock')}>
			<MDX withRenderer>{mdx.body}</MDX>
		</GenericBlock>
	);

	const Extra = () => {
		const Tags = () => (
			<div>
				<ShareButtons text={frontmatter.title} url={url} className={styles.ShareButtonsSeconday} />
				{/* <ul className={cx('List--OneLine', styles.Tags)}> */}
				<ul className={cx('List--OneLine')}>
					{frontmatter.tags!.map((t) => (
						<li key={t}>
							<Typography type="text" variant="extra">
								{t}
							</Typography>
						</li>
					))}
				</ul>
			</div>
		);

		return <GenericBlock className={styles.Extra}>{frontmatter.tags && <Tags />}</GenericBlock>;
	};

	return (
		<GlobalLayout>
			<main className={cx(styles.MainContent, 'GenericPost')}>
				<article>
					<Metadata />
					{featuredImage && (
						<GatsbyImage className={styles.FeaturedImage} image={featuredImage} alt={frontmatter.title} />
					)}
					<Content />
					<Extra />
				</article>
			</main>
		</GlobalLayout>
	);
};

export default GenericPost;
