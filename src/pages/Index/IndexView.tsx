import { Link } from 'gatsby';
import * as React from 'react';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import GlobalLayout from '../../layout/GlobalLayout/GlobalLayout';
import { GraphQLResult } from '../../models/PostModel';
import FeaturedStory from './components/FeaturedStory';

import './IndexView.scss';

export interface IndexViewProps {
	data: {
		featuredPost: GraphQLResult;
		latestStories: GraphQLResult;
	};
}

const IndexView: React.FC<IndexViewProps> = ({ data }) => {
	const { edges: featuredPosts } = data.featuredPost;
	const { edges: latestStories } = data.latestStories;

	const types = ['text', 'vertical', 'normal', 'compact', 'highlight'];

	const LatestStoriesSection = () => {
		const variantOrders = ['highlight'];

		return (
			<section className="LatestStories">
				{latestStories.map(({ node }, i) => (
					<Link className="ArticleLink" to={node.fields.slug}>
						<ArticleCard key={node.id} node={node} />
					</Link>
				))}
			</section>
		);
	};

	return (
		<GlobalLayout noDefaultMargin>
			<main id="MainPage">
				<LatestStoriesSection />
			</main>
		</GlobalLayout>
	);
};

export default IndexView;
