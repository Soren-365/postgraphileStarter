/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Area } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: Destination
// ====================================================

export interface Destination_destinationresources_nodes_priceInfo {
  __typename: "Priceinfo";
  advertisedPrice: number;
}

export interface Destination_destinationresources_nodes {
  __typename: "Destinationresource";
  /**
   * A globally unique identifier. Can be used in various places throughout the system to identify this single value.
   */
  nodeId: string;
  id: number;
  createdById: number;
  lastModified: any | null;
  atAgency: number;
  destinationName: string | null;
  area: Area | null;
  /**
   * Reads a single `Priceinfo` that is related to this `Destinationresource`.
   */
  priceInfo: Destination_destinationresources_nodes_priceInfo | null;
}

export interface Destination_destinationresources {
  __typename: "DestinationresourcesConnection";
  /**
   * The count of *all* `Destinationresource` you could get from the connection.
   */
  totalCount: number;
  /**
   * A list of `Destinationresource` objects.
   */
  nodes: Destination_destinationresources_nodes[];
}

export interface Destination {
  /**
   * Reads and enables pagination through a set of `Destinationresource`.
   */
  destinationresources: Destination_destinationresources | null;
}
