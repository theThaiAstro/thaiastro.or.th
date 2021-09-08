import { Fields } from './Fields';

export interface Author {
	id: string;
	username: string;
	bio: string;
	fields: Fields;
	name: {
		th: string;
		en: string;
	};
}
