export const query = `query getConditionalAgencytourist(, $agencyId:  number , $timeCreated:  string ) {
        __typename
        agencytourists(condition: {agencyId: $agencyId ,,timeCreated: $timeCreated  })  {
          nodes {
            agencyId touristId timeCreated

          }
        }
      }`
      export default `${query}`
        