export const query = `query Agencytourist($agencyId: Int!) {
        __typename
        agencytourist(id: $agencyId) {
            agencyId touristId timeCreated
 
        }
      }`
      export default `${query}`
