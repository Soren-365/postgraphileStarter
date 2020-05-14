/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateUser
// ====================================================

export interface CreateUser_createAccount_account {
  __typename: "Account";
  id: number;
}

export interface CreateUser_createAccount {
  __typename: "CreateAccountPayload";
  /**
   * The `Account` that was created by this mutation.
   */
  account: CreateUser_createAccount_account | null;
}

export interface CreateUser_createUsertable_usertable {
  __typename: "Usertable";
  id: number;
}

export interface CreateUser_createUsertable {
  __typename: "CreateUsertablePayload";
  /**
   * The `Usertable` that was created by this mutation.
   */
  usertable: CreateUser_createUsertable_usertable | null;
}

export interface CreateUser {
  /**
   * Creates a single `Account`.
   */
  createAccount: CreateUser_createAccount | null;
  /**
   * Creates a single `Usertable`.
   */
  createUsertable: CreateUser_createUsertable | null;
}
