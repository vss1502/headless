import {ApolloClient, InMemoryCache, HttpLink} from "@apollo/client";


const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
    cache: new InMemoryCache(),
  });

  export default client;