export const query = `query getAgencyreviews($atAgency: Int!, $id: Int) {
        __typename
        reviews(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id publisherId createdById halfStars reviewText resourceType resourceId publisherTarget startDateTripEvent byRomanian isActive

          }
        }
      }`
      export default `${query}`
     