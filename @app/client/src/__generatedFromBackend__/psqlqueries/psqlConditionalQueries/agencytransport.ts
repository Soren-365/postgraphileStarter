export const query = `query getConditionalAgencytransport(, $transportId:  number , $timeCreated:  string ) {
        __typename
        agencytransports(condition: {,transportId: $transportId ,timeCreated: $timeCreated  })  {
          nodes {
            agencyId transportId timeCreated
 
          }
        }
      }`
      export default `${query}`
        