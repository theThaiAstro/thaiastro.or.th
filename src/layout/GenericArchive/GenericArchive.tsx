import { Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';

import { FlexibleArticleCard } from '../../components/ArticleCard/ArticleCard';
import Typography from '../../components/Typography/Typography';
import SourceInstanceName from '../../constants/SourceInstance';
import ArchivePost from '../../models/ArchivePost';
import GlobalLayout from '../GlobalLayout/GlobalLayout';

import './GenericArchive.scss';

type Props = {
	Header: () => React.ReactElement;
	posts: ArchivePost[];
};

const GenericArchive: React.FC<Props> = (props) => {
	const { Header, posts } = props;

	return (
		<GlobalLayout>
			<main id="GenericArchive">
				<article id="GenericArchiveContent">
					<Header />
					<Typography type="heading" level={1}>
						Something
					</Typography>
					{posts.map((p) => (
						<Link key={p.id} to={p.fields.slug} className="ArticleCard">
							<FlexibleArticleCard
								authors={p.frontmatter.authors}
								title={p.frontmatter.title}
								sourceInstanceName={p.fields.sourceInstanceName}
								featuredImage={getImage(p.frontmatter.featuredImage)}
								date={p.frontmatter.date}
								variant="regular"
								excerpt={p.excerpt}
							/>
						</Link>
					))}
				</article>
			</main>
		</GlobalLayout>
	);
};

export default GenericArchive;
