import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import ArticleCard, { HeroArticleCard } from '@components/ArticleCard/ArticleCard';
import { GenericBlock } from '@constants/classNames';
import { mockArticles } from '@data/mockData';

import { gql } from '@apollo/client';
import client from '@libs/apollo';
import { Article } from '@interfaces/Article';

const Index: React.FC = () => {
	const [article, setArticle] = useState<Article>();

	useEffect(() => {

		const loadData = async () => {
			const { data } = await client.query<{ posts: Article[] }>({
				query: gql`
					query Posts {
						posts {
							id
							title
							content
							thumbnail {
								id
							}
							post_type_id {
								name
								name_th
							}
						}
					}
				`,
			});

			setArticle(data.posts[0])

		};
		loadData();
	}, []);

	const TopSection = () => {
		const HeroArticle = () => <div className=""></div>;
	};

	return (
		<>
			<section className={cx(GenericBlock, 'mt-12 lg:px-0')}>
				<div>
					{article && <HeroArticleCard article={article} />}
				</div>
				<div className="md:grid md:grid-cols-3 md:gap-x-8">
					{[article, article, article, article, article].map((a, i) => a && (
						<ArticleCard key={`${a.id}-${i}`} article={a} classNames="mt-8" />
					))}
				</div>
			</section>
		</>
	);
};

export default Index;
