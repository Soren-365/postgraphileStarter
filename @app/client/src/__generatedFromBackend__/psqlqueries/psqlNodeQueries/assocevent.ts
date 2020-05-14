export const query = `query getNodeassocevent($nodeId: String!) {
        __typename
        assoceventByNodeId(nodeId: $nodeId }) { 
            assocEventId eventId atAgency timeCreated

        }
      }`
      export default `${query}`
     