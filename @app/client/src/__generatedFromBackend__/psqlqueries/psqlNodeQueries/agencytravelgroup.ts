export const query = `query getNodeagencytravelgroup($nodeId: String!) {
        __typename
        agencytravelgroupByNodeId(nodeId: $nodeId }) { 
            agencyId travelGroupId timeCreated

        }
      }`
      export default `${query}`
     