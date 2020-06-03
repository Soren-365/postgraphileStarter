export const mutation = `mutation createAssocdestination($assocDestinationId: [Int] ,$destinationId: Int ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        createAssocdestination(input: {id: $id,assocdestination: {assocDestinationId: $assocDestinationId ,destinationId: $destinationId ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     