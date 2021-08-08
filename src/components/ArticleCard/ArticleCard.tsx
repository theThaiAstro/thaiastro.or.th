import React from 'react';
import cx from 'classnames';

import { DotSeparator } from '../../constants/Separator';
import { Node } from '../../models/PostModel';
import { formatDate } from '../../utils/dateUtils';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

import './ArticleCard.scss';
import { getWordForSourceInstanceName } from '../../utils/sourceInstanceUtils';

type Props = {
	node: Node;
	variant?: 'highlight' | 'vertical' | 'normal' | 'compact' | 'text';
	dictatorClassName?: string;
	className?: string;
};

const ArticleCard: React.FC<Props> = ({ className, dictatorClassName, node, variant: _variant }) => {
	const { author, date, title, featuredImage: _featuredImage } = node.frontmatter;
	const { sourceInstanceName, slug } = node.fields;

	const MetaData = () => (
		<div className="Metadata">
			<span className="Author">{author}</span>
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

export default ArticleCard;
