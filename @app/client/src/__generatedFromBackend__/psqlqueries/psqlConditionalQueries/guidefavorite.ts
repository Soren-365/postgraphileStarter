export const query = `query getConditionalGuidefavorite(, $id:  number ) {
        __typename
        guidefavorites(condition: {id: $id ,, })  {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
        