/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Medialocationplacement } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createMedialocation
// ====================================================

export interface createMedialocation_createMedialocation_medialocation_mediadestinationresourcesByMainImage_nodes {
  __typename: "Mediadestinationresource";
  atAgency: number;
  atDestination: number;
  guideImage: number | null;
  id: number | null;
  mainImage: number | null;
}

export interface createMedialocation_createMedialocation_medialocation_mediadestinationresourcesByMainImage {
  __typename: "MediadestinationresourcesConnection";
  /**
   * A list of `Mediadestinationresource` objects.
   */
  nodes: createMedialocation_createMedialocation_medialocation_mediadestinationresourcesByMainImage_nodes[];
}

export interface createMedialocation_createMedialocation_medialocation {
  __typename: "Medialocation";
  id: number | null;
  atAgency: number;
  /**
   * A globally unique identifier. Can be used in various places throughout the system to identify this single value.
   */
  nodeId: string;
  signedUrlDesktop: string | null;
  timeCreated: any | null;
  uploadLocationOriginal: string | null;
  /**
   * Reads and enables pagination through a set of `Mediadestinationresource`.
   */
  mediadestinationresourcesByMainImage: createMedialocation_createMedialocation_medialocation_mediadestinationresourcesByMainImage;
}

export interface createMedialocation_createMedialocation {
  __typename: "CreateMedialocationPayload";
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId: string | null;
  /**
   * The `Medialocation` that was created by this mutation.
   */
  medialocation: createMedialocation_createMedialocation_medialocation | null;
}

export interface createMedialocation {
  /**
   * Creates a single `Medialocation`.
   */
  createMedialocation: createMedialocation_createMedialocation | null;
}

export interface createMedialocationVariables {
  medialocationId: number;
  uploadLocationOriginal?: string | null;
  signedUrlDesktop?: string | null;
  atAgency: number;
  atResource: number;
  mediaLocationPlacement: Medialocationplacement;
}
