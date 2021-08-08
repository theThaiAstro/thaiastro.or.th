import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Node } from '../../../models/PostModel';

const FeaturedStory: React.FC<Node<'title' | 'featuredImage'>> = ({ node }) => {
	const { frontmatter } = node;
	const featuredImage = getImage(frontmatter.featuredImage);

	if (!featuredImage) return null;

	return (
		<section>
			<GatsbyImage image={featuredImage} alt={frontmatter.title} />
		</section>
	);
};

export default FeaturedStory;
