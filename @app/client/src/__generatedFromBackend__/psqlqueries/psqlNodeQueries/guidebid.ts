export const query = `query getNodeguidebid($nodeId: String!) {
        __typename
        guidebidByNodeId(nodeId: $nodeId }) { 
            id

        }
      }`
      export default `${query}`
     