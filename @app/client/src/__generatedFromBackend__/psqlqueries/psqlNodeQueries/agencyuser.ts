export const query = `query getNodeagencyuser($nodeId: String!) {
        __typename
        agencyuserByNodeId(nodeId: $nodeId }) { 
            agencyId userId timeCreated

        }
      }`
      export default `${query}`
     