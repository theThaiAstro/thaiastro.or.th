interface Article {
	id: number;
	slug: string;
	title: string;
	date: string;
	author: string;
	category: string[];
    tags: string[];
	excerpt?: string;
	image?: string;
}
