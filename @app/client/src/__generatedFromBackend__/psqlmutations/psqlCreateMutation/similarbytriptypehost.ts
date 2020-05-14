export const mutation = `mutation createSimilarbytriptypehost($hostIds: [Int] ,$tripTypeName: String ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createSimilarbytriptypehost(input: {clientMutationId: $clientMutationId,similarbytriptypehost: {hostIds: $hostIds ,tripTypeName: $tripTypeName ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     