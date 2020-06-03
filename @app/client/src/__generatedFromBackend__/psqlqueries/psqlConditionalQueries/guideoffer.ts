export const query = `query getConditionalGuideoffer(, $undefined:  undefined ) {
        __typename
        guideoffers(condition: {undefined: $undefined ,,,, })  {
          nodes {
            id guideResourceIdPool transportResourceIdPool hostResourceIdPool accomodationResourceIdPool

          }
        }
      }`
      export default `${query}`
        