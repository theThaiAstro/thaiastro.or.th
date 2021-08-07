const { ARTICLES, NEWS, IMAGES } = require('./src/constants/SourceInstance');

module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'The Thai Astronomical Society',
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sass',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				extensions: ['.mdx', '.md'],
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
