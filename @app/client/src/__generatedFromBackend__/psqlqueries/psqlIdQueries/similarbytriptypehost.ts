export const query = `query Similarbytriptypehost($hostIds: Int!) {
        __typename
        similarbytriptypehost(id: $hostIds) {
            hostIds tripTypeName atAgency timeCreated
 
        }
      }`
      export default `${query}`
