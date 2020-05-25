export const query = `query getConditionalAgencyuser(, $userId:  number , $timeCreated:  string ) {
        __typename
        agencyusers(condition: {,userId: $userId ,timeCreated: $timeCreated  })  {
          nodes {
            agencyId userId timeCreated

          }
        }
      }`
      export default `${query}`
        