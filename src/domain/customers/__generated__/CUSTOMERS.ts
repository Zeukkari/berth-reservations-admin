/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CUSTOMERS
// ====================================================

export interface CUSTOMERS_harbors_edges_node_properties_piers_edges_node_properties {
  __typename: "PierProperties";
  electricity: boolean;
  wasteCollection: boolean;
  gate: boolean;
  water: boolean;
  lighting: boolean;
}

export interface CUSTOMERS_harbors_edges_node_properties_piers_edges_node {
  __typename: "PierNode";
  properties: CUSTOMERS_harbors_edges_node_properties_piers_edges_node_properties | null;
}

export interface CUSTOMERS_harbors_edges_node_properties_piers_edges {
  __typename: "PierNodeEdge";
  node: CUSTOMERS_harbors_edges_node_properties_piers_edges_node | null;
}

export interface CUSTOMERS_harbors_edges_node_properties_piers {
  __typename: "PierNodeConnection";
  edges: (CUSTOMERS_harbors_edges_node_properties_piers_edges | null)[];
}

export interface CUSTOMERS_harbors_edges_node_properties {
  __typename: "HarborProperties";
  name: string | null;
  numberOfPlaces: number | null;
  streetAddress: string | null;
  zipCode: string;
  municipality: string | null;
  wwwUrl: string;
  imageFile: string | null;
  servicemapId: string | null;
  maximumWidth: number | null;
  piers: CUSTOMERS_harbors_edges_node_properties_piers;
}

export interface CUSTOMERS_harbors_edges_node {
  __typename: "HarborNode";
  id: string;
  properties: CUSTOMERS_harbors_edges_node_properties | null;
}

export interface CUSTOMERS_harbors_edges {
  __typename: "HarborNodeEdge";
  node: CUSTOMERS_harbors_edges_node | null;
}

export interface CUSTOMERS_harbors {
  __typename: "HarborNodeConnection";
  edges: (CUSTOMERS_harbors_edges | null)[];
}

export interface CUSTOMERS {
  harbors: CUSTOMERS_harbors | null;
}
