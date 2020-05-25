export const query = `query getConditionalTouristdeal(, $id:  number ) {
        __typename
        touristdeals(condition: {id: $id ,,,,,,, })  {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
        