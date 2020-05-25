export const query = `query getAgencyguidereviews($atAgency: Int!, $id: Int) {
        __typename
        guidereviews(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id publisherId createdById isActive halfStars reviewText guideIdTarget startDateTripEvent byRomanian timeCreated

          }
        }
      }`
      export default `${query}`
     