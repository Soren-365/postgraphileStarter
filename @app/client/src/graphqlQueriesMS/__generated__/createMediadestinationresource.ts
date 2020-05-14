/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createMediadestinationresource
// ====================================================

export interface createMediadestinationresource_createMediadestinationresource_medialocationByMainImage {
  __typename: "Medialocation";
  id: number | null;
}

export interface createMediadestinationresource_createMediadestinationresource_mediadestinationresource {
  __typename: "Mediadestinationresource";
  id: number | null;
}

export interface createMediadestinationresource_createMediadestinationresource {
  __typename: "CreateMediadestinationresourcePayload";
  /**
   * Reads a single `Medialocation` that is related to this `Mediadestinationresource`.
   */
  medialocationByMainImage: createMediadestinationresource_createMediadestinationresource_medialocationByMainImage | null;
  /**
   * The `Mediadestinationresource` that was created by this mutation.
   */
  mediadestinationresource: createMediadestinationresource_createMediadestinationresource_mediadestinationresource | null;
}

export interface createMediadestinationresource {
  /**
   * Creates a single `Mediadestinationresource`.
   */
  createMediadestinationresource: createMediadestinationresource_createMediadestinationresource | null;
}

export interface createMediadestinationresourceVariables {
  medialocationId?: number | null;
  atAgency: number;
  atDestination: number;
}
