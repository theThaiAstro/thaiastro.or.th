const path = require('path');
const { ARTICLES, NEWS } = require('./src/constants/SourceInstance');

exports.createPages = async function ({ actions, graphql, reporter }) {
	const { data, errors } = await graphql(`
		query {
			allMdx {
				edges {
					node {
						id
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	if (errors) reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');

	data.allMdx.edges.forEach(({ node }) => {
		const { id, fields } = node;
		const { slug, sourceInstanceName } = fields;

		// TODO: Selectively resolve template based on the sourceInstanceName
		// const component = sourceInstanceName === ARTICLES ?

		actions.createPage({
			path: slug,
			component: path.resolve('./src/templates/Post/Post.tsx'),
			context: { id },
		});
	});
};

exports.createSchemaCustomization = ({ actions, schema }) => {
	const { createFieldExtension, createTypes, printTypeDefinitions } = actions;

	createFieldExtension({
		name: 'fileByImagesPath',
		extend: () => ({
			resolve: (src, args, context, info) => {
				const partialPath = src.featuredImage;
				if (!partialPath) return null;

				const filePath = path.join(__dirname, 'src/content/images', partialPath);
				const fileNode = context.nodeModel.runQuery({
					firstOnly: true,
					type: 'File',
					query: {
						filter: {
							absolutePath: {
								eq: filePath,
							},
						},
					},
				});

				return fileNode || null;
			},
		}),
	});

	createTypes(`
		type Mdx implements Node {
			frontmatter: Frontmatter
		}

		type Frontmatter @dontInfer {
			title: String!
			date: Date
			categories: [String!]
			tags: [String!]
			author: [String!]
			featuredImage: File @fileByImagesPath
			isFeatured: Boolean
			isUnpublished: Boolean
			slug: String
		}
	`);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type !== 'Mdx') return;

	const [path, sourceInstanceName] = getData(node);

	createNodeField({
		node,
		name: 'slug',
		value: `/${path}`,
	});

	createNodeField({
		node,
		name: 'sourceInstanceName',
		value: sourceInstanceName,
	});

	function getData(node) {
		const { date, slug } = node.frontmatter;
		// TODO: Do we need only year?
		const datePath = date.split('T')[0];
		const { name, sourceInstanceName } = getNode(node.parent);

		let suffix = '';
		if (slug) suffix = slug;
		else if (sourceInstanceName === ARTICLES) suffix = name;
		else if (sourceInstanceName === NEWS) suffix = `${datePath}/${name}`;

		return [`${sourceInstanceName}/${suffix}`, sourceInstanceName];
	}
};
