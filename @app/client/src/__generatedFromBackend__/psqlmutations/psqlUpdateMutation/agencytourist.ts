export const mutation = `mutation updateAgencytourist($agencyId: Int! ,$touristId: Int! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateAgencytourist(input: {clientMutationId: $clientMutationId, patch: {agencyId: $agencyId ,touristId: $touristId ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     