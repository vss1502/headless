import {ApolloClient, InMemoryCache, HttpLink} from "@apollo/client";



const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};


const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
  });

  export default client;