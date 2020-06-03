export const query = `query getConditionalReview(, $undefined:  undefined ) {
        __typename
        reviews(condition: {undefined: $undefined ,,,,,,,,,,, })  {
          nodes {
            id publisherId createdById halfStars reviewText resourceType resourceId publisherTarget startDateTripEvent byRomanian isActive timeCreated

          }
        }
      }`
      export default `${query}`
        