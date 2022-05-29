/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      name
      content
      productRating
      userID
      reviewRating
      createdAt
      updatedAt
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        content
        productRating
        userID
        reviewRating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
