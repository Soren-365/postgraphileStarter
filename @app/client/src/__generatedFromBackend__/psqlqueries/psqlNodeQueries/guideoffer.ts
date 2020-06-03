export const query = `query getNodeguideoffer($nodeId: String!) {
        __typename
        guideofferByNodeId(nodeId: $nodeId }) {
            id guideResourceIdPool transportResourceIdPool hostResourceIdPool accomodationResourceIdPool

        }
      }`
      export default `${query}`
     