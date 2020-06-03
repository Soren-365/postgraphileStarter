export const query = `query getConditionalTouristreview(, $undefined:  undefined ) {
        __typename
        touristreviews(condition: {undefined: $undefined ,,,,,,,,, })  {
          nodes {
            id publisherId createdById isActive halfStars reviewText touristIdTarget startDateTripEvent byRomanian timeCreated

          }
        }
      }`
      export default `${query}`
        