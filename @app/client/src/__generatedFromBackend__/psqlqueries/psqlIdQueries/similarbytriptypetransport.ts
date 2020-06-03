export const query = `query Similarbytriptypetransport($transportIds: Int!) {
        __typename
        similarbytriptypetransport(id: $transportIds) {
            transportIds tripTypeName atAgency timeCreated

        }
      }`
      export default `${query}`
