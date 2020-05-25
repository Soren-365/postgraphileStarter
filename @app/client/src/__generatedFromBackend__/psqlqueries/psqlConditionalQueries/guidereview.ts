export const query = `query getConditionalGuidereview(, $id:  number , $publisherId:  number , $createdById:  number , $guideIdTarget:  number ) {
        __typename
        guidereviews(condition: {id: $id ,publisherId: $publisherId ,createdById: $createdById ,,,,guideIdTarget: $guideIdTarget ,,, })  {
          nodes {
            id publisherId createdById isActive halfStars reviewText guideIdTarget startDateTripEvent byRomanian timeCreated

          }
        }
      }`
      export default `${query}`
        