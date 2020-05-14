export const query = `query Agencyoffer($id: Int!) {
        __typename
        agencyoffer(id: $id) {
            id tripsOfferesourceIdPool
 
        }
      }`
      export default `${query}`
