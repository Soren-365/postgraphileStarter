export const query = `query getNodepublisher($nodeId: String!) {
        __typename
        publisherByNodeId(nodeId: $nodeId }) { 
            id name createdById belongsToId belongsToType canReview canPublish isRomanian isActive commandLogEntryId timeCreated

        }
      }`
      export default `${query}`
     