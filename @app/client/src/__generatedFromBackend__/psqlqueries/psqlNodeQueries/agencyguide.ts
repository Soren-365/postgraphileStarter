export const query = `query getNodeagencyguide($nodeId: String!) {
        __typename
        agencyguideByNodeId(nodeId: $nodeId }) {
            agencyId guideId timeCreated

        }
      }`
      export default `${query}`
     