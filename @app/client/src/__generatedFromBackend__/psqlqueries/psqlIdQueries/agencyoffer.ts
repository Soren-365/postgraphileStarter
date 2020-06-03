export const query = `query Agencyoffer($id: Int!) {
        __typename
        agencyoffer(id: $id) {
            id tripsOfferesourceIdPool guideResourceIdPool

        }
      }`
      export default `${query}`
