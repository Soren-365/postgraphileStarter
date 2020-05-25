export const query = `query getNodeguidereview($nodeId: String!) {
        __typename
        guidereviewByNodeId(nodeId: $nodeId }) {
            id publisherId createdById isActive halfStars reviewText guideIdTarget startDateTripEvent byRomanian timeCreated

        }
      }`
      export default `${query}`
     