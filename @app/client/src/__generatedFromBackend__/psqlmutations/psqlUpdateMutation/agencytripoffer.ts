export const mutation = `mutation updateAgencytripoffer($agencyId: Int! ,$tripOfferId: Int! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateAgencytripoffer(input: {clientMutationId: $clientMutationId, patch: {agencyId: $agencyId ,tripOfferId: $tripOfferId ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     