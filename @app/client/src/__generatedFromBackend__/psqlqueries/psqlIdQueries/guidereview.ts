export const query = `query Guidereview($id: Int!) {
        __typename
        guidereview(id: $id) {
            id publisherId createdById isActive halfStars reviewText guideIdTarget startDateTripEvent byRomanian timeCreated

        }
      }`
      export default `${query}`
