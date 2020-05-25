export const query = `query Touristreview($id: Int!) {
        __typename
        touristreview(id: $id) {
            id publisherId createdById isActive halfStars reviewText touristIdTarget startDateTripEvent byRomanian timeCreated

        }
      }`
      export default `${query}`
