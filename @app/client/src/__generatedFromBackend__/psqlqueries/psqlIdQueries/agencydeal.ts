export const query = `query Agencydeal($id: Int!) {
        __typename
        agencydeal(id: $id) {
            id tripOfferResourceIdPool guideResourceIdPool touristResouceIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool

        }
      }`
      export default `${query}`
