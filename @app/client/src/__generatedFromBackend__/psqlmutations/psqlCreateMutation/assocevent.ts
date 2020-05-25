export const mutation = `mutation createAssocevent($assocEventId: [Int] ,$eventId: Int ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createAssocevent(input: {clientMutationId: $clientMutationId,assocevent: {assocEventId: $assocEventId ,eventId: $eventId ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     