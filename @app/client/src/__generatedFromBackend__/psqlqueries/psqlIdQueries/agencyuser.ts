export const query = `query Agencyuser($agencyId: Int!) {
        __typename
        agencyuser(id: $agencyId) {
            agencyId userId timeCreated

        }
      }`
      export default `${query}`
