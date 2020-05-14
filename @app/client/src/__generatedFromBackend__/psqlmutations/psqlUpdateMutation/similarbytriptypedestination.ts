export const mutation = `mutation updateSimilarbytriptypedestination($destinationIds: [Int] ,$tripTypeName: String ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateSimilarbytriptypedestination(input: {clientMutationId: $clientMutationId, patch: {destinationIds: $destinationIds ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     