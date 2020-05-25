export const query = `query getConditionalAgencytripoffer(, $tripOfferId:  number , $timeCreated:  string ) {
        __typename
        agencytripoffers(condition: {,tripOfferId: $tripOfferId ,timeCreated: $timeCreated  })  {
          nodes {
            agencyId tripOfferId timeCreated

          }
        }
      }`
      export default `${query}`
        