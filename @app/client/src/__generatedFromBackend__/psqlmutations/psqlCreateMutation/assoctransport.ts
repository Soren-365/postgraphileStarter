export const mutation = `mutation createAssoctransport($assocTransportId: [Int] ,$transportId: Int ,$atAgency: Int , $id: String!) {
        __typename
        createAssoctransport(input: {id: $id,assoctransport: {assocTransportId: $assocTransportId ,transportId: $transportId ,atAgency: $atAgency }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     