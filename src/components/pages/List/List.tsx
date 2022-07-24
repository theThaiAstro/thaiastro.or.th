import React from 'react';
import cx from 'classnames';

import { LinkedPostCard } from '@components/PostCard/PostCard';
import { GenericBlock } from '@constants/classNames';
import Article from '@interfaces/Article';

type Props = {
	title?: string;
	articles: Article[];
};

const List: React.FC<Props> = (props: Props) => {
	const { articles } = props;

	// const HeroArticle = () => <div>{!!articles.length && <LinkedHeroPostCard post={articles[0]} />}</div>;

	if (!articles?.length) return null;

	return (
		<>
			<section className={cx(GenericBlock, props.title && 'mt-24', 'lg:px-0')}>
				{props.title && <h1 className={cx('font-display text-6xl font-medium')}>{props.title}</h1>}

				{/* <HeroArticle /> */}

				<div className="mt-8 md:grid md:grid-cols-3 md:gap-x-8">
					{[...articles, ...articles, ...articles, ...articles, ...articles].map(
						(a, i) => a && <LinkedPostCard key={`${a.id}-${i}`} post={a} linkClassNames="mt-8" classNames='hover:scale-[1.0625] transition ease-out' />
					)}
				</div>
			</section>
		</>
	);
};

export default List;
