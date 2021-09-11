import cx from 'classnames';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import Badge from '../../components/Badge/Badge';
import MDX from '../../components/MDX/MDX';
import ShareButtons from '../../components/Share/ShareButtons';
import Typography from '../../components/Typography/Typography';
import { DotSeparator } from '../../constants/Separator';
import { Mdx } from '../../models/Mdx';
import { formatDate } from '../../utils/dateUtils';
import { getWordForSourceInstanceName } from '../../utils/sourceInstanceUtils';
import GlobalLayout from '../GlobalLayout/GlobalLayout';

import * as styles from './GenericPost.module.scss';
import './GenericPost.scss';

export interface GenericPostProps {
	data: {
		mdx: Mdx;
	};
}

const GenericPost: React.FC<GenericPostProps> = ({ data }) => {
	const { mdx } = data;
	const { fields, frontmatter } = mdx;
	const featuredImage = getImage(frontmatter.featuredImage);

	const GenericBlock: React.FC<{ className?: string }> = ({ className, children }) => (
		<section className={cx(styles.GenericBlock, className)}>{children}</section>
	);

	const url = `https://thaiastro.nectec.or.th${mdx.fields.slug}`;

	const Authors = () => (
		<>
			{frontmatter.authors?.length ? (
				<ul className={cx('List--OneLine')}>
					{frontmatter.authors.map((a) => (
						<li>
							<Link to={a.fields.slug} key={a.username}>
								<Typography type="text" variant="subextra">
									{a.name.th}
								</Typography>
							</Link>
						</li>
					))}
				</ul>
			) : (
				'สมาคมดาราศาสตร์ไทย'
			)}
		</>
	);

	const date = `${formatDate(frontmatter.date, 'short')} ${DotSeparator} โดย `;

	const Metadata = () => {
		const Categories = () => (
			<ul className={cx('List--OneLine', styles.Categories)}>
				{frontmatter.categories!.map((c) => (
					<li key={c.category}>
						<Link to={c.fields.slug}>{c.name_th}</Link>
					</li>
				))}
			</ul>
		);

		return (
			<GenericBlock className={styles.Metadata}>
				<Link to={`/${fields.sourceInstanceName}`}>
					<Badge text={getWordForSourceInstanceName(fields.sourceInstanceName)} />
				</Link>
				{frontmatter.categories && <Categories />}
				<Typography type="heading" level={1} className={styles.Title}>
					{frontmatter.title}
				</Typography>
				<div className={styles.Author}>
					<Typography type="text" variant="subextra">
						{date}
					</Typography>
					<Authors />
				</div>
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
				<div className={styles.Tags}>
					<strong>เรื่องที่เกี่ยวข้อง:&nbsp;</strong>
					<ul className={cx('List--OneLine')}>
						{frontmatter.tags!.map((t) => (
							<li key={t.tag}>
								<Link to={t.fields.slug}>{t.name_th}</Link>
							</li>
						))}
					</ul>
				</div>
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
