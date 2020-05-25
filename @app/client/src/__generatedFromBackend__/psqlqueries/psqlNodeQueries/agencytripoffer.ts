export const query = `query getNodeagencytripoffer($nodeId: String!) {
        __typename
        agencytripofferByNodeId(nodeId: $nodeId }) {
            agencyId tripOfferId timeCreated

        }
      }`
      export default `${query}`
     