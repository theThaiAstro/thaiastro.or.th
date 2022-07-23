import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import GlobalLayout from '@layouts/GlobalLayout';
import Article from '@interfaces/Article';

import { getPostsByPostType } from '@apis/postsApi';
import { gql } from '@apollo/client';
import client from '@libs/apollo';
import { AllPostTypesForGetStaticPaths } from '../../interfaces/getStaticPaths';
import List from '@components/pages/List/List';

type Props = { articles: Article[]; postType: string };

const Index: NextPage<Props> = (props: Props) => {
	const title = props.articles?.at(0)?.postType.name_th;

	return (
		<GlobalLayout title={title}>
			<List articles={props.articles} title={title} />
		</GlobalLayout>
	);
};

type ReturnedGetStaticPath = {
	postType: string;
};

export const getStaticPaths: GetStaticPaths<ReturnedGetStaticPath> = async () => {
	const { data } = await client.query<AllPostTypesForGetStaticPaths>({
		query: gql`
			query AllPostTypesForGetStaticPaths {
				post_types {
					id
					slug
					name
					name_th
				}
			}
		`,
	});

	return {
		paths: data.post_types.map(p => ({
			params: {
				postType: p.slug,
			},
		})),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<Props, ReturnedGetStaticPath> = async ({ params }) => {
	const { postType } = params!;

	const articles = await getPostsByPostType(postType);

	if (!articles) return { notFound: true };

	return {
		props: {
			articles,
			postType,
		},
	};
};

export default Index;
