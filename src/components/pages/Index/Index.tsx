import React from 'react';
import cx from 'classnames';

import ArticleCard, { HeroArticleCard } from '@components/ArticleCard/ArticleCard';
import { GenericBlock } from '@constants/classNames';
import { mockArticles } from '@data/mockData';

const Index: React.FC = () => {
	const articles = mockArticles as unknown as Article[];

	const TopSection = () => {
		const HeroArticle = () => <div className=""></div>;
	};

	return (
		<>
			<section className={cx(GenericBlock, 'mt-12 lg:px-0')}>
				<div>
					<HeroArticleCard article={articles[0]} />
				</div>
				<div className="md:grid md:grid-cols-3 md:gap-x-8">
					{[...articles, ...articles, ...articles].map((a) => (
						<ArticleCard key={a.id ?? a.title} article={a} classNames="mt-8" />
					))}
				</div>
			</section>
		</>
	);
};

export default Index;
