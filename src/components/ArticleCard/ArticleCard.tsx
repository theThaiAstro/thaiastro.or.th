import cx from 'classnames';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { DotSeparator } from '../../constants/Separator';
import { Node } from '../../models/PostModel';
import { formatDate } from '../../utils/dateUtils';
import { getWordForSourceInstanceName } from '../../utils/sourceInstanceUtils';
import Badge from '../Badge/Badge';

import './ArticleCard.scss';

type Props = {
	node: Node;
	variant?: 'highlight' | 'vertical' | 'normal' | 'compact' | 'text';
	dictatorClassName?: string;
	className?: string;
};

const ArticleCard: React.FC<Props> = ({ className, dictatorClassName, node, variant: _variant }) => {
	const { authors, date, title, featuredImage: _featuredImage } = node.frontmatter;
	const { sourceInstanceName, slug } = node.fields;

	const MetaData = () => (
		<div className="Metadata">
			<span className="Author">{authors}</span>
			&nbsp;
			{DotSeparator}
			&nbsp;
			<span className="Date">{formatDate(date, 'short')}</span>
		</div>
	);

	const featuredImage = getImage(_featuredImage);
	const [variant, aspectRatio] = getVarinatClassName(_variant);

	return (
		<div className={cx(aspectRatio && 'ArticleCardRatioDictator', dictatorClassName)}>
			{aspectRatio && <svg viewBox={`0 0 ${aspectRatio}`}></svg>}
			<div className={cx('ArticleCard', variant, className)}>
				<MetaData />
				<div className="FeaturedImage">
					{featuredImage ? (
						<GatsbyImage className="FeaturedImageContainer" alt={title} image={featuredImage} />
					) : (
						<StaticImage src="../../assets/images/placeholder-featuredImage.jpg" alt={title} />
					)}
				</div>
				<div className="Title">{title}</div>
				<div className="SourceInstanceName">{getWordForSourceInstanceName(sourceInstanceName)}</div>
			</div>
		</div>
	);

	function getVarinatClassName(variant: Props['variant']): [string?, string?] {
		const goldenRatio = '1618 1000';
		const wideRatio = '1618 500';
		const ultraWideRatio = '1618 250';
		const noRatio = undefined;
		const overriding = undefined;

		// prettier-ignore
		switch (variant) {
			case 'highlight': return [overriding && 'Variant__Highlight', goldenRatio];
			case 'vertical': return [overriding && 'Variant__Vertical', goldenRatio];
			case 'normal': return [overriding && 'Variant__Normal', ultraWideRatio];
			case 'compact': return [overriding && 'Variant__Compact', ultraWideRatio];
			case 'text': return [overriding && 'Variant__Text', noRatio];
			default: return [overriding && 'Variant__Normal', ultraWideRatio];
		}
	}
};

type Variant = 'full' | 'regular' | 'compact' | 'text';

type FlexibleArticleCardProps = {
	authors: string[];
	className?: string;
	date: Date;
	excerpt?: string;
	featuredImage?: any;
	sourceInstanceName: Node['fields']['sourceInstanceName'] | string;
	title: string;
	variant: Variant;
	desktop?: Variant;
	tablet?: Variant;
	mobile?: Variant;
};

const FlexibleArticleCard: React.FC<FlexibleArticleCardProps> = (props) => {
	const wideRatio = '1618 500';
	const ultraWideRatio = '1618 250';

	const { authors, className, date, excerpt, featuredImage, sourceInstanceName, title } = props;

	const SvgDictator = ({ ratio }: { ratio: string }) => <svg viewBox={`0 0 ${ratio}`}></svg>;

	const Excerpt = () => (excerpt ? <div className="Excerpt">{excerpt}</div> : null);

	const MetaData = () => (
		<div className="Metadata">
			<span className="Author">{authors?.[0] ?? 'สมาคมดาราศาสตร์ไทย'}</span>
			&nbsp;
			{DotSeparator}
			&nbsp;
			<span className="Date">{formatDate(date, 'short')}</span>
		</div>
	);

	const FeatureImage = () => (
		<div className="FeaturedImage">
			{featuredImage ? (
				<GatsbyImage className="FeaturedImageContainer" alt={title} image={featuredImage} />
			) : (
				<StaticImage
					className="FeaturedImageContainer"
					src="../../assets/images/placeholder-featuredImage.jpg"
					alt={title}
				/>
			)}
		</div>
	);

	const StoryType = () => (
		<div className="SourceInstanceName">{getWordForSourceInstanceName(sourceInstanceName)}</div>
	);

	const Title = () => <div className="Title">{title}</div>;

	const VariantFull = () => (
		<div className="FlexibleArticleCard--Full">
			<SvgDictator ratio={ultraWideRatio} />
			<div className="ArticleCardContent">
				<Badge className="Badge" text={getWordForSourceInstanceName(sourceInstanceName)!} />
				<FeatureImage />
				<MetaData />
				<Title />
			</div>
		</div>
	);

	const VariantRegular = () => (
		<div className="FlexibleArticleCard--Regular">
			<SvgDictator ratio={ultraWideRatio} />
			<div className="ArticleCardContent">
				<FeatureImage />
				<div className="Text">
					<StoryType />
					<MetaData />
					<Title />
					<Excerpt />
				</div>
			</div>
		</div>
	);

	const VariantCompact = () => <div className={cx('FlexibleArticleCard--Compact')}>Compact</div>;
	const VariantText = () => <div className={cx('FlexibleArticleCard--Text')}>Text</div>;

	const ACard = ({ variant }: { variant?: Variant }) => {
		const _variant = variant ?? props.variant;
		if (_variant === 'full') return <VariantFull />;
		if (_variant === 'compact') return <VariantCompact />;
		if (_variant === 'text') return <VariantText />;
		return <VariantRegular />;
	};

	const Desktop = () => <ACard variant={props.desktop} />;
	const Tablet = () => <ACard variant={props.tablet} />;
	const Phone = () => <ACard variant={props.mobile} />;

	return (
		<div className={cx('FlexibleArticleCard', className)}>
			<div className="Desktop">
				<Desktop />
			</div>
			<div className="Tablet">
				<Tablet />
			</div>
			<div className="Phone">
				<Phone />
			</div>
		</div>
	);
};

export default ArticleCard;

export { ArticleCard, FlexibleArticleCard };
