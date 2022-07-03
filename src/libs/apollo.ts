import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    // uri: "https://countries.trevorblades.com",
    uri: "http://13.215.229.253:8055/graphql",
    cache: new InMemoryCache(),
});

export default client;
