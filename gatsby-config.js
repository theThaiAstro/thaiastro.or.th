const { ARTICLES, NEWS } = require('./src/constants/SourceInstance');

module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'The Thai Astronomical Society',
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sass',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
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
	],
};
