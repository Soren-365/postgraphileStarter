export const query = `query Similarbytriptypeaccomodation($accomodationIds: Int!) {
        __typename
        similarbytriptypeaccomodation(id: $accomodationIds) {
            accomodationIds -- triptypes tripTypeName atAgency timeCreated

        }
      }`
      export default `${query}`
