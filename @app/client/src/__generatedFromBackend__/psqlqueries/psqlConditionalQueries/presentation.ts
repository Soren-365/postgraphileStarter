export const query = `query getConditionalPresentation(, $id:  number , $publisherId:  number , $createdById:  number ) {
        __typename
        presentations(condition: {id: $id ,,publisherId: $publisherId ,createdById: $createdById ,,,,, })  {
          nodes {
            id headline publisherId createdById resourceType resourceTypeId isActive lastModified
 
          }
        }
      }`
      export default `${query}`
        