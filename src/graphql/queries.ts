/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchReviews = /* GraphQL */ `
  query SearchReviews(
    $filter: SearchableReviewFilterInput
    $sort: [SearchableReviewSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableReviewAggregationInput]
  ) {
    searchReviews(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
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
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
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
