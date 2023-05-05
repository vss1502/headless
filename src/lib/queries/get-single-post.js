import { gql } from "@apollo/client";

export const getSinglePost = gql `
query getSinglePost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      content(format: RENDERED)
      date
      excerpt(format: RENDERED)
      modified
      slug
      title(format: RENDERED)
      featuredImage {
        node {
          mediaDetails {
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
  }
`;