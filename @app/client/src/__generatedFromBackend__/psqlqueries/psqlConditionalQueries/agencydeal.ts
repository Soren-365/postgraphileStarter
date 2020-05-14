export const query = `query getConditionalAgencydeal(, $id:  number ) {
        __typename
        agencydeals(condition: {id: $id ,,,,,, })  {
          nodes {
            id tripOfferResourceIdPool guideResourceIdPool touristResouceIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool
 
          }
        }
      }`
      export default `${query}`
        