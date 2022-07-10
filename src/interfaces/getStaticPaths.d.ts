export interface PostForGetStaticPaths {
	id: string;
	slug: string;
	post_type: {
		slug: string;
	};
}

export interface AllPostsForGetStaticPaths {
	posts: PostForGetStaticPaths[];
}

export interface GenericListResults {
	id: number;
	slug: string;
	name: string;
	name_th: string;
}

export interface AllPostTypesForGetStaticPaths {
	post_types: GenericListResults[];
}

export interface AllCategoriesForGetStaticPaths {
	categories: GenericListResults[];
}
