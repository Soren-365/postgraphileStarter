export const query = `query getConditionalTouristbid(, $id:  number ) {
        __typename
        touristbids(condition: {id: $id ,,,, })  {
          nodes {
            id tripOfferResourceIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool
 
          }
        }
      }`
      export default `${query}`
        