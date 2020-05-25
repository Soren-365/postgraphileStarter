export const query = `query getConditionalAgencyhost(, $hostId:  number , $timeCreated:  string ) {
        __typename
        agencyhosts(condition: {,hostId: $hostId ,timeCreated: $timeCreated  })  {
          nodes {
            agencyId hostId timeCreated

          }
        }
      }`
      export default `${query}`
        