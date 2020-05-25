export const query = `query getNodereview($nodeId: String!) {
        __typename
        reviewByNodeId(nodeId: $nodeId }) {
            id publisherId createdById halfStars reviewText resourceType resourceId publisherTarget startDateTripEvent byRomanian isActive timeCreated

        }
      }`
      export default `${query}`
     