export const mutation = `mutation createAssocdestination($assocDestinationId: [Int] ,$destinationId: Int ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createAssocdestination(input: {clientMutationId: $clientMutationId,assocdestination: {assocDestinationId: $assocDestinationId ,destinationId: $destinationId ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     