import { ApolloClient, InMemoryCache } from '@apollo/client';
import { baseUrl } from '@constants/urls';

console.log(`Making requests to ${baseUrl}`);

const client = new ApolloClient({
	uri: `${baseUrl}/graphql`,
	cache: new InMemoryCache(),
});

export default client;
