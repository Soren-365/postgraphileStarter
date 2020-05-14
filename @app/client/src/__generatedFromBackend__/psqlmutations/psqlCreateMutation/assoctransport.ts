export const mutation = `mutation createAssoctransport($assocTransportId: [Int] ,$transportId: Int ,$atAgency: Int , $clientMutationId: String!) {
        __typename
        createAssoctransport(input: {clientMutationId: $clientMutationId,assoctransport: {assocTransportId: $assocTransportId ,transportId: $transportId ,atAgency: $atAgency }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     