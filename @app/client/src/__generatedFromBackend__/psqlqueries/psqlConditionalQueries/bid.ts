export const query = `query getConditionalBid(, $id:  number ) {
        __typename
        bids(condition: {id: $id ,,,,, })  {
          nodes {
            id publisherId createdById bidAmount isActive timeCreated
 
          }
        }
      }`
      export default `${query}`
        