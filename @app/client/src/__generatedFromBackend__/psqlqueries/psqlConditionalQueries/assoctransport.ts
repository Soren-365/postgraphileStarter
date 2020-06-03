export const query = `query getConditionalAssoctransport(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        assoctransports(condition: {,undefined: $undefined ,undefined: $undefined  })  {
          nodes {
            assocTransportId transportId atAgency

          }
        }
      }`
      export default `${query}`
        