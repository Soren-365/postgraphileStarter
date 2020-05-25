export const query = `query getConditionalTouristfavorite(, $id:  number ) {
        __typename
        touristfavorites(condition: {id: $id ,,,,,,,, })  {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
        