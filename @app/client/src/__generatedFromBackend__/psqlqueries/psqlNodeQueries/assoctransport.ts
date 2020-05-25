export const query = `query getNodeassoctransport($nodeId: String!) {
        __typename
        assoctransportByNodeId(nodeId: $nodeId }) {
            assocTransportId transportId atAgency

        }
      }`
      export default `${query}`
     