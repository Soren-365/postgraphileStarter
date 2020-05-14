export const query = `query Agencytravelgroup($agencyId: Int!) {
        __typename
        agencytravelgroup(id: $agencyId) {
            agencyId travelGroupId timeCreated
 
        }
      }`
      export default `${query}`
