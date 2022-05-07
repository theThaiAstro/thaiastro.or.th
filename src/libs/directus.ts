export {}

// Cannot use Directus SDK because of type error
// 'ReactElement<any, any> | null' is not a valid JSX element.

// import { Directus } from '@directus/sdk';

// const directus = new Directus('https://lxvem31x.directus.app');

// export async function get(item: string, query: {} = {}) {
// 	const results = await directus.items(item).readByQuery(query);
// 	console.log(results);
// 	return {
// 		meta: results.meta,
// 		results: results.data,
// 	};
// 	// console.log({
// 	// 	items: publicData.data,
// 	// 	total: publicData.meta!.total_count,
// 	// });
// }

// export default directus;
