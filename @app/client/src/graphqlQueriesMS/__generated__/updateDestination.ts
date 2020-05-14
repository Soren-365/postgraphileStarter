/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateDestination
// ====================================================

export interface updateDestination_updateDestinationresource_destinationresource {
  __typename: "Destinationresource";
  lastModified: any | null;
  createdById: number;
  lastModifiedBy: number | null;
}

export interface updateDestination_updateDestinationresource {
  __typename: "UpdateDestinationresourcePayload";
  /**
   * The `Destinationresource` that was updated by this mutation.
   */
  destinationresource: updateDestination_updateDestinationresource_destinationresource | null;
}

export interface updateDestination {
  /**
   * Updates a single `Destinationresource` using a unique key and a patch.
   */
  updateDestinationresource: updateDestination_updateDestinationresource | null;
}

export interface updateDestinationVariables {
  lastModified: any;
  lastModifiedBy: number;
}
