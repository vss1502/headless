import { gql } from "@apollo/client";

export const getHomePage = gql `
query getHomeRage {
    pageBy(uri: "/") {
      isFrontPage
      blocks {
        attributesJSON
        dynamicContent
        originalContent
        saveContent
      }
      title
      slug
    }
  }
`;