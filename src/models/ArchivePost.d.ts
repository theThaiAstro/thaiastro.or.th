import SourceInstanceName from '../constants/SourceInstance';

export default interface ArchivePost {
	id: string;
	fields: {
		slug: string;
		sourceInstanceName: keyof typeof SourceInstanceName;
	};
	excerpt: string;
	frontmatter: {
		authors: string[];
		date: Date;
		featuredImage: any;
		isUnpublished: string;
		title: string;
	};
}
