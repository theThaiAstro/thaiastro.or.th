const path = require('path');
const { ARTICLES, NEWS } = require('./src/constants/SourceInstance');

exports.createPages = async function ({ actions, graphql, reporter }) {
	const { data, errors } = await graphql(`
		{
			everyAuthor: allAuthor {
				nodes {
					username
					fields {
						slug
					}
				}
			}
			everyCategory: allMdx {
				group(field: frontmatter___categories___category) {
					category: fieldValue
					totalCount
				}
			}
			everyMdx: allMdx {
				nodes {
					id
					fields {
						slug
					}
				}
			}
			everySourceInstance: allMdx {
				group(field: fields___sourceInstanceName) {
					sourceInstance: fieldValue
					totalCount
				}
			}
			everyTag: allMdx {
				group(field: frontmatter___tags___tag) {
					tag: fieldValue
					totalCount
				}
			}
		}
	`);

	if (errors) reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');

	const sourceInstanceComponent = path.resolve('./src/templates/SourceInstance/SourceInstance.tsx');
	const authorComponent = path.resolve('./src/templates/Author/Author.tsx');
	const categoryComponent = path.resolve('./src/templates/Category/Category.tsx');
	const tagComponent = path.resolve('./src/templates/Tag/Tag.tsx');
	const postComponent = path.resolve('./src/templates/Post/Post.tsx');

	data.everyAuthor.nodes.forEach((author) => {
		const { slug } = author.fields;
		actions.createPage({
			path: slug,
			component: authorComponent,
			context: {
				author: author.username,
			},
		});
	});

	data.everyCategory.group.forEach((category) => {
		actions.createPage({
			path: `/categories/${category.category}`,
			component: categoryComponent,
			context: {
				category: category.category,
			},
		});
	});

	data.everyTag.group.forEach((tag) => {
		actions.createPage({
			path: `/tags/${tag.tag}`,
			component: tagComponent,
			context: {
				tag: tag.tag,
			},
		});
	});

	data.everySourceInstance.group.forEach((sourceInstance) => {
		actions.createPage({
			path: `/${sourceInstance.sourceInstance}`,
			component: sourceInstanceComponent,
			context: {
				sourceInstanceName: sourceInstance.sourceInstance,
			},
		});
	});

	data.everyMdx.nodes.forEach((node) => {
		const { id, fields } = node;
		const { slug } = fields;

		// TODO: Selectively resolve template based on the sourceInstanceName
		// const component = sourceInstanceName === ARTICLES ?
		actions.createPage({
			path: slug,
			component: postComponent,
			context: { id },
		});
	});
};

exports.createSchemaCustomization = ({ actions, schema }) => {
	const { createFieldExtension, createTypes } = actions;

	// FileByImagesPath
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
			categories: [Category] @link(by: "category")
			tags: [Tag] @link(by: "tag")
			authors: [Author] @link(by: "username")
			featuredImage: File @fileByImagesPath
			isFeatured: Boolean
			isUnpublished: Boolean
			slug: String
		}

		type Author implements Node {
			username: String!
			name: Name!
			bio: String!
		}

		type Name {
			th: String!
			en: String!
		}

		type Category implements Node {
			category: String!
			name_th: String!
			name_en: String!
			description: String
		}

		type Tag implements Node {
			tag: String!
			name_th: String!
			name_en: String!
			description: String
		}
	`);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	const toCreateNodeTypes = ['Author', 'Category', 'Mdx', 'Tag'];
	if (!toCreateNodeTypes.includes(node.internal.type)) return;

	const { path, sourceInstanceName } = getNodeData(node);

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

	function getNodeData(node) {
		const dataBuilder = (path, sourceInstanceName) => ({ path, sourceInstanceName });

		if (node.internal.type === 'Author') return dataBuilder(`authors/${node.username}`, 'authors');
		if (node.internal.type === 'Category') return dataBuilder(`categories/${node.category}`, 'categories');
		if (node.internal.type === 'Tag') return dataBuilder(`tags/${node.tag}`, 'tags');
		if (node.internal.type === 'Mdx') {
			const { date, slug } = node?.frontmatter ?? {};
			// TODO: Do we need only year?
			const datePath = date?.split('T')[0].split('-').slice(0, 2).join('/');
			const parentNode = getNode(node.parent);
			const { name, sourceInstanceName } = parentNode;

			const suffix = (() => {
				if (slug) return slug;
				if (sourceInstanceName === ARTICLES) return name;
				if (sourceInstanceName === NEWS) return `${datePath}/${name}`;
				return name;
			})();

			return dataBuilder(`${sourceInstanceName}/${suffix}`, sourceInstanceName);
		}
	}
};
