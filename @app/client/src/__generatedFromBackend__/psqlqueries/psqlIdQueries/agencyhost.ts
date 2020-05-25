export const query = `query Agencyhost($agencyId: Int!) {
        __typename
        agencyhost(id: $agencyId) {
            agencyId hostId timeCreated

        }
      }`
      export default `${query}`
