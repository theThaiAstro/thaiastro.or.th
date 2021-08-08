import { Link } from 'gatsby';
import * as React from 'react';

import ArticleCard from '../../components/ArticleCard/ArticleCard';
import Typography from '../../components/Typography/Typography';
import GlobalLayout from '../../layout/GlobalLayout/GlobalLayout';
import { GraphQLResult, Node } from '../../models/PostModel';
import './IndexView.scss';
import FeaturedStory from './components/FeaturedStory';

type GraphQLFileResult = {
	edges: { node: { childMdx: Node } }[];
};

export interface IndexViewProps {
	data: {
		featuredPost: GraphQLResult;
		latestStories: GraphQLResult;
		news: GraphQLFileResult;
		articles: GraphQLFileResult;
	};
}

const IndexView: React.FC<IndexViewProps> = ({ data }) => {
	const { edges: featuredPosts } = data.featuredPost;
	const { edges: latestStories } = data.latestStories;
	const { edges: latestNews } = data.news;
	const { edges: latestArticles } = data.articles;

	const types = ['text', 'vertical', 'normal', 'compact', 'highlight'];
	const alreadyShownStoriesIds = latestStories.map(({ node }) => node.id);

	const LatestStoriesSection = () => {
		const variantOrders = ['highlight'];

		return (
			<section className="LatestStories">
				{latestStories.map(({ node }) => (
					<Link key={node.id} className="ArticleLink" to={node.fields.slug}>
						<ArticleCard node={node} />
					</Link>
				))}
			</section>
		);
	};

	const NewsSection = () => {
		return (
			<section className="SectionContainer">
				<Typography type="heading" level={2} className="Heading">
					ข่าว
				</Typography>
				<div className="News">
					{latestNews
						.filter(({ node }) => !alreadyShownStoriesIds.includes(node.childMdx.id))
						.map(({ node }) => (
							<Link key={node.childMdx.id} className="ArticleLink" to={node.childMdx.fields.slug}>
								<ArticleCard node={node.childMdx} />
							</Link>
						))}
				</div>
			</section>
		);
	};

	const ArticlesSection = () => {
		return (
			<section className="SectionContainer">
				<Typography type="heading" level={2} className="Heading">
					บทความ
				</Typography>
				<div className="Articles">
					{latestArticles
						.filter(({ node }) => !alreadyShownStoriesIds.includes(node.childMdx.id))
						.map(({ node }) => (
							<Link key={node.childMdx.id} className="ArticleLink" to={node.childMdx.fields.slug}>
								<ArticleCard node={node.childMdx} />
							</Link>
						))}
				</div>
			</section>
		);
	};

	return (
		<GlobalLayout noDefaultMargin>
			<main id="MainPage">
				<LatestStoriesSection />
				<NewsSection />
				<ArticlesSection />
			</main>
		</GlobalLayout>
	);
};

export default IndexView;
