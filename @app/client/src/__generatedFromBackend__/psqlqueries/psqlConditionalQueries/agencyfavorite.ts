export const query = `query getConditionalAgencyfavorite(, $resourceId:  number , $resourceType:  string , $atAgency:  number ) {
        __typename
        agencyfavorites(condition: {resourceId: $resourceId ,resourceType: $resourceType ,atAgency: $atAgency  })  {
          nodes {
            resourceId resourceType atAgency
 
          }
        }
      }`
      export default `${query}`
        