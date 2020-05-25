export const query = `query getConditionalTouristreview(, $id:  number , $publisherId:  number , $createdById:  number , $touristIdTarget:  number ) {
        __typename
        touristreviews(condition: {id: $id ,publisherId: $publisherId ,createdById: $createdById ,,,,touristIdTarget: $touristIdTarget ,,, })  {
          nodes {
            id publisherId createdById isActive halfStars reviewText touristIdTarget startDateTripEvent byRomanian timeCreated

          }
        }
      }`
      export default `${query}`
        