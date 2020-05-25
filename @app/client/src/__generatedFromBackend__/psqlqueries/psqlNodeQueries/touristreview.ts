export const query = `query getNodetouristreview($nodeId: String!) {
        __typename
        touristreviewByNodeId(nodeId: $nodeId }) {
            id publisherId createdById isActive halfStars reviewText touristIdTarget startDateTripEvent byRomanian timeCreated

        }
      }`
      export default `${query}`
     