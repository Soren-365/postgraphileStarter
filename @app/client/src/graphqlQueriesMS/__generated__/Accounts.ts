/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Accounts
// ====================================================

export interface Accounts_accounts_nodes {
  __typename: "Account";
  emailHash: string | null;
  passwordHash: string | null;
  sessionId: string | null;
  id: number;
  /**
   * A globally unique identifier. Can be used in various places throughout the system to identify this single value.
   */
  nodeId: string;
}

export interface Accounts_accounts {
  __typename: "AccountsConnection";
  /**
   * A list of `Account` objects.
   */
  nodes: Accounts_accounts_nodes[];
  /**
   * The count of *all* `Account` you could get from the connection.
   */
  totalCount: number;
}

export interface Accounts {
  /**
   * Reads and enables pagination through a set of `Account`.
   */
  accounts: Accounts_accounts | null;
}
