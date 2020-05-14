export const mutation = `mutation updateAgencyguide($agencyId: Int! ,$guideId: Int! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateAgencyguide(input: {clientMutationId: $clientMutationId, patch: {agencyId: $agencyId ,guideId: $guideId ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     