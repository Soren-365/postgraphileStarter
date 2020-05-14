export const query = `query getConditionalGuidedeal(, $id:  number ) {
        __typename
        guidedeals(condition: {id: $id ,,, })  {
          nodes {
            id tripsOfferResourceIdPool agenciesRomanianIdPool agenciesAbroadIdPool
 
          }
        }
      }`
      export default `${query}`
        