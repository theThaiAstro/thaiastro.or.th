import SourceInstanceName from '../constants/SourceInstance';

export interface PostModel {
	body: string;
	frontmatter: Frontmatter;
}

export interface GraphQLResult {
	edges: Edge[];
}

export interface Edge {
	node: Node;
}

export interface Node {
	id: string;
	frontmatter: Frontmatter;
	fields: Fields;
}

export interface Frontmatter {
	date: Date;
	featuredImage: any;
	title: string;
	author?: string[];
	categories?: string[];
	isFeatured?: boolean;
	isUnpublished?: boolean;
	tags?: string[];
}

export interface Fields {
	slug: string;
	sourceInstanceName: keyof typeof SourceInstanceName;
}
