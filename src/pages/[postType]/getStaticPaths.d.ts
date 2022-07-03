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
