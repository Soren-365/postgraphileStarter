export const mutation = `mutation updateAssoctransport($assocTransportId: [Int] ,$transportId: Int ,$atAgency: Int , $id: String!) {
        __typename
        updateAssoctransport(input: {id: $id, patch: {assocTransportId: $assocTransportId ,transportId: $transportId ,atAgency: $atAgency }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     