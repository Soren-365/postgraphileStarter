export const query = `query getConditionalTimerange(, $id:  number ) {
        __typename
        timeranges(condition: {id: $id ,,, })  {
          nodes {
            id fromTimestamp toTimestamp timeCreated
 
          }
        }
      }`
      export default `${query}`
        