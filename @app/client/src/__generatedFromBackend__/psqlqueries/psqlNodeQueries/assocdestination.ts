export const query = `query getNodeassocdestination($nodeId: String!) {
        __typename
        assocdestinationByNodeId(nodeId: $nodeId }) {
            assocDestinationId destinationId atAgency timeCreated

        }
      }`
      export default `${query}`
     