/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Account
// ====================================================

export interface Account_account {
  __typename: "Account";
  id: number;
  /**
   * A globally unique identifier. Can be used in various places throughout the system to identify this single value.
   */
  nodeId: string;
  emailHash: string | null;
  passwordHash: string | null;
}

export interface Account {
  account: Account_account | null;
}
