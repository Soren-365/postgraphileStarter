export const query = `query Touristbid($id: Int!) {
        __typename
        touristbid(id: $id) {
            id tripOfferResourceIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool
 
        }
      }`
      export default `${query}`
