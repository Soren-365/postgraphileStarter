export const query = `query getNodeagencyreview($nodeId: String!) {
        __typename
        agencyreviewByNodeId(nodeId: $nodeId }) { 
            id publisherId createdById isActive halfStars reviewText agencyIdTarget startDateTripEvent byRomanian

        }
      }`
      export default `${query}`
     