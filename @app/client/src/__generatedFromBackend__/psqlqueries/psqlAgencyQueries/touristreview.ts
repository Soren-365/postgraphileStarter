export const query = `query getAgencytouristreviews($atAgency: Int!, $id: Int) {
        __typename
        touristreviews(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id publisherId createdById isActive halfStars reviewText touristIdTarget startDateTripEvent byRomanian

          }
        }
      }`
      export default `${query}`
     