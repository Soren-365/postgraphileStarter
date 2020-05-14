export const query = `query getNodeagencyevent($nodeId: String!) {
        __typename
        agencyeventByNodeId(nodeId: $nodeId }) { 
            agencyId eventId timeCreated

        }
      }`
      export default `${query}`
     