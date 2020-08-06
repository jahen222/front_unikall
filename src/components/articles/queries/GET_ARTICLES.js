import gql from "graphql-tag";

const GET_ARTICLES = gql` query Articles($limit: Int, $start: Int) {
  articles(limit: $limit, start: $start, sort: "published_at:DESC") {
    id
    title
    content
    image {
      url
    }
    published_at
  }
}
`;

export default GET_ARTICLES;