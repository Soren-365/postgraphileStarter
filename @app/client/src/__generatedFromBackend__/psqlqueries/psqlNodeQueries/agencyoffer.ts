export const query = `query getNodeagencyoffer($nodeId: String!) {
        __typename
        agencyofferByNodeId(nodeId: $nodeId }) { 
            id tripsOfferesourceIdPool

        }
      }`
      export default `${query}`
     