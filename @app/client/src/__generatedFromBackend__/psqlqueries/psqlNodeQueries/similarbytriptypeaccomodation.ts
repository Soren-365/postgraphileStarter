export const query = `query getNodesimilarbytriptypeaccomodation($nodeId: String!) {
        __typename
        similarbytriptypeaccomodationByNodeId(nodeId: $nodeId }) { 
            accomodationIds tripTypeName atAgency timeCreated

        }
      }`
      export default `${query}`
     