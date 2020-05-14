export const query = `query getNodecontact($nodeId: String!) {
        __typename
        contactByNodeId(nodeId: $nodeId }) { 
            id firstName lastName associatedCompany street city postCode country telephone email isCompany createdById belongsToType belongsToId

        }
      }`
      export default `${query}`
     