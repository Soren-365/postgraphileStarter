export const query = `query Similarbytriptypeguide($guideIds: Int!) {
        __typename
        similarbytriptypeguide(id: $guideIds) {
            guideIds tripTypeName atAgency timeCreated
 
        }
      }`
      export default `${query}`
