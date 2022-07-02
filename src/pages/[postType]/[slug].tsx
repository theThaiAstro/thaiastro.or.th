import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import cx from 'classnames';
import { gql } from '@apollo/client';

import { getPostBySlug } from '@apis/postsApi';
import Image from '@components/Image/Image';
import Markdown from '@components/Markdown/Markdown';
import Badge from '@components/Badge/Badge';
import getAsset from '@helpers/getAsset';
import GlobalLayout from '@layouts/GlobalLayout';
import client from '@libs/apollo';

import Article from '@interfaces/Article';
import { AllPostsForGetStaticPaths, PostForGetStaticPaths } from './getStaticPaths.d';

import styles from './index.module.scss';

type Props = { article: Article };

const getAuthorName = (author: Article['author']) => {
	const names = [author.first_name, author.last_name].filter(_ => !!_).join(' ');
	return names.length ? names : 'สมาคมดาราศาสตร์ไทย';
};

const NewsPage: NextPage<Props> = (props: Props) => {
	const { article } = props;

	if (!article) return null;

	console.log(article);

	// TODO: Add tags
	// const Tags = () => <ul>{article.tags.map(({ }))}</ul>;

	const Categories = () => (
		<ul className="mt-4 font-medium text-blue-900 hover:cursor-pointer">
			{article.categories.map((c, i, arr) => (
				<li className={cx(i !== arr.length - 1 && 'after:content-[","]', 'mr-2 inline', 'hover:underline hover:decoration-blue-900 hover:decoration-dotted')} key={c}>
					{c}
				</li>
			))}
		</ul>
	);

	const Time = () => (
		<>
			<time dateTime={article.dateCreated}>
				{new Intl.DateTimeFormat(['th-th', 'en-GB'], {
					dateStyle: 'medium',
				}).format(new Date(article.dateCreated!))}
			</time>
			&nbsp;·&nbsp;
		</>
	);

	const Author = () => <address className="inline not-italic">{getAuthorName(article.author)}</address>;

	const MetaData = () => (
		<section className="font-display">
			<Badge text={article.postType.name_th} />
			<Categories />
			<h1 className="mt-6 text-4xl font-semibold">{article.title}</h1>
			<div className="mt-4 text-base font-light">
				{article.dateCreated && <Time />}
				โดย <Author />
			</div>
		</section>
	);

	const Article = () => (
		<article className="mx-auto overflow-x-hidden">
			<div
				className={cx(
					'relative h-[72vh]',
					'left-[calc(-50vw_+_50%)] w-screen max-w-[100vw]',
					'md:left-[calc(-54ch_+_50%)] md:w-[108ch] md:max-w-[108ch]'
				)}
			>
				<Image alt={article.title} src={getAsset(article.thumbnail?.id)} layout="fill" objectFit="cover" unoptimized={true} />
			</div>
			<section className={cx('relative mx-auto box-content max-w-[72ch] bg-white', 'px-4 py-16', 'md:-mt-16 md:px-16')}>
				<MetaData />
				<Markdown content={article.content} className={cx('pt-4', styles.Article__Content)} />
			</section>
		</article>
	);

	return <GlobalLayout title={article.title}>{article && <Article />}</GlobalLayout>;
};

type ReturnedGetStaticPath = {
	postType: string;
	slug: string;
};

export const getStaticPaths: GetStaticPaths<ReturnedGetStaticPath> = async () => {
	const { data } = await client.query<AllPostsForGetStaticPaths>({
		query: gql`
			query AllPostsForGetStaticPaths {
				posts {
					slug
					post_type {
						slug
					}
				}
			}
		`,
	});

	return {
		paths: data.posts.map(p => ({
			params: {
				postType: p.post_type.slug,
				slug: p.slug,
			},
		})),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<Props, ReturnedGetStaticPath> = async ({ params }) => {
	const { slug } = params!;

	const article = await getPostBySlug(slug);

	if (!article) return { notFound: true };

	return {
		props: {
			article: article,
		},
	};
};

export default NewsPage;
