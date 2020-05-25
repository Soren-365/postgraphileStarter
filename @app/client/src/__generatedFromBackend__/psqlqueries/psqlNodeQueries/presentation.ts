export const query = `query getNodepresentation($nodeId: String!) {
        __typename
        presentationByNodeId(nodeId: $nodeId }) {
            id headline publisherId createdById resourceType resourceTypeId isActive lastModified timeCreated

        }
      }`
      export default `${query}`
     