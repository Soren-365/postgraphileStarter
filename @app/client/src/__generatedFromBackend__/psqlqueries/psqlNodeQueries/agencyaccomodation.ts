export const query = `query getNodeagencyaccomodation($nodeId: String!) {
        __typename
        agencyaccomodationByNodeId(nodeId: $nodeId }) { 
            agencyId accomodationId lastModified urlExperyAt presentationPlacements agencyBucketUrls timeCreated

        }
      }`
      export default `${query}`
     