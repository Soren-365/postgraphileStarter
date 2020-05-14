/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Judet } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getMyDestination
// ====================================================

export interface getMyDestination_destinationresource {
  __typename: "Destinationresource";
  /**
   * A globally unique identifier. Can be used in various places throughout the system to identify this single value.
   */
  nodeId: string;
  destinationName: string | null;
  id: number;
  atAgency: number;
  createdById: number;
  lastModified: any | null;
  judet: Judet | null;
  tripTypeName: string | null;
  isActive: boolean | null;
  priceInfoId: number | null;
  activeAtPeriodsId: number | null;
  presentationId: number | null;
  geoCodingId: number | null;
  isPublic: boolean;
}

export interface getMyDestination {
  destinationresource: getMyDestination_destinationresource | null;
}

export interface getMyDestinationVariables {
  id: number;
}
