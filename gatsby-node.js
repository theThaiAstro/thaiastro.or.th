const path = require('path');
const { ARTICLES, AUTHORS, NEWS } = require('./src/constants/SourceInstance');

exports.createPages = async function ({ actions, graphql, reporter }) {
	const { data, errors } = await graphql(`
		{
			everyMdx: allMdx(filter: { fields: { sourceInstanceName: { ne: "authors" } } }) {
				edges {
					node {
						id
						fields {
							slug
						}
					}
				}
			}
			everyAuthor: allMdx {
				group(field: frontmatter___authors) {
					fieldValue
				}
			}
		}
	`);

	if (errors) reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');

	const postComponent = path.resolve('./src/templates/Post/Post.tsx');
	const authorComponent = path.resolve('./src/templates/Author/Author.tsx');

	data.everyMdx.edges.forEach(({ node }) => {
		const { id, fields } = node;
		const { slug, sourceInstanceName } = fields;

		// TODO: Selectively resolve template based on the sourceInstanceName
		// const component = sourceInstanceName === ARTICLES ?

		actions.createPage({
			path: slug,
			component: postComponent,
			context: { id },
		});
	});

	data.everyAuthor.group.forEach((author) => {
		actions.createPage({
			path: `authors/${author.fieldValue}`,
			component: authorComponent,
			context: {
				author: author.fieldValue,
			},
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
			categories: [String]
			tags: [String]
			authors: [String]
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

	const { path, sourceInstanceName } = getData(node);

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
		const datePath = date.split('T')[0].split('-').slice(0, 2).join('/');
		const { name, sourceInstanceName } = getNode(node.parent);

		const suffix = (() => {
			if (slug) return slug;
			if (sourceInstanceName === ARTICLES) return name;
			if (sourceInstanceName === AUTHORS) return name;
			if (sourceInstanceName === NEWS) return `${datePath}/${name}`;
			return '';
		})();

		return {
			path: `${sourceInstanceName}/${suffix}`,
			sourceInstanceName,
		};
	}
};
