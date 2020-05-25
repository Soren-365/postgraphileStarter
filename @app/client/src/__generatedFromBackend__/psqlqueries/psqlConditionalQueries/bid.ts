export const query = `query getConditionalBid(, $id:  number ) {
        __typename
        bids(condition: {id: $id ,,,, })  {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
        