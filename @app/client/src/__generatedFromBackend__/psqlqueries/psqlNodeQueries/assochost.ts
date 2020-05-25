export const query = `query getNodeassochost($nodeId: String!) {
        __typename
        assochostByNodeId(nodeId: $nodeId }) {
            assocHostId hostId atAgency timeCreated

        }
      }`
      export default `${query}`
     