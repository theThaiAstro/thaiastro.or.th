import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { baseUrl } from '@constants/urls';

console.log(`Making requests to ${baseUrl}`);

const isDebug = process.env.NODE_ENV === 'development';

async function loggingFetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
	const body = JSON.parse(init?.body ?? '{}');

	console.log(init, input);

	const start = Date.now();
	console.log(`${new Date().toISOString().slice(-13)} 📡 Sending ${body.operationName} request`);
	const response = await fetch(input, init);
	console.log(`${new Date().toISOString().slice(-13)} 📡 Received ${body.operationName} response in ${Date.now() - start}ms`);

	return {
		...response,

		async text() {
			const start = Date.now();
			const result = await response.text();
			console.log(
				`${new Date().toISOString().slice(-13)} ⚙️  Read ${body.operationName} response body in ${Date.now() - start}ms (${result.length} bytes)`
			);
			return result;
		},
	};
}

const client = new ApolloClient({
	uri: `${baseUrl}/graphql`,
	cache: new InMemoryCache(),
	link: isDebug ? new HttpLink({ fetch: loggingFetch, uri: `${baseUrl}/graphql` }) : undefined,
});

export default client;
