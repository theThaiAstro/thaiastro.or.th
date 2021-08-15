const { ARTICLES, IMAGES, NEWS } = require('./src/constants/SourceInstance');

module.exports = {
	pathPrefix: (process.env.NODE_ENV === 'production' && '/thaiastro.or.th') || undefined,
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'The Thai Astronomical Society',
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: IMAGES,
				path: `${__dirname}/src/content/${IMAGES}`,
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
						resolve: 'gatsby-remark-relative-images',
						options: {
							staticFolderName: 'src/content/images',
						},
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 2000,
							showCaptions: ['title'],
							quality: 100,
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
	],
};
