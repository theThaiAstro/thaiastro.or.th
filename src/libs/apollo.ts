import { ApolloClient, InMemoryCache } from "@apollo/client";
import { baseUrl } from "@constants/urls";

const client = new ApolloClient({
    uri: `${baseUrl}/graphql`,
    cache: new InMemoryCache(),
});

export default client;
