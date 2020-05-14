/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Agencies
// ====================================================

export interface Agencies_agencies_nodes {
  __typename: "Agency";
  id: number;
}

export interface Agencies_agencies {
  __typename: "AgenciesConnection";
  /**
   * The count of *all* `Agency` you could get from the connection.
   */
  totalCount: number;
  /**
   * A list of `Agency` objects.
   */
  nodes: Agencies_agencies_nodes[];
}

export interface Agencies {
  /**
   * Reads and enables pagination through a set of `Agency`.
   */
  agencies: Agencies_agencies | null;
}
