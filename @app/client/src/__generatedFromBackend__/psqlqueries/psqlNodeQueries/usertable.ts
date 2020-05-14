export const query = `query getNodeusertable($nodeId: String!) {
        __typename
        usertableByNodeId(nodeId: $nodeId }) { 
            id firstName lastName userEmail atAgency isAdmin atGuide atTourist timeCreated isActive

        }
      }`
      export default `${query}`
     