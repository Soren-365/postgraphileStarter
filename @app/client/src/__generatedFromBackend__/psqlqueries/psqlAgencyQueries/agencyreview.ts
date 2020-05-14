export const query = `query getAgencyagencyreviews($atAgency: Int!, $id: Int) {
        __typename
        agencyreviews(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id publisherId createdById isActive halfStars reviewText agencyIdTarget startDateTripEvent byRomanian

          }
        }
      }`
      export default `${query}`
     