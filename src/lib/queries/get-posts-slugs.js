import { gql } from "@apollo/client";

export const getPostSlugs = gql `
query getPostSlugs {
  posts {
    nodes {
      slug
    }
  }
}
`;