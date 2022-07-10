import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import { getAllPosts } from '@apis/postsApi';
import { LinkedPostCard, LinkedHeroPostCard } from '@components/PostCard/PostCard';
import { GenericBlock } from '@constants/classNames';
import Article from '@interfaces/Article';

const Index: React.FC = () => {
	const [articles, setArticles] = useState<Article[]>([]);

	useEffect(() => {
		(async () => {
			setArticles(await getAllPosts());
		})();
	}, []);

	const HeroArticle = () => <div>{!!articles.length && <LinkedHeroPostCard post={articles[0]} />}</div>;

	return (
		<>
			<section className={cx(GenericBlock, 'mt-12 lg:px-0')}>
				<HeroArticle />
				<div className="md:grid md:grid-cols-3 md:gap-x-8">
					{[...articles, ...articles, ...articles, ...articles, ...articles].map(
						(a, i) => a && <LinkedPostCard key={`${a.id}-${i}`} post={a} linkClassNames="mt-8" />
					)}
				</div>
			</section>
		</>
	);
};

export default Index;
