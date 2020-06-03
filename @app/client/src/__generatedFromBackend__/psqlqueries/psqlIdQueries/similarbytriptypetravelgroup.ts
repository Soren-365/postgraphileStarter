export const query = `query Similarbytriptypetravelgroup($travelGroupIds: Int!) {
        __typename
        similarbytriptypetravelgroup(id: $travelGroupIds) {
            travelGroupIds tripTypeName atAgency timeCreated

        }
      }`
      export default `${query}`
