export const query = `query getConditionalTouristbid(, $id:  number ) {
        __typename
        touristbids(condition: {id: $id ,,,, })  {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
        