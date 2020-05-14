export const query = `query getNodetriptype($nodeId: String!) {
        __typename
        triptypeByNodeId(nodeId: $nodeId }) { 
            id tripTypeName atAgency lastModified timeCreated

        }
      }`
      export default `${query}`
     