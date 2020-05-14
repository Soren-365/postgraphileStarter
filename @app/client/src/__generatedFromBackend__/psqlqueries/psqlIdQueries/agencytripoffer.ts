export const query = `query Agencytripoffer($agencyId: Int!) {
        __typename
        agencytripoffer(id: $agencyId) {
            agencyId tripOfferId timeCreated
 
        }
      }`
      export default `${query}`
