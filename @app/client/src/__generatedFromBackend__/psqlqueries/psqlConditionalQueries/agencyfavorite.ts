export const query = `query getConditionalAgencyfavorite(, $resourceId:  number , $undefined:  string , $undefined:  number ) {
        __typename
        agencyfavorites(condition: {resourceId: $resourceId ,undefined: $undefined ,undefined: $undefined  })  {
          nodes {
            resourceId

          }
        }
      }`
      export default `${query}`
        