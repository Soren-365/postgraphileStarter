export const query = `query getAgencytouristreviews($atAgency: Int!) {
        __typename
        touristreviews(condition: {atAgency: $atAgency }) {
          nodes {
            id,publisherId,createdById,isActive,halfStars,reviewText,touristIdTarget,startDateTripEvent,byRomanian

          }
        }
      }`
      export default `${query}`
     