export const query = `query getNodeagencyoffer($nodeId: String!) {
        __typename
        agencyofferByNodeId(nodeId: $nodeId }) {
            id tripsOfferesourceIdPool guideResourceIdPool

        }
      }`
      export default `${query}`
     