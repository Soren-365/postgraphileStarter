export const query = `query getConditionalGuidereview(, $undefined:  undefined ) {
        __typename
        guidereviews(condition: {undefined: $undefined ,,,,,,,,, })  {
          nodes {
            id publisherId createdById isActive halfStars reviewText guideIdTarget startDateTripEvent byRomanian timeCreated

          }
        }
      }`
      export default `${query}`
        