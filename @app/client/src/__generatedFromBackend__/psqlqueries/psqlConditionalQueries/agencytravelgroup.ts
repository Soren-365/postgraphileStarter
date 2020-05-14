export const query = `query getConditionalAgencytravelgroup(, $travelGroupId:  number , $timeCreated:  string ) {
        __typename
        agencytravelgroups(condition: {,travelGroupId: $travelGroupId ,timeCreated: $timeCreated  })  {
          nodes {
            agencyId travelGroupId timeCreated
 
          }
        }
      }`
      export default `${query}`
        