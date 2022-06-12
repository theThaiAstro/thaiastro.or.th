import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import PostCard, { LinkedHeroPostCard } from '@components/PostCard/PostCard';
import { GenericBlock } from '@constants/classNames';
import { mockArticles } from '@data/mockData';

import { gql } from '@apollo/client';
import client from '@libs/apollo';
import Article from '@interfaces/Article';
import { loadData } from '@helpers/apis/index/loadData';

const Index: React.FC = () => {
	const [articles, setArticles] = useState<Article[]>([]);

	useEffect(() => {
		loadData(setArticles);
	}, []);

	const HeroArticle = () => <div>{articles.length && <LinkedHeroPostCard post={articles[0]} />}</div>;

	return (
		<>
			<section className={cx(GenericBlock, 'mt-12 lg:px-0')}>
				<HeroArticle />
				<div className="md:grid md:grid-cols-3 md:gap-x-8">
					{articles.map((a, i) => a && <PostCard key={`${a.id}-${i}`} post={a} classNames="mt-8" />)}
				</div>
			</section>
		</>
	);
};

export default Index;
