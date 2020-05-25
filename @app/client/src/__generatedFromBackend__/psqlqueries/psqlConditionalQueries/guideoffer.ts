export const query = `query getConditionalGuideoffer(, $id:  number ) {
        __typename
        guideoffers(condition: {id: $id ,,, })  {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
        