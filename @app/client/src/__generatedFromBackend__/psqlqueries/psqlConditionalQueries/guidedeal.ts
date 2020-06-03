export const query = `query getConditionalGuidedeal(, $undefined:  undefined ) {
        __typename
        guidedeals(condition: {undefined: $undefined ,,,, })  {
          nodes {
            id tripsOfferResourceIdPool agenciesRomanianIdPool agenciesAbroadIdPool touristResourceIdPool

          }
        }
      }`
      export default `${query}`
        