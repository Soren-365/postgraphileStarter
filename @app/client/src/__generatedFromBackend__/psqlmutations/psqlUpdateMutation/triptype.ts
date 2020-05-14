export const mutation = `mutation updateTriptype($id: Int! ,$tripTypeName: String! ,$atAgency: Int ,$lastModified: Datetime ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateTriptype(input: {clientMutationId: $clientMutationId, patch: {,tripTypeName: $tripTypeName ,atAgency: $atAgency ,lastModified: $lastModified ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     