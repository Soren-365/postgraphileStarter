export const query = `query getConditionalAgencyguide(, $agencyId:  number , $guideId:  number , $timeCreated:  string ) {
        __typename
        agencyguides(condition: {agencyId: $agencyId ,guideId: $guideId ,timeCreated: $timeCreated  })  {
          nodes {
            agencyId guideId timeCreated
 
          }
        }
      }`
      export default `${query}`
        