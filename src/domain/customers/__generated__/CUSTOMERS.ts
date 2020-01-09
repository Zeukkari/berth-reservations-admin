/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ServiceType, ContactMethod } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: CUSTOMERS
// ====================================================

export interface CUSTOMERS_profiles_edges_node_divisionsOfInterest {
  __typename: "AdministrativeDivisionType";
  ocdId: string | null;
  type: string | null;
  name: string | null;
}

export interface CUSTOMERS_profiles_edges_node_serviceConnections_edges_node_service {
  __typename: "ServiceNode";
  id: string;
  type: ServiceType | null;
}

export interface CUSTOMERS_profiles_edges_node_serviceConnections_edges_node {
  __typename: "ServiceConnectionType";
  id: string;
  service: CUSTOMERS_profiles_edges_node_serviceConnections_edges_node_service;
}

export interface CUSTOMERS_profiles_edges_node_serviceConnections_edges {
  __typename: "ServiceConnectionTypeEdge";
  node: CUSTOMERS_profiles_edges_node_serviceConnections_edges_node | null;
}

export interface CUSTOMERS_profiles_edges_node_serviceConnections {
  __typename: "ServiceConnectionTypeConnection";
  edges: (CUSTOMERS_profiles_edges_node_serviceConnections_edges | null)[];
}

export interface CUSTOMERS_profiles_edges_node {
  __typename: "ProfileNode";
  id: string;
  firstName: string;
  lastName: string;
  divisionsOfInterest: (CUSTOMERS_profiles_edges_node_divisionsOfInterest | null)[] | null;
  serviceConnections: CUSTOMERS_profiles_edges_node_serviceConnections | null;
  contactMethod: ContactMethod | null;
  image: string | null;
}

export interface CUSTOMERS_profiles_edges {
  __typename: "ProfileNodeEdge";
  node: CUSTOMERS_profiles_edges_node | null;
}

export interface CUSTOMERS_profiles {
  __typename: "ProfileNodeConnection";
  edges: (CUSTOMERS_profiles_edges | null)[];
}

export interface CUSTOMERS {
  profiles: CUSTOMERS_profiles | null;
}
