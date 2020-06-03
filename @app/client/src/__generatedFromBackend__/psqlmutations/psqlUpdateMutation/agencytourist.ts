export const mutation = `mutation updateAgencytourist($agencyId: Int! ,$touristId: Int! ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateAgencytourist(input: {id: $id, patch: {agencyId: $agencyId ,touristId: $touristId ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     