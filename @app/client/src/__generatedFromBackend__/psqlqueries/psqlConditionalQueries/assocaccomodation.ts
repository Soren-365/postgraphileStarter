export const query = `query getConditionalAssocaccomodation(, $accomodationId:  number , $atAgency:  number , $timeCreated:  string ) {
        __typename
        assocaccomodations(condition: {,accomodationId: $accomodationId ,atAgency: $atAgency ,timeCreated: $timeCreated  })  {
          nodes {
            assocAccomodationId accomodationId atAgency timeCreated
 
          }
        }
      }`
      export default `${query}`
        