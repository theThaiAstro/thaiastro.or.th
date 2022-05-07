import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';

import ArticleCard, { FlexibleArticleCard } from '../../components/ArticleCard/ArticleCard';
import Typography from '../../components/Typography/Typography';
import GlobalLayout from '../../layout/GlobalLayout/GlobalLayout';
import { Mdx } from '../../models/Mdx';

import './IndexView.scss';

export interface IndexViewProps {
	latestStories: Mdx[];
	news: Mdx[];
	articles: Mdx[];
}

const IndexView: React.FC<IndexViewProps> = (props) => {
	// const { edges: featuredPosts } = data.featuredPost;

	const latestStories = props?.latestStories ?? [];
	const latestNews = props?.news ?? [];
	const latestArticles = props?.articles ?? [];

	const alreadyShownStoriesIds = latestStories.map(({ id }) => id);

	const hasNotBeenShown = ({ id }: Mdx) => !alreadyShownStoriesIds.includes(id);
	const firstFive = (_: any, i: number) => i < 5;
	const toArticleCard = (node: Mdx) => (
		<Link key={node.id} className="ArticleLink" to={node.fields.slug}>
			<ArticleCard node={node} />
		</Link>
	);

	const LatestStoriesSection = () => {
		return (
			<section className="LatestStories" style={{ marginTop: '6rem', padding: 0 }}>
				{latestStories.map((a, i) => (
					<FlexibleArticleCard
						key={a.frontmatter.title}
						variant={[3, 4, 5].includes(i) ? 'regular' : 'full'}
						authors={a.frontmatter.authors}
						date={a.frontmatter.date}
						featuredImage={a.frontmatter.featuredImage}
						title={a.frontmatter.title}
						sourceInstanceName={a.fields.sourceInstanceName}
					/>
				))}
			</section>
		);
		// return <section className="LatestStories">{latestStories.map(toArticleCard)}</section>;
	};

	const NewsSection = () => {
		return (
			<section className="SectionContainer">
				<Typography type="heading" level={2} className="Heading">
					ข่าว
				</Typography>
				<div className="News">{latestNews.filter(hasNotBeenShown).filter(firstFive).map(toArticleCard)}</div>
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
					{latestArticles.filter(hasNotBeenShown).filter(firstFive).map(toArticleCard)}
				</div>
			</section>
		);
	};

	return (
		<GlobalLayout noDefaultMargin>
			<main id="MainPage">
				<LatestStoriesSection />
				{/* <NewsSection />
				<ArticlesSection /> */}
			</main>
		</GlobalLayout>
	);
};

export default IndexView;
