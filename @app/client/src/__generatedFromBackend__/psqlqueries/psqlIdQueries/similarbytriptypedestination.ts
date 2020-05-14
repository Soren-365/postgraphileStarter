export const query = `query Similarbytriptypedestination($destinationIds: Int!) {
        __typename
        similarbytriptypedestination(id: $destinationIds) {
            destinationIds tripTypeName atAgency timeCreated
 
        }
      }`
      export default `${query}`
