export const query = `query getConditionalReview(, $id:  number , $publisherId:  number , $createdById:  number , $publisherTarget:  number ) {
        __typename
        reviews(condition: {id: $id ,publisherId: $publisherId ,createdById: $createdById ,,,,,publisherTarget: $publisherTarget ,,,, })  {
          nodes {
            id publisherId createdById halfStars reviewText resourceType resourceId publisherTarget startDateTripEvent byRomanian isActive timeCreated

          }
        }
      }`
      export default `${query}`
        