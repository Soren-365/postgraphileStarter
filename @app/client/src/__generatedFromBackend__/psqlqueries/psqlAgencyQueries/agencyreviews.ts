export const query = `query getAgencyagencyreviews($atAgency: Int!) {
        __typename
        agencyreviews(condition: {atAgency: $atAgency }) {
          nodes {
            id,publisherId,createdById,isActive,halfStars,reviewText,agencyIdTarget,startDateTripEvent,byRomanian

          }
        }
      }`
      export default `${query}`
     