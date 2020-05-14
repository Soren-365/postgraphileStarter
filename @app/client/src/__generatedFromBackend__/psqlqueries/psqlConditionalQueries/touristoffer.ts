export const query = `query getConditionalTouristoffer(, $id:  number ) {
        __typename
        touristoffers(condition: {id: $id  })  {
          nodes {
            id
 
          }
        }
      }`
      export default `${query}`
        