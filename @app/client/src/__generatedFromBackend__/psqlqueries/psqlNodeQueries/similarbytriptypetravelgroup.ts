export const query = `query getNodesimilarbytriptypetravelgroup($nodeId: String!) {
        __typename
        similarbytriptypetravelgroupByNodeId(nodeId: $nodeId }) {
            travelGroupIds tripTypeName atAgency timeCreated

        }
      }`
      export default `${query}`
     