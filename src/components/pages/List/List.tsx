import React from 'react';
import cx from 'classnames';

import { LinkedPostCard } from '@components/PostCard/PostCard';
import { GenericBlock } from '@constants/classNames';
import Article from '@interfaces/Article';

type Props = {
	articles: Article[];
};

const List: React.FC<Props> = (props: Props) => {
	const { articles } = props;

	// const HeroArticle = () => <div>{!!articles.length && <LinkedHeroPostCard post={articles[0]} />}</div>;

	return (
		<>
			<section className={cx(GenericBlock, 'mt-12 lg:px-0')}>
				{/* <HeroArticle /> */}
				<div className="md:grid md:grid-cols-3 md:gap-x-8">
					{[...articles, ...articles, ...articles, ...articles, ...articles].map(
						(a, i) => a && <LinkedPostCard key={`${a.id}-${i}`} post={a} linkClassNames="mt-8" />
					)}
				</div>
			</section>
		</>
	);
};

export default List;
