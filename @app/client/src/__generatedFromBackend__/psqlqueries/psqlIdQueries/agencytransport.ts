export const query = `query Agencytransport($agencyId: Int!) {
        __typename
        agencytransport(id: $agencyId) {
            agencyId transportId timeCreated
 
        }
      }`
      export default `${query}`
