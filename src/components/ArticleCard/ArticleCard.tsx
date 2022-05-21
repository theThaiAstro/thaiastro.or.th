import React from 'react';
import cx from 'classnames';

import Image from '@components/Image/Image';
import trimSentence from '@helpers/sentenceTrimmer';

type Props = {
	article: Omit<Article, 'content'>;
	classNames?: string;
	hLevel?: 'h2' | 'h3';
};

type HeadingProps = JSX.IntrinsicElements['h1'] & {
	children?: React.ReactNode;
	h?: Props['hLevel'];
};

const Heading = (props: HeadingProps) => {
	const H = props.h ?? 'h2';
	return <H {...props} />;
};

const ArticleCard: React.FC<Props> = (props: Props) => (
	<div className={cx('w-full', props.classNames)}>
		<div>
			<div className={cx('relative aspect-video h-full w-full')}>
				<Image alt={props.article.title} src="https://placekitten.com/g/1000/1000" layout="fill" objectFit="cover" unoptimized={true} />
			</div>
		</div>
		<div className="mt-6">
			<Heading className="font-['IBM_Plex_Sans_Thai'] text-3xl font-semibold">{props.article.title}</Heading>
			<div className={cx('mt-2 overflow-hidden')}>{trimSentence(props.article.excerpt, true)}</div>
		</div>
	</div>
);

export const HeroArticleCard: React.FC<Props> = (props: Props) => (
	<div className={cx('', 'md:flex md:h-80')}>
		<div className={cx('relative aspect-video h-full w-full', 'md:w-2/5', 'lg:w-full')}>
			<Image alt={props.article.title} src="https://placekitten.com/g/1000/1000" layout="fill" objectFit="cover" unoptimized={true} />
		</div>
		<div className={cx('mt-6', 'flex-grow md:mt-0 md:ml-8')}>
			<Heading className="font-['IBM_Plex_Sans_Thai'] text-3xl font-semibold md:text-4xl md:leading-[3rem]">{props.article.title}</Heading>
			<div className={cx('', 'mt-2 overflow-hidden', 'md:mt-4')}>{trimSentence(props.article.excerpt, true)}</div>
		</div>
	</div>
);

export default ArticleCard;
