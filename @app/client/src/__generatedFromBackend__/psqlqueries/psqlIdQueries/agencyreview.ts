export const query = `query Agencyreview($id: Int!) {
        __typename
        agencyreview(id: $id) {
            id publisherId createdById isActive halfStars reviewText agencyIdTarget startDateTripEvent byRomanian timeCreated

        }
      }`
      export default `${query}`
