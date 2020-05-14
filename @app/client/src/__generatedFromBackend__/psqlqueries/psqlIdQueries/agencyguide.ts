export const query = `query Agencyguide($agencyId: Int!) {
        __typename
        agencyguide(id: $agencyId) {
            agencyId guideId timeCreated
 
        }
      }`
      export default `${query}`
