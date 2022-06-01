/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateReviewInput = {
  id?: string | null,
  userID: string,
  description: string,
  productRating: number,
  reviewRating: number,
  productReview: string,
};

export type ModelReviewConditionInput = {
  userID?: ModelStringInput | null,
  description?: ModelStringInput | null,
  productRating?: ModelFloatInput | null,
  reviewRating?: ModelFloatInput | null,
  productReview?: ModelStringInput | null,
  and?: Array< ModelReviewConditionInput | null > | null,
  or?: Array< ModelReviewConditionInput | null > | null,
  not?: ModelReviewConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Review = {
  __typename: "Review",
  id: string,
  userID: string,
  description: string,
  productRating: number,
  reviewRating: number,
  productReview: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReviewInput = {
  id: string,
  userID?: string | null,
  description?: string | null,
  productRating?: number | null,
  reviewRating?: number | null,
  productReview?: string | null,
};

export type DeleteReviewInput = {
  id: string,
};

export type SearchableReviewFilterInput = {
  id?: SearchableIDFilterInput | null,
  userID?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  productRating?: SearchableFloatFilterInput | null,
  reviewRating?: SearchableFloatFilterInput | null,
  productReview?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableReviewFilterInput | null > | null,
  or?: Array< SearchableReviewFilterInput | null > | null,
  not?: SearchableReviewFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableFloatFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableReviewSortInput = {
  field?: SearchableReviewSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableReviewSortableFields {
  id = "id",
  userID = "userID",
  description = "description",
  productRating = "productRating",
  reviewRating = "reviewRating",
  productReview = "productReview",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableReviewAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableReviewAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableReviewAggregateField {
  id = "id",
  userID = "userID",
  description = "description",
  productRating = "productRating",
  reviewRating = "reviewRating",
  productReview = "productReview",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableReviewConnection = {
  __typename: "SearchableReviewConnection",
  items:  Array<Review | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type ModelReviewFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelStringInput | null,
  description?: ModelStringInput | null,
  productRating?: ModelFloatInput | null,
  reviewRating?: ModelFloatInput | null,
  productReview?: ModelStringInput | null,
  and?: Array< ModelReviewFilterInput | null > | null,
  or?: Array< ModelReviewFilterInput | null > | null,
  not?: ModelReviewFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelReviewConnection = {
  __typename: "ModelReviewConnection",
  items:  Array<Review | null >,
  nextToken?: string | null,
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type CreateReviewMutation = {
  createReview?:  {
    __typename: "Review",
    id: string,
    userID: string,
    description: string,
    productRating: number,
    reviewRating: number,
    productReview: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReviewMutationVariables = {
  input: UpdateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type UpdateReviewMutation = {
  updateReview?:  {
    __typename: "Review",
    id: string,
    userID: string,
    description: string,
    productRating: number,
    reviewRating: number,
    productReview: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReviewMutationVariables = {
  input: DeleteReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type DeleteReviewMutation = {
  deleteReview?:  {
    __typename: "Review",
    id: string,
    userID: string,
    description: string,
    productRating: number,
    reviewRating: number,
    productReview: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SearchReviewsQueryVariables = {
  filter?: SearchableReviewFilterInput | null,
  sort?: Array< SearchableReviewSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableReviewAggregationInput | null > | null,
};

export type SearchReviewsQuery = {
  searchReviews?:  {
    __typename: "SearchableReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      userID: string,
      description: string,
      productRating: number,
      reviewRating: number,
      productReview: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetReviewQueryVariables = {
  id: string,
};

export type GetReviewQuery = {
  getReview?:  {
    __typename: "Review",
    id: string,
    userID: string,
    description: string,
    productRating: number,
    reviewRating: number,
    productReview: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReviewsQuery = {
  listReviews?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      userID: string,
      description: string,
      productRating: number,
      reviewRating: number,
      productReview: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateReviewSubscription = {
  onCreateReview?:  {
    __typename: "Review",
    id: string,
    userID: string,
    description: string,
    productRating: number,
    reviewRating: number,
    productReview: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReviewSubscription = {
  onUpdateReview?:  {
    __typename: "Review",
    id: string,
    userID: string,
    description: string,
    productRating: number,
    reviewRating: number,
    productReview: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReviewSubscription = {
  onDeleteReview?:  {
    __typename: "Review",
    id: string,
    userID: string,
    description: string,
    productRating: number,
    reviewRating: number,
    productReview: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
