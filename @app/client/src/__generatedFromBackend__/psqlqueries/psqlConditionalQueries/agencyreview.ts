export const query = `query getConditionalAgencyreview(, $undefined:  undefined ) {
        __typename
        agencyreviews(condition: {undefined: $undefined ,,,,,,,,, })  {
          nodes {
            id publisherId createdById isActive halfStars reviewText agencyIdTarget startDateTripEvent byRomanian timeCreated

          }
        }
      }`
      export default `${query}`
        