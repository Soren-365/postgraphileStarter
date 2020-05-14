export const query = `query getConditionalGuidebid(, $id:  number ) {
        __typename
        guidebids(condition: {id: $id  })  {
          nodes {
            id
 
          }
        }
      }`
      export default `${query}`
        