import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import GlobalLayout from '@layouts/GlobalLayout';
import Article from '@interfaces/Article';

import { getPostsByCategory } from '@apis/postsApi';
import { gql } from '@apollo/client';
import client from '@libs/apollo';
import { AllCategoriesForGetStaticPaths } from '../../interfaces/getStaticPaths';
import List from '@components/pages/List/List';

type Props = { articles: Article[]; slug: string };

const Index: NextPage<Props> = (props: Props) => {
	const title = props.articles?.at(0)?.categories?.find(x => x.slug === props.slug)?.name_th;

	return (
		<GlobalLayout title={title}>
			<List articles={props.articles ?? []} title={title} />
		</GlobalLayout>
	);
};

type ReturnedGetStaticPath = {
	slug: string;
};

export const getStaticPaths: GetStaticPaths<ReturnedGetStaticPath> = async () => {
	const { data } = await client.query<AllCategoriesForGetStaticPaths>({
		query: gql`
			query AllCategoriesForGetStaticPaths {
				categories {
					id
					slug
					name
					name_th
				}
			}
		`,
	});

	return {
		paths: data.categories.map(p => ({
			params: {
				slug: p.slug,
			},
		})),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<Props, ReturnedGetStaticPath> = async ({ params }) => {
	const { slug } = params!;

	const articles = await getPostsByCategory(slug);

	if (!articles) return { notFound: true };

	return {
		props: {
			articles,
			slug,
		},
	};
};

export default Index;
