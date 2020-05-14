export const mutation = `mutation updateAssocdestination($assocDestinationId: [Int] ,$destinationId: Int ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateAssocdestination(input: {clientMutationId: $clientMutationId, patch: {assocDestinationId: $assocDestinationId ,destinationId: $destinationId ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     