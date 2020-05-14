export const mutation = `mutation updateAssoctransport($assocTransportId: [Int] ,$transportId: Int ,$atAgency: Int , $clientMutationId: String!) {
        __typename
        updateAssoctransport(input: {clientMutationId: $clientMutationId, patch: {assocTransportId: $assocTransportId ,transportId: $transportId ,atAgency: $atAgency }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     