export const query = `query getNodeagencytransport($nodeId: String!) {
        __typename
        agencytransportByNodeId(nodeId: $nodeId }) {
            agencyId transportId timeCreated

        }
      }`
      export default `${query}`
     