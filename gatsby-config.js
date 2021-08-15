const { ARTICLES, IMAGES, NEWS } = require('./src/constants/SourceInstance');

module.exports = {
	pathPrefix: (process.env.NODE_ENV === 'production' && '/thaiastro.or.th') || undefined,
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'The Thai Astronomical Society',
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sass',
		'gatsby-remark-images',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				extensions: ['.mdx', '.md'],
				gatsbyRemarkPlugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 2000,
						},
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-sharp',
			options: {
				defaults: {
					quality: 100,
					formats: ['auto', 'webp', 'avif'],
					placeholder: 'blurred',
				},
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: ARTICLES,
				path: `${__dirname}/src/content/${ARTICLES}`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: NEWS,
				path: `${__dirname}/src/content/${NEWS}`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: IMAGES,
				path: `${__dirname}/src/content/${IMAGES}`,
			},
		},
	],
};
