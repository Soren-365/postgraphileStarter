export const query = `query Agencyevent($agencyId: Int!) {
        __typename
        agencyevent(id: $agencyId) {
            agencyId eventId timeCreated

        }
      }`
      export default `${query}`
