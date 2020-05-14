export const query = `query getAgencyreviews($atAgency: Int!) {
        __typename
        reviews(condition: {atAgency: $atAgency }) {
          nodes {
            id,publisherId,createdById,halfStars,reviewText,resourceType,resourceId,publisherTarget,startDateTripEvent,byRomanian,isActive

          }
        }
      }`
      export default `${query}`
     