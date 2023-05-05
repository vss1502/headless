import { gql } from "@apollo/client";

export const getAllPosts = gql `
query getAllPosts {
    posts {
      nodes {
        date
        slug
        title
        excerpt(format: RENDERED)
        featuredImage {
          node {
            mediaDetails {
              file
              sizes {
                sourceUrl
                width
                height
              }
            }
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;