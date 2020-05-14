export const query = `query getConditionalAgencyreview(, $id:  number , $publisherId:  number , $createdById:  number , $agencyIdTarget:  number ) {
        __typename
        agencyreviews(condition: {id: $id ,publisherId: $publisherId ,createdById: $createdById ,,,,agencyIdTarget: $agencyIdTarget ,,, })  {
          nodes {
            id publisherId createdById isActive halfStars reviewText agencyIdTarget startDateTripEvent byRomanian
 
          }
        }
      }`
      export default `${query}`
        