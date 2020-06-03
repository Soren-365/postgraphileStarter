export const query = `query Touristbid($id: Int!) {
        __typename
        touristbid(id: $id) {
            id tripOfferResourceIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool hostResourceIdPool

        }
      }`
      export default `${query}`
