export const query = `query getNodesimilarbytriptypeaccomodation($nodeId: String!) {
        __typename
        similarbytriptypeaccomodationByNodeId(nodeId: $nodeId }) {
            accomodationIds -- triptypes tripTypeName atAgency timeCreated

        }
      }`
      export default `${query}`
     