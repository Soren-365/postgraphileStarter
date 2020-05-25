export const query = `query getNodeagencyhost($nodeId: String!) {
        __typename
        agencyhostByNodeId(nodeId: $nodeId }) {
            agencyId hostId timeCreated

        }
      }`
      export default `${query}`
     