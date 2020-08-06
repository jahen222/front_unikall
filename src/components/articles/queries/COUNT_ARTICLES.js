import gql from "graphql-tag";

const COUNT_ARTICLES = gql` query articlesCount {
    articlesCount
  }
`;

export default COUNT_ARTICLES;