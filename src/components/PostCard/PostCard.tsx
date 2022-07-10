import React from 'react';
import cx from 'classnames';

import Image from '@components/Image/Image';
import trimSentence from '@helpers/sentenceTrimmer';
import Article from '@interfaces/Article';
import getAsset from '@helpers/getAsset';
import Link from '@components/Link/Link';
import getLink from '@helpers/getLink';

type Props = {
	post: Article;
	classNames?: string;
	linkClassNames?: string;
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

const PostCard: React.FC<Props> = (props: Props) => (
	<div className={cx('w-full', props.classNames)}>
		<div>
			<div className={cx('relative aspect-video h-full w-full')}>
				<Image alt={props.post.title} src={getAsset(props.post.thumbnail?.id)} layout="fill" objectFit="cover" unoptimized={true} />
			</div>
		</div>
		<div className="mt-6">
			<Heading className="font-display text-3xl font-semibold">{props.post.title}</Heading>
			<div className={cx('mt-2 overflow-hidden')}>{trimSentence(props.post.excerpt ?? props.post.content, true)}</div>
		</div>
	</div>
);

export const HeroPostCard: React.FC<Props> = (props: Props) => (
	<div className={cx('', 'md:flex md:h-80')}>
		<div className={cx('relative aspect-video h-full w-full', 'md:w-2/5', 'lg:w-full')}>
			<Image alt={props.post.title} src={getAsset(props.post.thumbnail?.id)} layout="fill" objectFit="cover" unoptimized={true} />
		</div>
		<div className={cx('mt-6', 'flex-grow md:mt-0 md:ml-8')}>
			<Heading className="font-display text-3xl font-semibold md:text-4xl md:leading-[3rem]">{props.post.title}</Heading>
			<div className={cx('', 'mt-2 overflow-hidden', 'md:mt-4')}>{trimSentence(props.post.excerpt ?? props.post.content, true)}</div>
		</div>
	</div>
);

export const LinkedHeroPostCard = (props: Props) => (
	<Link link={getLink(props.post.postType.slug, props.post.slug)} classNames={props.linkClassNames}>
		<HeroPostCard {...props} />
	</Link>
);

export const LinkedPostCard = (props: Props) => (
	<Link link={getLink(props.post.postType.slug, props.post.slug)} classNames={props.linkClassNames}>
		<PostCard {...props} />
	</Link>
);

export default PostCard;
