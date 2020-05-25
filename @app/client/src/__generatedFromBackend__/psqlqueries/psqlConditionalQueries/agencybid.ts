export const query = `query getConditionalAgencybid(, $id:  number , $agencyId:  number ) {
        __typename
        agencybids(condition: {id: $id ,agencyId: $agencyId  })  {
          nodes {
            id agencyId

          }
        }
      }`
      export default `${query}`
        