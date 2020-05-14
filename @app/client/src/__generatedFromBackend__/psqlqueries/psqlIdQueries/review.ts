export const query = `query Review($id: Int!) {
        __typename
        review(id: $id) {
            id publisherId createdById halfStars reviewText resourceType resourceId publisherTarget startDateTripEvent byRomanian isActive
 
        }
      }`
      export default `${query}`
