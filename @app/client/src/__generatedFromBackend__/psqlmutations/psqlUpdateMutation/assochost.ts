export const mutation = `mutation updateAssochost($assocHostId: [Int] ,$hostId: Int ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateAssochost(input: {clientMutationId: $clientMutationId, patch: {assocHostId: $assocHostId ,hostId: $hostId ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     