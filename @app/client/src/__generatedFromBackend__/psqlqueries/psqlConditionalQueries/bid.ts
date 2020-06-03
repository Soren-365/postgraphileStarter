export const query = `query getConditionalBid(, $undefined:  undefined ) {
        __typename
        bids(condition: {undefined: $undefined ,,,,, })  {
          nodes {
            id publisherId createdById bidAmount isActive timeCreated

          }
        }
      }`
      export default `${query}`
        