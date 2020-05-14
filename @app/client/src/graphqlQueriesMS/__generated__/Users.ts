/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Users
// ====================================================

export interface Users_usertables_nodes {
  __typename: "Usertable";
  id: number;
  firstName: string | null;
  lastName: string | null;
  userEmail: string;
  atAgency: number | null;
  atGuide: number | null;
  atTourist: number | null;
  isActive: boolean | null;
  isRomanian: boolean | null;
}

export interface Users_usertables_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: any | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: any | null;
}

export interface Users_usertables {
  __typename: "UsertablesConnection";
  /**
   * A list of `Usertable` objects.
   */
  nodes: Users_usertables_nodes[];
  /**
   * Information to aid in pagination.
   */
  pageInfo: Users_usertables_pageInfo;
  /**
   * The count of *all* `Usertable` you could get from the connection.
   */
  totalCount: number;
}

export interface Users {
  /**
   * Reads and enables pagination through a set of `Usertable`.
   */
  usertables: Users_usertables | null;
}
