/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateReviewInput = {
  id?: string | null,
  name: string,
  content: string,
  productRating: number,
  userID: string,
  reviewRating: number,
};

export type ModelReviewConditionInput = {
  name?: ModelStringInput | null,
  content?: ModelStringInput | null,
  productRating?: ModelFloatInput | null,
  userID?: ModelStringInput | null,
  reviewRating?: ModelFloatInput | null,
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
  name: string,
  content: string,
  productRating: number,
  userID: string,
  reviewRating: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReviewInput = {
  id: string,
  name?: string | null,
  content?: string | null,
  productRating?: number | null,
  userID?: string | null,
  reviewRating?: number | null,
};

export type DeleteReviewInput = {
  id: string,
};

export type ModelReviewFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  content?: ModelStringInput | null,
  productRating?: ModelFloatInput | null,
  userID?: ModelStringInput | null,
  reviewRating?: ModelFloatInput | null,
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
    name: string,
    content: string,
    productRating: number,
    userID: string,
    reviewRating: number,
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
    name: string,
    content: string,
    productRating: number,
    userID: string,
    reviewRating: number,
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
    name: string,
    content: string,
    productRating: number,
    userID: string,
    reviewRating: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetReviewQueryVariables = {
  id: string,
};

export type GetReviewQuery = {
  getReview?:  {
    __typename: "Review",
    id: string,
    name: string,
    content: string,
    productRating: number,
    userID: string,
    reviewRating: number,
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
      name: string,
      content: string,
      productRating: number,
      userID: string,
      reviewRating: number,
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
    name: string,
    content: string,
    productRating: number,
    userID: string,
    reviewRating: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReviewSubscription = {
  onUpdateReview?:  {
    __typename: "Review",
    id: string,
    name: string,
    content: string,
    productRating: number,
    userID: string,
    reviewRating: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReviewSubscription = {
  onDeleteReview?:  {
    __typename: "Review",
    id: string,
    name: string,
    content: string,
    productRating: number,
    userID: string,
    reviewRating: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
